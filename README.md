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