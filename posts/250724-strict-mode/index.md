---
title: '[TIL] 엄격 모드'
date: 2025-07-24
category: JavaScript 튜토리얼
---

출처 : https://ko.javascript.info

---

## 엄격 모드 (Strict mode)

자바스크립트는 오랫동안 기존의 기능 수정 없이 새로운 기능을 추가해 왔다.
호환성 문제가 없었지만, 불완전한 문법 등이 자바스크립트 안에 영원히 박제 되었다.
언제까지? **ECMAScript(ES5)**가 등장하기 전까지.

ES5에서 새로운 기능이 추가되며 기존 기능이 변경되면서 호환성 문제가 발생했다.
이 호환성 문제를 해결하기 위해 ES5의 **엄격 모드**에서만 변경사항이 적용되도록 해두었다.

즉, 엄격 모드가 아닌 기본 모드([느슨한 모드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode), sloppy mode)에선 옛날에 작성해둔 JS 코드가 호환성 문제 없이 작동한다는 것

### 엄격 모드 활성화

`use strict` 이라는 지시자를 사용해 엄격 모드를 활성화할 수 있으며, 한 번 활성화된 엄격 모드는 취소할 수 없다.

이 지시자는 스크립트의 최상단에 오면 스크립트 전체가 엄격 모드(= 모던한 방식)로 동작한다.
최상단에 위치하지 않으면 엄격 모드는 활성화되지 않고 무시된다.

```javascript
"use strict"; // 엄격 모드 활성화
alert("Hello, JavaScript);
```

스크립트 최상단이 아닌 함수 본문 맨 앞에 올 수도 있다.

```javascript
function fun() {
  'use strict' // 작은 따옴표 사용도 가능
  return 'Hello, JavaScript'
}
```

### 브라우저 콘솔

브라우저 콘솔에서는 기본적으로 `use strict`가 적용되지 않는다.
`use strict`를 적용하기 위해선 `Shift+Enter`를 눌러 줄 바꿈 해 원하는 스크립트를 입력하면 된다. (Firefox, Chrome 같은 브라우저에서 대부분 사용 가능하다.)

```javascript
"use strict"; <Shift + Enter> 로 줄 바꿈
// 코드 입력
<Enter> 로 실행
```

콘솔 창에 `use strict` 입력이 불가능한 브라우저는 코드를 래퍼로 감싸면 된다.

```javascript
;(function () {
  'use strict'

  // 코드
})()
```

## 'use strict'를 꼭 사용해야 하나?

모던 JS의 클래스와 모듈을 사용한다면 자동으로 엄격 모드가 적용되기 때문에 `use strict`를 사용하지 않아도 된다.
