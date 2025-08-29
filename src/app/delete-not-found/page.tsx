import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { getSiteInfo, getBranding, getBlogThemeColors } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Delete Not Found - 게시글을 찾을 수 없습니다',
  description: '삭제하려는 게시글을 찾을 수 없습니다.',
  robots: 'noindex, nofollow'
}

export default function DeleteNotFoundPage() {
  const siteInfo = getSiteInfo()
  const branding = getBranding()
  const colors = getBlogThemeColors()

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        
        {/* Not Found Icon */}
        <div 
          className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#fef2f2' }}
        >
          <svg 
            className="w-12 h-12 text-red-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-3-8c-3.314 0-6 2.686-6 6v2c0 3.314 2.686 6 6 6s6-2.686 6-6v-2c0-3.314-2.686-6-6-6z" 
            />
          </svg>
        </div>

        {/* Title */}
        <h1 
          className="text-3xl font-bold mb-4"
          style={{ color: colors.primary[700] }}
        >
          게시글을 찾을 수 없음
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-2">
          삭제하려는 게시글을 찾을 수 없습니다.
        </p>
        
        <p className="text-sm text-gray-500 mb-8">
          게시글이 이미 삭제되었거나 파일명이 변경되었을 수 있습니다.
        </p>

        {/* Possible Reasons */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
          <h3 
            className="font-semibold mb-3"
            style={{ color: colors.secondary[600] }}
          >
            가능한 원인:
          </h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• 게시글이 이미 삭제됨</li>
            <li>• 파일명이 변경되어 찾을 수 없음</li>
            <li>• 게시글 제목이 수정되어 매칭되지 않음</li>
            <li>• 리포지토리 구조가 변경됨</li>
          </ul>
        </div>

        {/* Status Check */}
        <div 
          className="bg-blue-50 p-4 rounded-lg mb-8"
          style={{ backgroundColor: colors.primary[50] }}
        >
          <p 
            className="text-sm font-medium mb-2"
            style={{ color: colors.primary[700] }}
          >
            💡 확인 방법
          </p>
          <p className="text-sm text-gray-600">
            홈페이지를 확인하여 해당 게시글이 실제로 제거되었는지 확인해보세요.
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${colors.primary[600]}, ${colors.secondary[600]})`,
            }}
          >
            🏠 홈에서 확인하기
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full px-6 py-3 font-medium border-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            style={{
              color: colors.primary[600],
              borderColor: colors.primary[600]
            }}
          >
            📧 도움 요청하기
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400 mb-2">
            게시글이 여전히 표시되면 다음으로 문의하세요:
          </p>
          <p 
            className="text-sm font-medium"
            style={{ color: colors.secondary[600] }}
          >
            {branding.email}
          </p>
        </div>

      </div>
    </div>
  )
}