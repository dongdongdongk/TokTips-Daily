import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { getSiteInfo, getBranding, getBlogThemeColors } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Delete Success - 게시글이 삭제되었습니다',
  description: '게시글이 성공적으로 삭제되었습니다.',
  robots: 'noindex, nofollow'
}

export default function DeleteSuccessPage() {
  const siteInfo = getSiteInfo()
  const branding = getBranding()
  const colors = getBlogThemeColors()

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        
        {/* Success Icon */}
        <div 
          className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: colors.primary[50] }}
        >
          <svg 
            className="w-12 h-12" 
            style={{ color: colors.primary[600] }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>

        {/* Title */}
        <h1 
          className="text-3xl font-bold mb-4"
          style={{ color: colors.primary[700] }}
        >
          삭제 완료
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-2">
          게시글이 성공적으로 삭제되었습니다.
        </p>
        
        <p className="text-sm text-gray-500 mb-8">
          변경사항이 사이트에 반영되기까지 몇 분 정도 소요될 수 있습니다.
        </p>

        {/* Actions */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${colors.primary[600]}, ${colors.secondary[600]})`,
            }}
          >
            🏠 홈으로 돌아가기
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full px-6 py-3 font-medium border-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            style={{
              color: colors.primary[600],
              borderColor: colors.primary[600]
            }}
          >
            📧 문의하기
          </Link>
        </div>

        {/* Footer Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            {branding.siteName} - 자동화된 게시글 관리 시스템
          </p>
        </div>

      </div>
    </div>
  )
}