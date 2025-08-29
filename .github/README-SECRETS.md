# GitHub Repository Secrets 설정 가이드

이 리포지토리의 자동화 기능을 사용하려면 다음 Secrets를 GitHub 리포지토리 설정에서 구성해야 합니다.

## 📝 설정 방법

1. GitHub 리포지토리 페이지에서 **Settings** 탭 클릭
2. 왼쪽 사이드바에서 **Secrets and variables** → **Actions** 클릭
3. **New repository secret** 버튼 클릭
4. 아래 목록의 각 환경변수를 추가

## 🔑 필수 환경변수

### OpenAI API 설정
```
OPENAI_API_KEY=sk-...
```
- **설명**: OpenAI GPT API 키
- **획득**: https://platform.openai.com/account/api-keys
- **용도**: 블로그 콘텐츠 자동 생성

### Gmail 설정 (이메일 알림용)
```
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-app-password
NOTIFICATION_EMAIL=notify@example.com
```
- **GMAIL_USER**: Gmail 계정 주소
- **GMAIL_PASSWORD**: Gmail 앱 비밀번호 (2FA 필요)
- **NOTIFICATION_EMAIL**: 알림 수신 이메일 (생략시 GMAIL_USER 사용)
- **Gmail 앱 비밀번호 생성**: https://myaccount.google.com/apppasswords

### JWT 보안 설정 (게시글 삭제용)
```
JWT_SECRET=your-super-secret-key-change-this-to-random-string
```
- **설명**: JWT 토큰 서명용 비밀 키
- **생성**: 긴 랜덤 문자열 (최소 32자 권장)
- **용도**: 이메일 삭제 링크의 보안 토큰 생성

### GitHub API 설정 (자동 생성됨)
```
GITHUB_TOKEN (자동 제공)
```
- **설명**: GitHub Actions에서 자동 제공
- **수동 추가 불필요**: Actions 권한에서 자동 생성

## 📋 선택적 환경변수

### Reddit API 설정 (Reddit 기반 콘텐츠 생성시)
```
REDDIT_CLIENT_ID=your-reddit-client-id
REDDIT_CLIENT_SECRET=your-reddit-client-secret
REDDIT_USER_AGENT=YourAppName/1.0 by YourUsername
```
- **획득**: https://www.reddit.com/prefs/apps
- **용도**: Reddit 트렌드 데이터 수집

### 추가 API 설정
```
NEWS_API_KEY=your-news-api-key
GOOGLE_TRENDS_API_KEY=your-google-trends-key
```
- **용도**: 다양한 뉴스 소스 및 트렌드 데이터 수집 (선택사항)

## 🔧 환경변수 검증

GitHub Actions에서 필수 환경변수가 올바르게 설정되었는지 자동 확인합니다.

### 확인되는 항목:
- ✅ OPENAI_API_KEY 존재 여부
- ✅ GMAIL_USER 설정 여부  
- ✅ GMAIL_PASSWORD 설정 여부
- ✅ JWT_SECRET 설정 여부 (게시글 삭제 기능용)

## 🚨 보안 주의사항

1. **API 키 노출 금지**: 절대로 코드나 공개적인 곳에 API 키를 직접 작성하지 마세요
2. **Gmail 2FA 필수**: Gmail 계정은 반드시 2단계 인증을 활성화하고 앱 비밀번호를 사용하세요
3. **JWT 비밀키 보안**: JWT_SECRET은 예측 불가능한 긴 랜덤 문자열을 사용하세요
4. **정기적 갱신**: API 키들은 정기적으로 재생성하여 보안을 강화하세요

## 🔄 자동화 스케줄

- **실행 시간**: 매일 UTC 02:00 (한국시간 11:00)
- **수동 실행**: GitHub Actions 탭에서 "Run workflow" 버튼으로 언제든 수동 실행 가능
- **실행 조건**: 위의 필수 환경변수가 모두 설정된 경우에만 실행

## 🎯 기능별 환경변수 매핑

| 기능 | 필요한 환경변수 | 필수 여부 |
|------|----------------|----------|
| 블로그 생성 | OPENAI_API_KEY | ✅ 필수 |
| 이메일 알림 | GMAIL_USER, GMAIL_PASSWORD | ✅ 필수 |
| 게시글 삭제 | JWT_SECRET | ✅ 필수 |
| Reddit 연동 | REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET | ⚠️ 선택적 |
| 뉴스 API | NEWS_API_KEY, GOOGLE_TRENDS_API_KEY | ⚠️ 선택적 |

## 💡 트러블슈팅

### 자주 발생하는 문제들:

1. **Gmail 인증 실패**
   - Gmail 2FA 활성화 확인
   - 앱 비밀번호 정확히 생성 및 입력 확인
   
2. **OpenAI API 오류**  
   - API 키 유효성 확인
   - 사용 한도 및 잔액 확인
   
3. **JWT 토큰 오류**
   - JWT_SECRET이 충분히 길고 복잡한지 확인
   - 특수문자 포함 여부 확인

문제가 지속되면 GitHub Actions 로그를 확인하거나 Issues 탭에서 문의해 주세요.