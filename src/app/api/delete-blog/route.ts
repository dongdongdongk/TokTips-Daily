import { NextRequest, NextResponse } from 'next/server'
import GitHubAPI from '@/lib/github-api'

const TokenManager = require('../../../../scripts/utils/token-manager')

/**
 * GET 요청: 리다이렉트 기반 게시글 삭제
 * 이메일 링크에서 직접 호출되는 엔드포인트
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.redirect(new URL('/delete-expired?reason=no_token', request.url))
    }

    const tokenManager = new TokenManager()
    const decoded = tokenManager.verifyDeleteToken(token)

    if (!decoded) {
      return NextResponse.redirect(new URL('/delete-expired?reason=invalid_token', request.url))
    }

    const { filename, title } = decoded

    // GitHub API를 사용해서 파일 삭제
    try {
      const githubAPI = new GitHubAPI()
      const result = await githubAPI.deleteBlogPost(filename, title)
      
      if (result.success) {
        console.log(`Blog deleted via GitHub API: ${result.deletedFile} - ${title}`)
        return NextResponse.redirect(new URL('/delete-success', request.url))
      } else {
        console.error('GitHub API delete failed:', result.message)
        return NextResponse.redirect(new URL('/delete-not-found', request.url))
      }
    } catch (deleteError) {
      console.error('GitHub API error:', deleteError)
      return NextResponse.redirect(new URL('/delete-expired?reason=delete_failed', request.url))
    }

  } catch (error) {
    console.error('Delete blog error:', error)
    return NextResponse.redirect(new URL('/delete-expired?reason=server_error', request.url))
  }
}

/**
 * POST 요청: JSON 응답 기반 게시글 삭제
 * API 클라이언트에서 호출되는 엔드포인트
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { token } = body

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Delete token is required' },
        { status: 400 }
      )
    }

    const tokenManager = new TokenManager()
    const decoded = tokenManager.verifyDeleteToken(token)

    if (!decoded) {
      return NextResponse.json(
        { success: false, error: 'Invalid or expired token' },
        { status: 401 }
      )
    }

    const { filename, title } = decoded

    // GitHub API를 사용해서 파일 삭제
    try {
      const githubAPI = new GitHubAPI()
      const result = await githubAPI.deleteBlogPost(filename, title)
      
      if (result.success) {
        console.log(`Blog deleted via GitHub API: ${result.deletedFile} - ${title}`)
        return NextResponse.json({
          success: true,
          message: result.message,
          filename: filename,
          title: title,
          deletedFile: result.deletedFile
        })
      } else {
        console.error('GitHub API delete failed:', result.message)
        return NextResponse.json(
          { success: false, error: result.message },
          { status: 404 }
        )
      }
    } catch (deleteError) {
      console.error('GitHub API error:', deleteError)
      return NextResponse.json(
        { success: false, error: deleteError instanceof Error ? deleteError.message : 'Failed to delete blog file' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Delete blog API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}