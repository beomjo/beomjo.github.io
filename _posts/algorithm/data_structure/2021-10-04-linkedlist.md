---
title: LinkedList
categories:
  - DataStructure
tags:
  - Algorithm
  - 자료구조
  - LinkedList
toc: true
---

# 연결리스트(LinkedList)

## LinkedList란?
원소를 저장할 때 그 다음 원소가 있는 위치를 포함하는 방식으로 저장하는 방식이다.  


## LinkedList의 성질
- K번째 원소를 확인/변경하기 위해 O(K)가 필요함
- 임의의 위치에 원소를 추가, 임의의 위치에 원소를 제거하기 위해 O(1)이 필요함  
- 원소들이 메모리상에 연속해있지않아 캐시메모리적중률(Cache hit rate)가 낮지만 할당이 다소 쉽다


## LinkedList의 종류
- 단일 연결 리스트(Singly Linked List)
    - 각 원소가 자신의 다음 원소의 주소를 들고 있는 LinkedList
- 이중 연결 리스트(Doubly Linked List)
    - 각 원소가 이전원소와 다음원소의 주소를 둘 다 들고 있는 LinkedList
- 원형 연결 리스트(Circular Linked List)
    - 끝과 처음이 연결되어 있는 LinkedList
    - 각 원소가 이중연결리스트처럼 이전과, 다음 주소를 모두 들고 있어도 상관 없다  


## Array vs LinkedList
| | Array | LinkedList |
|--|-----|-----------|
|K번째 원소 접근|O(1)|O(K)|
|임의 위치에 원소 추가/제거|O(N)|O(1)|
|메모리상의 배치|	연속|	불연속|
|추가적으로 필요한 공간(Overhead)|-|	O(N)<br>다음원소등의 주소값을 저장해야하므로, 32비트 컴퓨터라면 4N바이트가 필요|