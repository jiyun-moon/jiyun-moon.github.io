<template lang="pug">
  .page-posts.container
    h1.page-title Posts
    p 블로그 포스트 리스트 페이지 입니다.
    post-list(:posts="loadedPosts")
</template>

<script>
import postList from '@/components/posts/postList'

export default {
  head: {
    title: '블로그 - 바나나케찹의 기술블로그',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '프론트 개발 관련 기술노트를 작성합니다.'
      }
    ]
  },
  components: { postList },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
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
