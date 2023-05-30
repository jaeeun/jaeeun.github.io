---
title : "How to install the Ruby for jekyll"
data : 2023-05-21
tag : 
 - Tips
 - SmartThings
 - IoT
comments : true
img : "https://phoenixnap.com/kb/wp-content/uploads/2021/04/how-to-install-ruby-on-windows-10.png"
---


## Github io 블로그 운영을 위한 Ruby설치 방법

### 참고 사이트
- [WSL 사용 방법](https://phoenixnap.com/kb/install-ruby-on-windows-10)
- [V3.2.2](https://4d-why.tistory.com/57)
- [V3.1.2, webrick오류 수정 ](https://velog.io/@kiyoog02/jekyll-%EC%82%AC%EC%9A%A9%EC%9D%84-%EC%9C%84%ED%95%9C-Ruby-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C)

<br><br>

### Ruby 설치
Download Site : [https://rubyinstaller.org/downloads/archives/](https://rubyinstaller.org/downloads/archives/)   
3.1.3 (x64) 를 받았다.
   
<br><br>

### 설치 후 버전확인
```
ruby -v
```

### jekyll, 관련 bundler 설치
```
gem install jekyll bundler
bundler install
```

### 실행
```
bundle exec jekyll serve
```
