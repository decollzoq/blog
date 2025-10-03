---
title: '[TIL] HelloWorld'
date: 2025-07-22
category: JavaScript 튜토리얼
thumb: ./thumb_javascript.png
---

출처 : https://ko.javascript.info

---

## 'Script' 태그

**자바스크립트 프로그램**을 HTML 문서 대부분의 위치에 삽입 할 수 있다.
브라우저는 이 태그를 만나면 안의 코드를 자동으로 처리한다.

## 모던 마크업

요즘은 사용하지 않는 `<script>` 태그의 몇가지 속성

1. `type` 속성
   - HTML4에서 스크립트에 type 명시가 필수 였다.
   - 지금은 모던 HTML에서 이 속성의 의미가 바뀌었고, 이 속성은 이제 모듈에서 사용가능하다.
   - 따라서 현재는 사용하지 않는다.
2. `language` 속성
   - 사용하고 있는 스크립트 언어를 표시했다.
   - 현재는 JS가 기본 언어이므로 사용하지 않는다.

## 외부 스크립트

코드의 양이 많아지면 파일로 소분하고, src 속성을 사용해 HTML에 삽입할 수 있다.

### 삽입 방법

1. 절대 경로 사용
   사이트의 루트에서부터 파일이 위치한 절대 경로를 사용한다.

```html
<script src="/파일/경로/파일.js"></script>
```

2. 상대 경로 사용 : 같은 폴더 내에 있다면 상대 경로를 사용해도 된다.

```html
<script src="파일.js"></script>
```

3. url 사용 : url 전체를 속성으로 사용할 수 있다.

```html
<script src="https://.../파일.js"></script>
```

4. 복수의 스크립트 : 여러번 쓰면 된다.

```html
<script src="파일1.js"></script>
<script src="파일2.js"></script>
<script src="파일3.js"></script>
```

> 이때, 스크립트가 길어지면 **별개의 분리된 파일로 만들어 저장**하면 좋다.
>
> 브라우저가 스크립트를 다운 받아 캐시에 저장하고, 캐시로부터 스크립트를 가져와 사용해
> 트래픽이 절약되고, 속도가 빨라진다는 장점이 있기 때문이다.
>
> 여러 페이지에서 동일한 스크립트를 사용하는 경우페이지가 바뀔때마다
> 스크립트를 다운 받지 않아도 된다.

> `<script>` 태그는 **src 속성과 내부 코드를 동시에 가지지 못한다.**
>
> 아래의 코드에서 `alert(1)` 은 작동하지 못한다.

```html
<script src-"파일.js">
	alert(1);
</script>
```

`alert(1)`을 작동시키고 싶으면 아래와 같이 나눠 써야 한다.

```html
<script src="파일.js"></script>
<script>
  alert(1)
</script>
```

---

## html 코드 작성 및 실행 방법

출처 사이트의 튜토리얼 내에 과제가 있었는데, html 은 처음이라 어디에 작성하라는 건지도 몰랐어서 내가 바보가 되는 기분이었다. 해설이랑 gpt한테 실행 방법 물어보면서 해결했다!

1. VSCode에 `html` 파일을 생성하고 코드를 작성한다.
   ![](https://velog.velcdn.com/images/decollzoq/post/fab9b4eb-d478-488a-994c-ff94782d92af/image.png)

2. 파일 목록 > 실행할 파일 > 우클릭 > Reveal in Finder ![](https://velog.velcdn.com/images/decollzoq/post/638d5981-a0c3-45cd-87c1-94329f9267f2/image.png)

3. Finder 에서 더블 클릭하면 브라우저에서 실행된다.
   ![](https://velog.velcdn.com/images/decollzoq/post/30321c97-8bf7-40c8-811b-1d6043b7fce4/image.png)

---

## 과제

### 문제

![](https://velog.velcdn.com/images/decollzoq/post/d8ee729e-d933-4b5d-b84e-b5b0a0bad644/image.png)

### 풀이

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      alert('Hello JavaScript!')
    </script>
  </body>
</html>
```

### 실행 결과

![](https://velog.velcdn.com/images/decollzoq/post/a65f599d-fc91-4a93-9c19-a8de55730635/image.png)

> #### `<!DOCTYPE html>` ?
>
> HTML5 문서임을 브라우저에게 알리는 선언문으로, 문서 첫 줄에 선언한다.
> 태그가 아니므로 `<script> </script>` 처럼 닫는 태그가 없다.
>
> 브라우저가 쿼크 모드가 아닌, 표준 모드로 렌더링하도록 하여 웹표준을 준수하도록 한고 한다.
> 쿼크 모드랑 표준 모드가 뭔지 모르겠다!!

---

### 문제

![](https://velog.velcdn.com/images/decollzoq/post/3a7fb431-ae1d-47b1-bf8f-9141458656e9/image.png)

### 풀이 - alert.js

```javascript
alert('Hello JavaScript! with alert.js')
```

### 풀이 - helloworld.html

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="alert.js"></script>
  </body>
</html>
```

### 실행 결과

![](https://velog.velcdn.com/images/decollzoq/post/fc94c962-9ade-487b-88b3-3018b930f600/image.png)
