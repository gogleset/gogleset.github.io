---
title: "10SHELL COMMAND 명령어 모음"
author: Jin
date: 2022-03-26 10:55:00 +0800
categories: "Linux"
tag: [linux, vi]
description: "유닉스 및 유닉스 유사 운영 체제에서 자주 사용되는 다양한 쉘 명령어와 터미널 환경에서 작업할 때 유용한 명령어들을 모아봤습니다."
path: "/posts/10LinuxShellCommand"
toc: true
comments: true
---

# Table of Contents

# 1.Mac에서 명령 프롬프트 실행하기

1. F4키 및 화면 오른쪽 상단 돋보기 버튼 누르기 혹은 Spotlight 검색 실행
2. terminal 및 iTerm2 검색 후 실행

---

![image](data:image/jpeg;base64,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)

# 자주 쓰는 프롬프트 명령어 목록

- 맥의 프롬프트 명령어는 Linux의 명령어랑 같다.
- 파일시스템, 장치명, 디렉토리 등 모든 것이 파일로 취급되어 운영된다.
- 파일의 대소문자를 구분하기 때문에 주의를 기울여야 한다. (sql 및 다른 운영체제에서 호환되던게 안되는 문제 발생)

## 리눅스 파일의 종류

1. vi 편집기로 편집이 가능한 텍스트파일(ASCII 파일)
2. 윈도우 운영체제에서 폴더와 같은 역할을 하는 디렉토리(Directory)
3. 윈도우 운영체제의 바로가기 아이콘과 유사한 개념의 링크파일
4. 시스템파일
   1. 바이너리 파일
   2. 문자 파일
   3. 파이프 파일
   4. 장치파일

---

# 3.권한 관련 명령어

```bash
sudo
```

- root권한 실행

```bash
exit
```

- 프롬프트 종료

# 4.파일 이동 및 현재 위치

```bash
pwd
```

- 현재 나의 폴더 위치 (현재 스코프)
- 터미널의 표시되는 커서의 의미

```bash
cd 디렉토리명
```

- 디렉토리 이동하기

```bash
../
```

- 상위 폴더 이동

```bash
./
```

- 현재 폴더

```bash
open .
```

- 현재위치에서 파일 열기

# 5.파일 조회

```bash
ls
```

- 현재 위치해있는 폴더의 리스트를 보여준다.

```bash
ls -l
```

- 현재 위치해있는 폴더의 정보를 자세하게 보여준다. 사용자의 권한, 소유자 그룹, 크기, 날짜 등을 자세하게 보여준다.

```bash
ls -a
```

- 숨긴 파일을 보여준다.

```bash
ls -al
```

- 파일 및 디렉토리의 내용을 전부 보여준다.
  내용이 많기 때문에 해당 내용이 화면을 지나치는 경우가 많아 주의

# 6.파일 종류 및 권한(ls -al, -l)

ls -al, -l 명령어 사용시 퍼미션 및 권한 알아보기

| 명령 | 설명                   |     |
| ---- | ---------------------- | --- |
| -    | 텍스트파일(ASCll 파일) |     |
| d    | 디렉토리               |     |
| l    | 링크파일               |     |
| c    | 문자형 입출력 파일     |     |
| b    | 바이너리 파일          |     |
| p    | 파이프 파일            |     |

| 약자       | 권한      |
| ---------- | --------- |
| r(Read)    | 읽기 권한 |
| w(Write)   | 쓰기 권한 |
| x(eXecute) | 실행 권한 |
| -          | 권한 없음 |

# 7.파일/폴더 생성, 복사, 삭제, 이동

```bash
touch "file"
```

- 파일 만들기

!주의! 경로가 단순 단어로만 구성될 경우 현재폴더가 기본이다.

```bash
mkdir "file1"
```

- 디렉토리 새로 만들기

```bash
cp "file1" "file2"
ex) cp a.txt b.txt
//a.txt의 내용이 b.txt로 복사된다.
```

- 파일 복사

```bash
cp -r 원본폴더 목적지폴더
cp -r dir1 /desktop
```

- 폴더 복사
  맨뒤에 '/'를 붙이든 말든 결과에는 상관이 없다.

```bash
rm "file"
ex) rm b.txt
//b.txt가 삭제된다.
```

- 파일 삭제

```bash
mv "file1" dir1/
ex) mv file.txt dir1/
// file.txt가 dir1/로 이동

mv "file2" dir/test.txt
ex) mv file.txt dir/text.txt
// file.txt를 dir디렉토리에 text.txt라는 이름을 변경하여 이동
```

- 파일을 다른 디렉토리로 이동시키기

```bash
rmdir "dir1" "dir2"
```

- 폴더 지우기(다중이어도 가능) -p를 rmdir 뒤에 넣으면 dir1의 상위폴더까지 삭제

```bash
rm -rf dir1/
ex) rm -rf asd/
//asd 디렉토리 안에 뭐가 들어있든 무조건 삭제
```

- 디렉토리 안에 무엇이있든 무조건 삭제

```bash
mv file1 file2
mv dir1/ dir2/
ex) mv asd asd1
		mv asd/ asd1/

		//asd 파일을 asd1 파일로 이름변경합니다.
		//asd 폴더를 asd1 폴더로 이름변경합니다.
```

- 파일 이름변경, 디렉토리 이름변경

```bash
cat file.확장자
```

- 파일 내용 출력

!주의! 경로가 단순 단어로만 구성될 경우 현재폴더가 기본이다.

# 8.ln 심볼릭 링크 생성(바로가기)

- 두 개의 파일을 연결하여 놓고, 두개의 파일을 마치 하나의 파일처럼 사용하는 것

## 링크파일 갯수 확인하는 법

- 파일 퍼미션 뒤에 숫자가 링크파일 갯수이다.

하드 링크(Hard link)

- 두 개의 파일이 물리적으로 연결
- 두 개의 파일이 별도로 저장공간을 차지한다

```bash
# ln file1 file2
```

심볼릭 링크(Symbolic Link)

- 두 개의 파일이 심볼로 연결
- 두 개의 파일이 하나의 저장공간을 사용함

```bash
# ln -s file1 file2
```

# 9.VI 편집기 명령어

- 유닉스(Unix) 계열의 운영체제에서 제공하는 문서 편집기
- 설정 파일 수정 및 간단한 문서 작성 도구

VI 모드로 들어갔을때 명령어

| 명령어            | 설명                             |
| ----------------- | -------------------------------- |
| i                 | 커서 앞에 입력 모드              |
| a                 | 커서 뒤에 입력 모드              |
| o                 | 커서가 있는 줄 아래에 빈 줄 삽입 |
| dd                | 현재 줄 삭제                     |
| dw                | 현재 단어 삭제                   |
| Ctrl + 방향키     |                                  |
| (Shift)도 된다    | 단어 단위로 커서 이동            |
| ESC → :w (저장)   | 저장                             |
| ESC → :q (엔터)   | 저장 안하고 닫기                 |
| ESC → :wq (엔터)  | 저장하고 닫기                    |
| ESC → :w! (엔터)  | 강제 저장                        |
| ESC → :q! (엔터)  | 저장 안하고 강제 닫기            |
| ESC → :wq! (엔터) | 저장하고 강제 닫기               |

# 10.파일 검색

## file의 종류를 확인

```bash
file 대상파일경로(혹은 파일경로패턴)
```

1. 현재 디렉토리 내에서 확장자가 “txt”인 모든 파일의 종류 검색

   ```bash
   file *.txt
   ```

2. /home/student 경로의 파일 종류 검색

   ```bash
   file /home/student/
   ```

### file 찾기

```bash
find 검색시작위치 -name "파일명패턴"
```

- 검색시작위치를 “/”로 지정할 경우 컴퓨터 전체 디렉토리 검색

1. 패턴찾기

   - /home 디렉토리 내에서 “.txt”패턴을 갖는 파일 찾기

   ```bash
   find /home -name "*.txt"
   ```

2. 패턴으로 찾고 검색해서 지우기

- 현재 사용자 홈 디렉토리에서 slink.txt파일을 찾아서 지우기
  ```bash
  find ~ -name "slink.txt" -delete
  ```

# 11. 파일 용량 확인

## 디스크 용량 확인 명령어

| 명령어  | 설명                                               |
| ------- | -------------------------------------------------- |
| df      | 현재 디스크의 남은 용량을 표시함                   |
| df -k   | 킬로바이트 단위로 남은 용량을 확인                 |
| df -m   | 메가 바이트 단위로 남은 용량을 확인                |
| df -h   | 보기 좋게 보여줌 (용량에 단위가 적용됨)            |
| df .    | 현재 디렉토리가 포함된 파티션의 남은 용량을 표시함 |
| df -h . | 현재 디렉토리를 보기좋게 남은 용량을 표시한다.     |

## 디렉토리 용량 확인 명령어

| 명령어    | 설명                                                                         |
| --------- | ---------------------------------------------------------------------------- |
| du        | 현재 디렉토리의 사용량을 표시함                                              |
| du -a     | 현재 디렉토리의 사용량을 파일단위로 표시함(모든 하위 파일이 출력됨)          |
| du -s     | 현재 디렉토리의 총 사용량을 확인 (현재 폴더에 대한 한 줄만 출력됨)           |
| du -h     | 보기 좋게 바꿔줌                                                             |
| df -sh \* | 현재 디렉토리의 한단계 서브 디렉토리 항목(\*)들에 대해서만 사용량을 보여준다 |

# 12. 파일 다운로드

## 인터넷에서 파일 내려받기

```bash
wget 다운로드URL
```

- 다른 이름으로 저장하기
  ```bash
  wget -O 저장될파일이름 다운로드 URL
  ```
- 이어받기
  ```bash
  wget -c 다운로드URL
  ```
  - 대용량 파일 다운 도중 멈추고 다시 다운받을 시 유용

# 13. 압축하기

- 파일이나 디렉토리를 하나의 파일로 만들어 인터넷 또는 저장매체로 배포, 백업
- 리눅스에서는 하나 이상의 파일을 묶음 파일(.tar)로 생성한 후 압축을 수행한다.
- 다양한 압축 형식이 존재하지만 가장 일반적으로 사용되는 형식은 gz형식이다.

## 묶음파일 생성 + gzip 압축 일괄 처리하기

- 리눅스나 맥 등의 유닉스 계열 운영체제에서 가장 많이 사용하는 압축 형식은 gzip이다.
- tar명령어에 gzip 관련 옵션을 추가하면 묶음 파일을 생성과정을 거치지 않고 한번에 일괄 압축/해제가 가능하다.

### 압축하기

```bash
tar zcvf 생성될압축파일이름.tar.gz 압축할원본파일_혹은_디렉토리
```

### 해제하기

```bash
tar zxvf 압축파일_이름
```

| 명령어 | 설명                                          |
| ------ | --------------------------------------------- |
| c      | 새로운 묶음을 만듦                            |
| x      | 묶인 파일을 풀어줌                            |
| f      | 묶음 파일의 이름 지정 옵션                    |
| v      | 묶음 파일을 풀거나 묶을 때 과정을 화면에 출력 |
