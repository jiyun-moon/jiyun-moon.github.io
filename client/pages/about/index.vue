<template lang="pug">
  .page-about.container
    h1.page-title 저는요,
    p 글쓰기를 좋아하고 세상에 널려있는 재미있는 일들은 다 해보고 싶은, 
      br
      | 앞에 형용사는 있지만 아직 그렇다할 대명사는 없는 그런 사람입니다.
      br
      | 그림쟁이에서 디자이너, 마크업, 개발자가 되기 까지 미지의 영역에 대한 탐구심과 호기심으로 여기까지 왔네요.
      br
      | 그저 끄적거림이 많겠지만 개발에 대한 글을 체계적으로 쓰고자 블로그를 개설합니다.
</template>
<script>
export default {
  head: {
    title: '서비스 소개 - 바나나케찹의 기술블로그',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '블로그 서비스에 대한 소개입니다.'
      }
    ]
  }
}
</script>
<style lang="sass" scoped>
.page-title
  margin-bottom: 0
  font-family: Changa, Sans-Serif
  letter-spacing: -0.03em

p
  margin-top: 0
  color: rgba(#000, 0.5)
  font-size: 13px
  letter-spacing: -0.06em
</style>
