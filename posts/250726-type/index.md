---
title: '[TIL] 자료형'
date: 2025-07-26
category: JavaScript 튜토리얼
cover: ./thumb_javascript.png
---

출처 : https://ko.javascript.info

---

# 자료형

JS의 데이터 타입은 **기본형**과 **참조형**으로 크게 2가지로 나눌 수 있다.

## 1. 기본형 (Primitive type)

여덟 가지 기본 자료형이 있는데, 변수는 자료형에 관계 없이 모든 데이터일 수 있다.
즉, 숫자형 변수를 문자형으로, 문자형을 숫자형으로 자유롭게 변수의 데이터를 바꿀 수 있다는 것이다.

자료의 타입은 있지만, 변수에 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어를 **동적 타입 (dynamically typed)** 언어라고 부른다.

### 숫자형 (number)

정수, 부동소수점 숫자를 나타낸다.

```javascript
let n = 1
n = 1.1
```

**특수 숫자 값(special numeric value)**
숫자형에는 일반적인 숫자 외에 `Infinity`, `-Infinity`, `NaN` 같은 값을 포함한다.

- `Infinity` : 무한대 값
  - 어느 숫자를 0으로 나누면 얻을 수 있다.
  - Infinity를 직접 참조할 수 있다.

```javascript
let n = 1 / 0 // Infinity
```

> Java에서는 정수를 0으로 나누면 에러가 발생하는데, JS는 모두 Infinity로 사용하나보다!

- `NaN` : 계산 중 에러가 발생했다는 표시
  - 문자열과 숫자를 계산(`+` 예외) 하는 등
    - 한 번 NaN이 반환된 경우 어지간해서 바꿀 수 없으므로 주의한다.

```javascript
let n = '문자열과 숫자는 이런 계산을 할 수 없어요' / 2 + 4 // NaN
```

### BigInt

2⁵³</sup> -1 (9,007,199,254,740,991) 보다 큰 값
혹은 -(2⁵³-1) 보다 작은 정수는 '숫자형’을 사용해 나타낼 수 없다.

이보다 더 크거나 작은 숫자를 나타낼 땐 정수 리터럴 끝에 `n`을 붙이면 된다.

```javascript
let bigInt = 9,007,199,254,740,999n;
```

### 문자형 (string)

JS에서 문자열을 따옴표로 묶는다. 이때 사용할 수 있는 따옴표는 3가지다.

1. 큰 따옴표 (`""`)
2. 작은 따옴표 (`''`)
3. 역 따옴표, 백틱 (` `` `)

일반적적인 문장에는 큰 따옴표와 작은 따옴표를 사용하면 된다.
백틱으로 변수나 표현식을 감싼 후 ${...} 안에 넣어주면 원하는 변수나 표현식을 문자열 중간에 넣을 수 있다.

```javascript
let student1 = 'Tomato'
let student2 = 'Basil'
let phrase = `${student1} likes ${student2}`

// " + " 를 사용해서 연결할 수도 있다. 이때, 띄어쓰기는 자동으로 들어가지 않는다.
let phrase2 = student1 + ' + ' + student2 + ' ' + 3 // Tomato Basil 3

// 큰 따옴표와 작은 따옴표에는 표현식을 넣을 수 없다.
let phrase3 = '${student1} likes ${student2}' //${student1} likes ${student2}
```

### 불린형 (boolean)

`true` 와 `false` 두 가지 값밖에 없다.
불린형은 비교 결과를 저장할 수 있다.

```javascript
let isHuman = false
let isBigger = 1 > 4 // false
```

### null 값

`null` 값은 오로지 `null` 값만 포함하는 별도의 자료형이다.
JS에서 `null`은 "존재하지 않는 값 (nothing)", "비어 있는 값(empty)", "알 수 업슨 값(unknown) 값"을 나타내는 데 사용한다.

> 다른 언어에서는 "존재하지 않는 객체에 대한 참조" 혹은 "널 포인터"를 나타낼 때 사용한다.

```javascript
let birthday = null
```

- `birthday`를 알 수 없거나 그 값이 비어있음을 나타낸다.

### undefined 값

`undefined` 값은 `null`처럼 오로지 `undefined` 값만 포함하는 별도의 자료형이다.
`undefined`는 "값이 할당되지 않은 상태"를 나타낼 때 사용한다.
변수는 선언했지만, 값을 할당하지 않았을 때 자동으로 `undefined`가 할당된다.
`undefined`를 직접 참조하여 변수에 할당할 수 있지만, 변수가 **비어있거나 알 수 없는 상태**를 나타낼 땐 `null`을 쓰도록하자.

```javascript
let birthday
alret(birthday) // udefined
```

### 심볼 (symbol)

객체의 고유한 식별자를 만들 때 사용한다.

## 2. 참조형

### 객체 (Object)

특수한 자료형으로, 데이터 컬렉션(Array, Function 등)이나 복잡한 개체(entity)를 표현할 수 있다.

---

# typeof 연산자

인수의 자료형을 반환하는 연산자이다. (반환 타입은 문자열이다.)
자료형에 따라 처리 방식을 다르게 할 때, 변수의 자료형을 빠르게 알아내고자 할 때 사용한다.

## 사용법

연산자로 사용하는 것고 함수로 사용하는 두 가지 방법이 있는데, 결과는 동일하다.

1. 연산자 : typeof `변수`
2. 함수 : typeof(`변수`)

```javascript
typeof 1 // "number"
typeof Infinity // "number"
typeof NaN // "number"

typeof 10n // "bigint"

typeof 'Tomato' // "string"

typeof true // "boolean"

typeof undefined // "undefined"

typeof Symbol('id') // "symbol"

typeof null // "object"

typeof Math // "object"
typeof alert // "function"
```

>

### `typeof Math`

- `Math`는 수학 연산을 제공하는 내장 객체이므로 "object"를 반환한다.

### ⚠️ `typeof null`

- 언어 자체의 오류지만 하위 호환성을 유지하기 위해 "object"로 남겨진 상황이다.
- `null`은 객체가 아님에 유의하자.

### ⚠️ `typeof alert`

- `typeof`는 피연산자가 함수면 "function"을 반환한다.
- 자료타입에 "function"은 없다. 함수는 객체형에 속한다.
- 하위 호환성을 유지하기 위해 "function"으로 남겨진 상황이다.

---

# 과제

## 문제

![](https://velog.velcdn.com/images/decollzoq/post/c40ba802-a8bc-4f69-82d5-8e2cce670260/image.png)

## 풀이

alert(`hello ${1}`);

- 출력 결과 : hello 1

alert(`hello ${"name"}`);

- 출력 결과 : hello name
- "name"은 문자열이다.

alert( `hello ${name}` );

- 출력 결과 : hello Ilya
- name은 "Ilya"로 선언된 변수다.
