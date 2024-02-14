# Portfolio Template

해당 레포는 [Vallista](https://github.com/Vallista)님의 [vallista-land](https://github.com/Vallista/vallista-land) 레포지토리를 fork하여 재구성한 레포지토리입니다.

## 재구성 사항
1. Gatsby v4 → v5로 마이그레이션
   - gatsby 공식 plugin 버전 호환성 마이그레이션
2. Node.js v14 → v18로 마이그레이션
3. React v17 → v18로 마이그레이션


## 기술스택

- Node.js v18.17.0
- Yarn v1.22.17
- React v18.2.0
- Typescript v4.5.2
- lerna + yarn workspace
- Gatsby v5

## Installation

```shell
$ npm install -g lerna
$ yarn
```

yarn workspace로 모든 패키지 모듈을 실행합니다.

## Build & Launch

```shell
// core 공통 모듈을 빌드합니다.
$ yarn build:core

// portfolio 프로젝트를 실행합니다.
$ yarn run:blog
```

## Add Module (library, .js)

**전역으로 사용되는 모듈의 경우**

```shell
$ yarn add {모듈명} {dev인 경우 --dev} --ignore-workspace-root-check
```

**패키지 단위에만 쓰이는 모듈의 경우**

```shell
$ lerna add {모듈명} --scope={패키지명}
```

## 내용 수정 방법

1. **포트폴리오 페이지 [ '/resume' ] 내용 수정시**
   - [`packages/portfolio/config의 resume.json`](https://github.com/HyunTaek5/portfolio-template/blob/main/packages/portfolio/config/resume.json) 파일의 내용을 수정합니다. 
2. **메인 페이지 [ '/' ] 내용 수정시**
    - [`packages/portfolio/src/pages/index.tsx`](https://github.com/HyunTaek5/portfolio-template/blob/main/packages/portfolio/src/pages/index.tsx) 파일의 내용을 수정합니다.
3. **블로그 페이지 [ '/blog' ] Post 작성시**
   - post:blog 명령어를 사용하여 기본 Post 템플릿 markdown 파일을 생성합니다.
     ```shell
     $ yarn post:blog {포스트 제목}
     ```
4. **페이지 Default 컬러 변경시**
   - ['packages/core/src/components/ThemeProvider/type.ts'](https://github.com/HyunTaek5/portfolio-template/blob/main/packages/core/src/components/ThemeProvider/type.ts)의 CYAN.DEFAULT의 hex 기반 컬러 코드를 수정하시면 됩니다.

5. **Github Pages 배포시 수정 필요 사항**
   - `packages/portfolio/gatsby-config.js`의 pathPrefix를 수정합니다.
   - `packages/portfolio/scripts/deploy.js`의 깃 레포 설정을 수정합니다.
   - `.github/workflows/node.js.yml.template`을 `.github/workflows/node.js.yml`으로 변경한 후, 깃헙 액션 내부 유저 설정을 수정합니다.
   - 해당 액션 파일의 {{secrets.TOKEN}}은 깃헙 유저의 Developer Settings에서 생성할 수 있는 깃헙 토큰을 의미합니다.

## 개발 방법

1. core > components > 해당 컴포넌트 제작
2. core > components > index.ts 에 등록
3. portfolio > src 에서 테스트

## ETC

### 3000 포트 킬

```shell
$ npx kill-port 3000
```

### Build Fail시 처리 방법

1. clean 명령어 입력
    ```shell
    $ yarn clean:blog
    $ yarn clean:playground
    $ lerna clean
    ```
2. 최상위 node_modules 삭제
3. @justsloth-core/tsconfig.tsbuildinfo 삭제
4. @justsloth-core/lib 삭제
5. build 명령어 입력
    ```shell
    $ yarn
    $ yarn build:core
    $ yarn build:blog
    ```