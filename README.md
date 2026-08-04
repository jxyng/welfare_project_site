# welfare_project_site

복지 정보를 조건별로 검색할 수 있는 Next.js 프로젝트입니다.

## Stack

- Next.js
- TypeScript
- TailwindCSS

## 실행

```bash
npm install
npm run dev
```

## 구조

```
app/
components/
hooks/
lib/
data/
types/
```

## API 교체

현재

```
data/welfare.json
```

을 사용합니다.

향후

```
app/api/welfare
```

에서 공공데이터 API를 호출하도록 변경하면
프론트 수정 없이 사용할 수 있습니다.

## 기능

- 키워드 검색
- 지역 필터
- 연령 필터
- 소득 필터
- 카테고리 필터
- 즐겨찾기
- 상세페이지
- 페이지네이션
- 반응형 UI
