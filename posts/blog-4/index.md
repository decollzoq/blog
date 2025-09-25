---
title: 변수와 상수
date: 2025-07-25
category: JavaScript 튜토리얼
---

출처 : https://ko.javascript.info

---
## 변수
데이터를 저장할 때 쓰이는 '이름이 붙은 저장소' 이다.
변수에 저장한 데이터는 변수명을 통해 접근할 수 있다.

1. `let` 키워드를 사용해 변수를 선언할 수 있다.
```javascript
let value;
```

2. 할당 연산자 `=`를 통해 변수에 값을 할당(초기화)할 수 있다.
```javascript
let value;
value = 1;
```

3. 변수 선언과 동시에 초기화를 할 수 있다.
``` javascript
let value = 2;
```

4. 한 줄에 변수를 여러개 선언할 수 있지만, 가독성을 위해 한 줄에 하나의 변수를 작성한다.
```javascript
let name = 'Tomato', age = 25, isFruit = true;

// 위의 코드와 동일하게 작동한다.
let name = 'Tomato';
let age = 25;
let isFruit = true;
```

5. 데이터를 재할당할 수 있으며, 한 변수의 데이터를 다른 변수에 복사할 수 있다.
```javascript
let name = "Tomato";
name = "Basil"; 	// 데이터 재할당

let basil = name;	// 값 복사

alert(name);	// Basil
alert(basil);	// Basil
```

6. 한 번 선언한 변수는 두 번 선언할 수 없다.
```javascript
let name = "Tomato";
let name = "Basil";	// SyntaxError 
```	

> Java와 달리 **변수 타입을 지정하지 않는** 게 JS의 특징인 것 같다.
그래서 처음에 초기화한 타입과 다른 타입으로 다시 초기화해도 오류가 발생하지 않는다.
```javascript
// JavaScript
let value = 1;
value = "String";
```
>
```java
// Java
int value = 1;
value = "String"; // error
```

> ### `var`
오래된 스크립트에서 `var` 키워드를 발견하는 경우가 있다.
`let`과 거의 동일하게 동작하지만 `let`과는 미묘한 차이가 있다.

## 변수 명명 규칙
### 두 가지 제약
1. 변수명에는 **문자**와 **숫자**, **`$`**, **`_`** 만 사용할 수 있다.
	- 모든 문자를 변수명에 사용할 수 있지만, 영어를 사용하는 것이 관습이다.
	- [한글을 변수명에 사용하는 경우](https://www.linkedin.com/posts/dearlsh94_%EA%B0%9C%EB%B0%9C%ED%95%A0-%EB%95%8C-%ED%95%9C%EA%B8%80-%EB%B3%80%EC%88%98%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B4%A4%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%99%80-nextjs%EB%8A%94-%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C%EB%A5%BC-activity-7239939553216581632-ILrM/?originalSubdomain=kr)도 있다.
	- 특히 영어로 번역하면 직관적인 의미 전달이 힘든 경우에 사용하면 좋을 것 같다.
    - 예를 들어 도메인 특화 용어(ex. 전세, 환산보증금 등등)
##### 
2. **첫 글자는 숫자가 될 수 없다.**

### camelCase
여러 단어를 조합할 때, 카멜 케이스를 사용하는 관습이 있다.
카멜 케이스는 첫 단어를 제외한 각 단어의 **첫 글자를 대문자**로 쓰는 방법이다.

### 예약어
JS 내부에서 이미 사용중인 예약어(ex. `let`, `var`, `class` ...) 목록에 있는 단어는 변수명으로 사용할 수 없다.

> use strict 없이 할당하기
ES5 이전에는 `let` 없이도 단순하게 값을 할당 해 변수를 생성하는 것이 가능했다.
하지만 ES5 이후, 변수는 대개 저정의되어야 사용 가능하다.
`use strict`를 사용하지 않으면 ES5 이전의 스트립트와 호환성을 유지할 수 있기 때문에 `let` 없이 변수를 생성할 수 있다.
```javascript
name = "Tomato";
alert(name);
```
>
```javascript
"use strict";
name = "Tomato"; // error
``` 

## 상수
한 번 값을 설정하고 변하지 않는 경우 `const` 키워드를 사용해 **상수(const)**로 선언한다. 

한 번 선언된 상수는 값을 **변경할 수 없다.**
```
const birth = 1209;
birth = 1008; // error
```
### 대문자 상수
기억하기 힘든 값을 사용할 때 상수를 이용할 수 있다. 이런 경우 상수 이름을 대문자와 밑줄로 구성한다.

``` const COLOR_TOSS = #0064FF";

let color = COLOR_TOSS;
alert(color); //#0064FF
```

> 상수에 두 가지 종류가 있다.
- 코드가 실행되기 전에 이미 그 값을 알고 있는 상수 (ex. 색상 코드)
- 런타임 과정에서 계산되지만, 최초 할당 이후 값이 변하지 않는 상수 
``` javascript
    const pageLoadTime = /* 웹페이지를 로드하는 데 걸리는 시간 */;
```

## 바람직한 변수명
변수명은 시간이 지나고 다시 봤을 때, 어떤 데이터를 담고 있는지 파악이 가능하도록 정해야 한다. 변수명만 보고도 신입인지 시니어인지 알 수 있다고 한다. 

변수명 짓기는 정말 어렵다. . .
그럴 땐 다음 규칙을 참고해서 변수를 선언하도록 하자.

- `userName`, `shoppingCart`처럼 사람이 읽을 수 있는 이름 사용
- 무엇을 하고 있는지 명확히 알고 있지 않을 경우 외에는 줄임말이나 `a`, `b` 같은 짧은 이름은 피한다.
- 최대한 서술적이고 간결하게 명명한다.
	- `data`, `value`는 나쁜 이름의 예시다.
- 자신만의 규칙이나 소속된 팀의 규칙을 따른다. 
	- 사이트 방문객을 `user`라고 부르기로 했다면 `currentUser`나 `newUser` 같은 이름으로 지어야 한다.
- 역할이 변한 경우, 변수는 재사용하지 않고 새로 추가하도록 하자.

----

## 과제
### 문제
![](https://velog.velcdn.com/images/decollzoq/post/54f53b40-b9be-4cb1-8231-cc824fc861d8/image.png)
### 풀이
![](https://velog.velcdn.com/images/decollzoq/post/30db547e-9a2e-479e-845e-c29be76c667e/image.png)
### 결과
![](https://velog.velcdn.com/images/decollzoq/post/0013dc79-9a74-4aa5-aaf4-c7da1374732c/image.png)

----
### 문제
![](https://velog.velcdn.com/images/decollzoq/post/99e6c335-971b-4ca1-b487-8e4b73baa215/image.png)

### 풀이
수정 전 코드
![](https://velog.velcdn.com/images/decollzoq/post/b4d6f4d4-9d84-4295-a8cf-3922e2526b87/image.png)


- 우리 행성의 이름으로 `planetName`을 사용했다.
	- "우리"의 의미가 빠졌다.
- 현재 접속 중인 사용자의 이름으로 `userName`을 사용했다.
	- "현재"의 의미가 빠졌다.
    
수정 후 코드
![](https://velog.velcdn.com/images/decollzoq/post/8f753f1c-4b45-4e85-9c2d-f72be75004fd/image.png)

-----
### 문제
![](https://velog.velcdn.com/images/decollzoq/post/c1826526-1a5e-4881-9972-bef05e8ff6c5/image.png)

### 풀이

태어난 날짜 정보를 담고 있는 `birthday`는 하드코딩된 값이므로 대문자로 바꾸는 게 좋다.
하지만 `age`는 런타임에 값이 할당되므로 소문자로 두는 게 좋다.