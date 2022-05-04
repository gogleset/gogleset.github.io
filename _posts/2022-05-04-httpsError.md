---
title:  "client와 server 간 http, https 통신에 대하여"
author: Jin
date: 2022-05-04 10:55:00 +0800
categories: "ERROR"
tag: [ssl, https, https]
toc: true
comments: true
---

# 문제점
- 내가 배포한 [페이지](https://regal-squirrel-5c1e14.netlify.app/) (netfily배포)는
https 프로토콜을 기본값으로 준수한다.
하지만 AWS 서버에 있는 API의 통신 프로토콜은 http 통신 프로토콜을 사용한다.


- localhost:3000 <- (리액트 서버) 에서는 http 프로토콜을 사용하여 서버 리소스를 불러들일 수 있지만, 내가 배포한 사이트는 https 보안 규정을 준수하여 http 사이트의 리소스를 차단한다.

---
###### 구체적 문제사항
netfily에 배포한 페이지에선 애초에 AJAX 통신을 https로 통신한다.(서버 주소를 http로 설정을 하여도 자동으로 https:// 로 통신)
1. js코드 단에서 http:// 로 통신 (localhost는 잘 받아짐)
![jscode](../assets/img/1_3.png)
   - http:를 지우고 ://으로 하면 통신프로토콜 규정없이 통신이 가능하다고해서 해봤지만 failed​
2. 코드 배포시 문제, 자동으로 https로 통신


![netfily](../assets/img/1_2.png)
![netfily2](../assets/img/1_1.png)

<그 전에 mixed 에러도 났었음..>
[관련글](http://daplus.net/javascript-https-%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%EC%84%9C-http-ajax-%EC%9E%91%EC%97%85%EC%9D%84-%EC%8B%A4%ED%96%89%ED%95%A0-%EB%95%8C-%ED%98%BC%ED%95%A9-%EC%BD%98%ED%85%90%EC%B8%A0-%EC%B0%A8/)


- 해결법: 이 태그를 리액트 빌드파일 index.html 메타에 추가
```html
<meta http-equiv="Content-Security-Policy" 
content="upgrade-insecure-requests">
```
mixed 오류는 해결했지만 ssl 인증 문제 해결은 안됨..



# 해결방법(추론)
1. AWS 서버에 http, https 통신 프로토콜 지원하기
2. localhost로만 개발하기
​
   - 아직 client 단의 문제인지, server만의 문제인지 헷갈리는 경우이다. AWS에서 https를 지원하여도 될지 안될지 모르겠다 ㅠㅠ
​
