---
title: '[TIL] 코드 구조'
date: 2025-07-23
category: JavaScript 튜토리얼
cover: ./thumb_javascript.png
---

출처 : https://ko.javascript.info

---

## 문 (Statement)

어떤 작업을 수행하는 문법 구조(syntax structure)와 명령어(command)를 의미한다.

```
alert("Hello, JavaScript!);
alert("Hello, JavaScript);
```

- 한 줄에 작성할 수 있지만, 가독성을 위해 **각 문은 서로 다른 줄**에 작성하는 것이 일반적이다.

## 세미콜론 (;)

문장의 끝을 나타내지만 항상 필수는 아니다.
JS 는 줄 바꿈이 있다면, 대부분의 상황에서 세미콜론을 생략할 수 있는 ASI 규칙이 있다.
대부분의 상황이란, 예외도 있는 법. 따라서 버그 예방 차원에서 세미콜론을 사용하는 습관을 들이는 게 좋다.

## 주석

주석 처리된 문장은 자바스크립트 엔진이 무시하기 때문에 주석에 코드를 적어도 실행되지 않는다.

** 한 줄 주석 **
`//` 를 사용한다.

** 여러 줄 주석 **
`/* */` 를 사용한다.

#### ⚠️ 이중 주석은 처리되지 않는다.

---

다음에는 [ASI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) (Automatic semicolon insertion)에 대해 더 알아보는 것도 좋겠다!
