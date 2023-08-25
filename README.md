# 원티드 프리온보딩 1주차 과제

- 해당 repository는 원티드 프리온보딩 프론트엔트 인턴쉽 12차 1주차 과제을 다뤘습니다.
- 프리온보딩 선발과제인 todo를 팀원들과 상의해 각 기능의 Best Practice를 도출하고 합친 결과물입니다.

## 팀 구성원 및 역할

- 원티드 프리온보딩 프론트엔트 인턴쉽 12차 4팀입니다.

|                                     **강병헌**                                      |                                     **김누리**                                      |                                     **김신혁**                                      |                                      **박윤철**                                      |                                   **우혜리 (팀장)**                                   |                                      **이은학**                                      |
| :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: |
| <img width="180" alt="" src="https://avatars.githubusercontent.com/u/33623123?v=4"> | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/19181088?v=4"> | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/73675549?v=4"> | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/22779951?v=4" > | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/107099724?v=4" > | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/52943412?v=4" > |
|                      [llbllhllk](https://github.com/llbllhllk)                      |                       [nuri1042](https://github.com/nuri1042)                       |                       [devshinn](https://github.com/devshinn)                       |                   [mrsimplelife](https://github.com/mrsimplelife)                    |                       [hyeri-woo](https://github.com/hyeri-woo)                       |                       [dmsgkr02](https://github.com/dmsgkr02)                        |
|                                    SignIn 페이지                                    |                                    SignUp 페이지                                    |                         초기 프로젝트 환경 설정, todo 수정                          |                                   todo 보기, 삭제                                    |                          axios / context api 설정, 스타일링                           |                       route 및 권한에 따른 global layout 작성                        |

## 배포 링크

https://pre-onboarding-12th-1-4-todo-3w1ud55lq-preonboarding-12th-4.vercel.app/

## 프로젝트 실행 방법

1. 프로젝트 클론

```
git clone https://github.com/pre-onboarding-12th-4/pre-onboarding-12th-1-4.git
```

2. 해당 폴더로 이동

```
cd pre-onboarding-12th-1-4
```

3. 프로젝트 패키지 설치

```
npm install
```

4. 프로젝트 실행

```
npm start
```

## 기술 및 개발 환경

### 사용 라이브러리

```js
"axios": "^1.2.2",
"react-router-dom": "^6.15.0",
"styled-components": "^6.0.7",
"typescript": "^4.9.5",
```

### Commit Message 컨벤션

| 태그 이름        | 설명                                                                      |
| ---------------- | ------------------------------------------------------------------------- |
| Initial          | 시스템 초기 설정                                                          |
| Feat             | 새로운 기능을 추가할 경우                                                 |
| Fix              | 버그를 고친 경우                                                          |
| Design           | CSS 등 사용자 UI 디자인 변경                                              |
| Style            | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우                     |
| Refactor         | 프로덕션 코드 리팩토링                                                    |
| Comment          | 필요한 주석 추가 및 변경                                                  |
| Docs             | 문서를 수정한 경우                                                        |
| Chore            | 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) |
| Rename           | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                        |
| Remove           | 파일을 삭제하는 작업만 수행한 경우                                        |
| Merge            | 파일 또는 브랜치 병합할 경우                                              |
| Dir              | 폴더 및 문서 구조 변경할 경우                                             |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                                    |

### Eslint 설정

```js
{
  "extends": ["react-app", "eslint:recommended", "prettier"],
  "rules": {
    "no-var": "error", // var 금지
    "no-multiple-empty-lines": "error", // 여러 줄 공백 금지
    "no-console": ["error", { "allow": ["warn", "error", "info"] }], // console.log() 금지
    "eqeqeq": "error", // 일치 연산자 사용 필수
    "dot-notation": "error" // 가능하다면 dot notation 사용
  }
}
```

### Prettier 설정

```js
module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  tabWidth: 2,
  semi: true,
  endOfLine: 'auto', // EoF 방식, OS별로 처리 방식이 다름

  singleQuote: true, // single 쿼테이션 사용 여부
  jsxSingleQuote: true,
  quoteProps: 'as-needed', // 객체 속성에 쿼테이션 적용 방식
  jsxBracketSameLine: false,

  trailingComma: 'all', // 여러 줄을 사용할 때, 후행 콤마 사용 방식
  bracketSpacing: true, // 객체 리터럴에서 괄호에 공백 삽입 여부
  arrowParens: 'avoid', // 화살표 함수 괄호 사용 방식
  htmlWhitespaceSensitivity: 'css', // HTML 공백 감도 설정

  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
  importOrderSortSpecifiers: true,
};
```

## 폴더 구조

```
📦 src
├── 📂 api
│   ├── 📄 index.ts
│   ├── 📄 auth.ts
│   └── 📄 todo.ts
├── 📂 components
│   ├── 📂 common
│   │    ├── 📄 Button.tsx
│   │    └── 📄 Input.tsx
│   ├── 📂 auth
│   │    └── 📄 AuthForm.tsx
│   ├── 📂 todo
│   │    ├── 📄 TodoForm.tsx
│   │    ├── 📄 TodoItem.tsx
│   │    ├── 📄 TodoItemEdit.tsx
│   │    └── 📄 TodoList.tsx
├── 📂 context
│   ├── 📂 auth
│   │    ├── 📄 AuthContext.tsx
│   │    └── 📄 AuthContextProvider.tsx
│   └── 📂 todo
│   │    ├── 📄 TodoContext.tsx
│   │    └── 📄 TodoContextProvider.tsx
├── 📂 hooks
│   │    ├── 📄 useFormValidation.ts
│   │    └── 📄 useLoading.ts
├── 📂 pages
│   ├── 📄 Home.tsx
│   ├── 📄 SignIn.tsx
│   ├── 📄 SignUp.tsx
│   ├── 📄 Todo.tsx
│   └── 📄 NotFound.tsx
├── 📂 route
│   ├── 📄 loader.ts
├── 📂 styles
│   ├── 📄 CommonStyle.tsx
│   └── 📄 GlobalStyle.tsx
└── 📂 types
    └── 📄 index.tsx

```

## UI

![UI mobile (1)](https://github.com/pre-onboarding-12th-4/pre-onboarding-12th-1-4/assets/107099724/acf43c08-5e78-4e5e-a3ef-7ae0b7535940)

## 기능 상세

현재 README에는 동료학습을 통해 도출된 각 Assignment의 Best Practice을 포함되어 있습니다. 더 자세한 내용은 해당 <a href='https://www.notion.so/1-Todo-889cfeef034b42ea8d071a5ecfa2fff5'>노션 링크</a>에서 확인하실 수 있습니다.

### Assignment 1: 유효성 검사

> - 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
>   - 이메일 조건: `@` 포함
>   - 비밀번호 조건: 8자 이상
> - 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요

#### 유효성 검사

- 이메일: includes('@')
- 비밀번호: password.length >= 8
- ✅ 이유: 정규식보다 간결성을 위해 메서드를 사용해서 유효성 검사

#### 에러 메시지

- 사용자에게 유효성 검사에 대한 메시지를 노출
- ✅ 이유: 정확히 어떤 부분에서 문제가 있는지 알려주기 위함

#### 유효성 관리

- validate 커스텀 훅을 따로 만들어서 관리
- ✅ 이유: 현재는 유효성 검사가 간단하지만, 추후 확장을 위함

### Assignment 2 & 3: 페이지 이동 / jwt 관리

> - 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요
> - 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요
>   - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
>   - 응답받은 JWT는 로컬 스토리지에 저장해주세요

#### 유저 정보 관리 (token 포함)

- Context API를 사용해서 관리
- ✅ 이유: 현재는 유저 정보는 token 밖에 없지만 유저 정보가 많아질 시 전역으로 유용하게 관리하기 위함

#### 라우터 관리

- React Router Loader 사용해서 관리
- ✅ 이유: 컴포넌트가 렌더링 되기 전에 api 응답을 받고 렌더링에 들어가기 때문에 사용자 경험을 개선하기 위함
- ✅ 이유: 새로운 함수를 사용해서 router를 처리하기 위함

### Assignment 4: 리다이렉트

> - 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
>   - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
>   - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

#### 리다이렉트 / 라우터 관리

- React Router Loader 사용해서 관리
- ✅ 이유: 컴포넌트가 렌더링 되기 전에 api 응답을 받고 렌더링에 들어가기 때문에 사용자 경험을 개선하기 위함
- ✅ 이유: 새로운 함수를 사용해서 router를 처리하기 위함

### Assignment 5: 투두 리스트 목록과 체크박스

> - `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
> - 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
> - TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요

#### API 관리

- axios 라이브러리를 사용
- api 폴더 안에서 미리 함수 정의
- ✅ 이유: 모듈화와 인터셉터를 사용해 중복화를 줄이기 위함

#### todo 데이터 관리

- Context API 사용해서 관리 (contextProvider 안에서 데이터 받아오기)
- ✅ 이유: todo 데이터를 사용해서 보기, 수정, 삭제 등 많은 기능을 구현해야 해서 전역에서 관리하는게 용이함

#### todo 데이터 화면에 뿌리기

- todo 데이터는 추가했을 시 가장 밑에 위치하게 함
- ✅ 이유: todo 추가하는 form이 밑에 위치하기 때문에 최근 todo 아이템이 밑에 위치하는 것이 자연스러움
- TodoList 컴포넌트 안에서 map() 을 사용하여 TodoItem 컴포넌트를 뿌리고 todo 아이템을 props 전달
- ✅ 이유: pages 안의 파일 들은 최대한 간단하게 유지하기로 함
- Item 컴포넌트는 받은 props를 todoItem state 변수에 저장하고, isCompleted 속성을 checkbox checked 값에 할당

### Assignment 6: 투두 리스트 추가

> - 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
> - 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
> - TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다

#### input form

- 별도 컴포넌트로 분리
- ✅ 이유: 렌더링 최적화를 위함

#### 추가 데이터 관리

- 공백 여부 확인 후 POST 요청이 성공하면 Context Api를 사용해 state 재할당
- ✅ 이유: todo 데이터를 Context api를 사용해 한 곳에서 관리하기 위함
- 제출이 완료되면 input value 초기화

### Assignment 7 & 10: 투두리스트,체크박스 수정

> - TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.
> - 투두 리스트의 수정 기능을 구현해주세요

#### 보기 / 수정 모드 관리

- isEditMode state 변수를 사용해 DOM 변경
- TodoItem, EditItem 컴포넌트로 분리
- EditItem 활성화됐을때 밖에 클릭시 isEditMode = false

#### 수정 기능 구현

- EditItem은 form 태그로 감싸기
- ✅ 이유: 키보드 접근성을 위함 (엔터 쳤을 경우 수정 가능)
- EditItem은 input만 (체크박스 x)
- ✅ 이유: 사용자의 혼란을 막기 위함
- 수정 버튼 눌렀을 시 EditItem의 input에 focus
- ✅ 이유: 키보드 접근성을 위함 (수정 버튼 눌렀을시 사용자가 바로 타이핑할 수 있도록 위함)
- updateTodo는 context api로 사용해서 state 재할당
- ✅ 이유: todo 데이터를 Context api를 사용해 한 곳에서 관리하기 위함

### Assignment 8 & 9: 투두리스트 삭제

> - TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
> - 투두 리스트의 삭제 기능을 구현해주세요
>   - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

#### 삭제 기능 구현

- TodoItem 컴포넌트에서 삭제 버튼 클릭 시 context api을 사용해서 삭제
- ✅ 이유: todo 데이터를 Context api를 사용해 한 곳에서 관리하기 위함
- DELETE 요청이 성공하면 context api안에 정의되어 있는 todo 재할당(`filter()` 사용)
