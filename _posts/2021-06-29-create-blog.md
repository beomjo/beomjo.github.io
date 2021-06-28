---
title: Jekyll, minimal-mistakes 테마를 적용하기
categories:
  - Blogs
tags:
  - Blog
  - Jekyll
  - minimal-mistakes
toc: true
---

# Jekyll, minimal-mistakes 테마를 적용하기  

## 설정
- Github Pages 호스팅을 위해 #{GITHUB_ID}.github.io 라는 이름으로 리파지토리를 생성해야 한다
- Gem을 이용해서 Jekyll 을 설치한다

## 테마 적용
minimal-mistake [빠른 시작 가이드](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)를 참고하여 진행한다.  
[minimal-mistake](https://github.com/mmistakes/minimal-mistakes)소스를 가져와 옮긴다.  
옮긴 후 다음 과정을 진행한다.  

### 불필요 내용 제거
minimal-mistakes-jekyll repository에서 소스를 가져왔다면 불필요한 내용을 제거한다.  
- .editorconfig
- .gitattributes
- .github
- /docs
- /test
- CHANGELOG.md
- minimal-mistakes-jekyll.gemspec
- README.md
- screenshot-layouts.png
- screenshot.png

### _config 파일 설정
`_config.yaml` 파일에서 아래와 값들을 설정해준다

```
minimal_mistakes_skin    : "dark"
title                    : "Beom Log"
name                     : "취미코딩하는 개발자"
description              : "회사에서는 월급 받고 집에서는 취미로 코딩하는 개발자의 블로그"
url                      : "https://beomjo.github.io"
baseurl                  : # 서브 경로가 있는 경우 기재
author                   : 프로필에 표시할 작가 정보들
```