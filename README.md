## AWS Cloud Club Korea
### Student Community Day Event Page
> 이 레포는 Community Day Event를 위한 레포입니다.
 
URL : https://aws-cloud-clubs.github.io/student-community-day/ 

### Architecture
- Node.js >= 18.17.0
- Next.js 14.1 (App Route)
- Tailwind CSS

### Structure
- `app` - Next.js App Route
- `components` - 제곧내
- `constants` - 상수 모음
- `containers` - page < **container** < component
- `data` - 각종 데이터들 하드코딩 모음 (추후 API로 변경 하면 좋음)
- `types` - interface 모음
- `utils` - 각종 유틸리티 함수 모음
- `hooks` - 커스텀 훅 모음

### How to run
> bun 사용을 권장합니다.
```bash
bun install
bun run dev
```

### CI/CD
Main 브랜치에 푸시하시고 release tag 생성하면 github action을 통해 Github Page Deploy 됩니다.

### Maintainer
- 윤창현 [yoon@changhyeon.net](mailto:yoon@changhyeon.net)


### Comment
- 추후 2025, 2026, ... 을 대비하여 폴더구조는 `/app/YYYY` 와 같이 구성했습니다. (ex: localhost:3000/2024, localhost:3000/2025, ...)
