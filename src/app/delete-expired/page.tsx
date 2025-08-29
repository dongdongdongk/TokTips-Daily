import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { getSiteInfo, getBranding, getBlogThemeColors } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Delete Expired - 토큰이 만료되었습니다',
  description: '삭제 토큰이 만료되었거나 유효하지 않습니다.',
  robots: 'noindex, nofollow'
}

export default function DeleteExpiredPage() {
  const siteInfo = getSiteInfo()
  const branding = getBranding()
  const colors = getBlogThemeColors()

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        
        {/* Warning Icon */}
        <div 
          className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#fef3c7' }}
        >
          <svg 
            className="w-12 h-12 text-amber-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" 
            />
          </svg>
        </div>

        {/* Title */}
        <h1 
          className="text-3xl font-bold mb-4"
          style={{ color: colors.primary[700] }}
        >
          토큰 만료
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-2">
          삭제 링크가 만료되었거나 유효하지 않습니다.
        </p>
        
        <p className="text-sm text-gray-500 mb-8">
          보안을 위해 삭제 링크는 7일 후 자동으로 만료됩니다.<br />
          게시글 삭제가 필요하시면 직접 문의해 주세요.
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
            <li>• 링크가 7일 이상 경과되어 만료됨</li>
            <li>• 링크가 손상되거나 불완전함</li>
            <li>• 이미 삭제된 게시글</li>
            <li>• 잘못된 토큰 형식</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full px-6 py-3 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${colors.primary[600]}, ${colors.secondary[600]})`,
            }}
          >
            📧 게시글 삭제 요청하기
          </Link>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 font-medium border-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            style={{
              color: colors.primary[600],
              borderColor: colors.primary[600]
            }}
          >
            🏠 홈으로 돌아가기
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400 mb-2">
            문제가 지속되면 다음으로 문의하세요:
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