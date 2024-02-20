## AWS Korea Cloud Club
### Student Community Day Event Page
> 이 레포는 Community Day Event를 위한 레포입니다.
 
URL : https://main.d343t49ramvyri.amplifyapp.com
### Secure
완성되기 전 까지는 ID/PW를 입력해야 접근이 가능합니다.
ID - admin
PW - sudosubin

### Architecture
- Node.js >= 18.17.0
- Next.js 14.1 (App Route)
- Tailwind CSS
- AWS Amplify

### Structure
- `app` - Next.js App Route
- `components` - 제곧내
- `containers` - page < **container** < component
- `data` - 각종 데이터들 하드코딩 모음 (추후 API로 변경 하면 좋음)
- `types` - interface 모음
- `utils` - 각종 유틸리티 함수 모음

### How to run
> bun 사용을 권장합니다.
```bash
bun install
bun run dev
```

### CI/CD
Main 브랜치에 푸시하면 자동으로 Amplify를 통해 배포됩니다.


### Maintainer
- 윤창현 [yoon@changhyeon.net](mailto:yoon@changhyeon.net) ~~연락할 일 없길 기도합니다~~


### Comment
- 추후 2025, 2026, ... 을 대비하여 폴더구조는 `/app/YYYY` 와 같이 구성했습니다. (ex: localhost:3000/2024, localhost:3000/2025, ...)
