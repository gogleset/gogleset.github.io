---
title:  "컴퓨터의 구성요소"
author: Jin
date: 2022-03-31 10:55:00 +0800
categories: "CS"
tag: [데이터, 컴퓨터, 자료압축, 압축률, 아날로그, 디지털, 텍스트]
toc: true
comments: true
---
# 컴퓨터의 구성 요소

## 컴퓨터와 전기

### 게이트
- 전기적 신호에 맞춰 기본적 연산을 수행하는 장치

### 회로
- 좀 더 복잡한 작업을 수행할 수 있도록 결합한 게이트들


## 게이트와 회로의 설명방식
1. 부울수식(Boolean Expression): 부울 대수식을 사용하여 두 개의 값을 가진 논리적 수식을 표현하기 위한 수학적 표기
2. 논리 다이어그램(Logic Diagrams): 회로의 그래픽적 표현, 각 게이트는 고유의 기호를 가진다.
3. 진리표(Truth Tables): 입력값과 출력값들을 보여주는 표


### 게이트의 종류
1. NOT 게이트


  ![Not게이트](/assets/img/NOT.png)
   - NOT 게이트는 한개의 값(0 또는 1)을 입력받으며, 그 반대의 값을 출력한다.

2. AND 게이트


  ![AND게이트](/assets/img/AND.png)
   - AND 게이트 두 개의 값을 입력 받으며, 둘 다 1이면 1을 출력, 그 외의 경우 0을 출력한다.


3. OR 게이트


  ![OR게이트](/assets/img/OR.png)
   - OR 게이트는 두 개의 값을 입력 받으며, 둘 다 0이면 0을 출력하고, 그 외의 경우 1을 출력한다.


4. XOR 게이트


  ![XOR게이트](/assets/img/XOR.png)
   - XOR 게이트는 두 개의 값을 입력 받으며, 두 개가 서로 같으면 0을 출력하고, 그 외의 경우 1을 출력한다.


###### XOR 게이트와 OR 게이트의 차이점: 입력 조건 하나만 빼고 모두 같다. 두 입력값 모두 1이면 OR 게이트에서는 1을 출력하며 XOR에서는 0을 출력한다.


5. NAND 게이트


  ![NAND게이트](/assets/img/NAND.png)
   - NAND 게이트는 두 개의 값을 입력 받으며, 둘 다 1이면 0을 출력하고, 그 외의 경우 1을 출력한다.
   - 


6. NOR 게이트


  ![NOR게이트](/assets/img/NOR.png)
   - NOR 게이트는 두 개의 값을 입력 받으며, 둘 다 0이면 1을 출력하고, 그 외의 경우 0을 출력한다.


#### 정리
- NOT 게이트는 하나의 입력값을 뒤집는다.
- AND 게이트는 입력값이 둘 다 1일 경우 1을 출력한다.
- OR 게이트는 입력값이 둘 다 0일 경우 0을 출력한다.
- XOR 게이트는 입력값이 서로 같을 경우 0을 출력한다.
- NAND 게이트는 입력값이 둘 다 1일 경우 0을 출력한다.
- NOR 게이트는 입력값이 둘 다 0일 경우 1을 출력한다.


### 3개 이상의 값을 입력받는 게이트
- 게이트는 3개 이상의 값을 입력 받도록 설계 될 수 있다.
- 예를들어 세 개의 입력 값이 있는 AND 게이트는 모든 입력 값들이 모두 1인 경우에만 1을 출력한다.


## 트랜지스터
- 입력신호의 전압에 따라서 전기를 통하게 하는 도선이거나 전기의 흐름을 차단하는 저항으로 작용하는 장치
- 움직이는 부분은 없지만 스위치와 같은 역할을 한다.
- 특별히 성능 좋은 전기 전도체(구리 등)도 아니고, 특별히 성능 좋은 절연체(고무 등)도 아닌 반도체이다.


### 게이트의 구성
- 트랜지스터는 3단자를 갖는다
  - 전원
  - 베이스 
  - 방출기(일반적으로 접지상태)

-  전기 신호가 접지된 상태라면, 전기는 대체 경로를 통해 땅에 흐르게 되어 위험하지 않게 된다.
-  NOT, NAND, NOR 게이트들의 구성이 가장 쉽다.


### 회로(Circuits)

#### 조합회로 (Combination Circuit)
- 입력 값들에 의해서만 출력값이 결정되는 회로


##### 조합회로의 조합방식
- 부울 대수학의 원리를 이용하여 회로에 적용, 효율적인  회로를 구성할 수 있다.

- **ex)** A(B+C) = AB+AC 니 두 회로는 같다.


#### 순차회로 (Sequential Circuit)
- 출력 값은 입력 값들과 회로의 현재 상태에 대한 작용에 의해 결정된다.
- 회로의 동작은 3가지로 설명할 수 있다.
   - 진리표
   - 논리 다이어그램
   - 부울 수학




