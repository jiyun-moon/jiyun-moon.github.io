---
layout: post
title:  "v-for key 사용시 주의점"
date:   2020-03-05 
categories: vue js
---
컴포넌트를 필용에 따라 추가하고 삭제하는 기능을 만드는데,
그 순서가 뒤엉킨다 해야하나?
삭제한 아이가 사라지지 않고 그 위에 것이 사라진다든지 하는 문제가 있었다.
(망할 기억력ㅠㅠ 이래서 제때 오답노트를 써놔야 하는것이다)
그래서 글을 찾다가 발견한 것이 v-for 사용시 증가 후 삭제시 경우 dom 을 파기하지 않는 현상이 있었다.

[참고 링크 : v-for과 key, 그리고 성능사이의 관계]

<b>문제는 v-for 가 데이터를 처리하는 방식에서 길이가 가변할 경우 dom을 재 렌더링 하지 않기 때문에 일어나는 것이었다.</b>

v-for가 데이터를 처리 하는 방식은 아래와 같다(위 링크에서 가져옴)

`1. data의 길이가 0(혹은 초기화)에서 n의 길이가 되었을 경우 n개의 컴포넌트를 만들고 dom으로 바꾼다.`
`2. 1번 이후 당연히 컴포넌트는 새로 만들어졌으므로(dom으로 인스턴스화 됬으므로) created와 mounted 이벤트가 발생`
`3. data의 길이가 n개에서 m개로 증가 되었다.(m은 n보다 크다)`
`4. 3번 이후 컴포넌트가 추가되었지만 기존의 dom자체를 파기하지는 않고 적절히 순서를 유지한다.(새 데이터가 앞일지 뒤일지 중간일지 모르므로)`
`5. 데이터가 당연히 추가되야하므로 m-n개 만큼 추가로 dom을 생성한다 당연히 추가로 생성된 컴포넌트는 created와 mounted가 발생한다. `

결국 random key 메소드를 만들어 v-for 의 key에 추가하니 문제가 해결되었다.

> :key="index + randomKey()"
  
> randomKey() {
>
> const random = Math.floor(Math.random()*10000)
>
> return random
>
> },



[참고 링크 : v-for과 key, 그리고 성능사이의 관계]: https://kamang-it.tistory.com/entry/WebPerformanceVue-vfor%EA%B3%BC-key-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%84%B1%EB%8A%A5%EC%82%AC%EC%9D%B4%EC%9D%98-%EA%B4%80%EA%B3%84
