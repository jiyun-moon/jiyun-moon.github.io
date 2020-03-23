<template lang="pug">
  .page-home    
    post-list(:posts="loadedPosts")
</template>
<script>
import postList from '@/components/posts/postList'
export default {
  head: {
    title: '홈 - 바나나케찹의 기술블로그',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '블로그 메인화면 - 블로그 글 목록입니다.'
      }
    ]
  },
  components: { postList },
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
    console.log(this.$store.getters.loadedPosts)
  }
}
</script>
<style lang="sass" scoped>
@import "~assets/styles/config"

a
  text-decoration: none
  color: darken($color, 20%)
  transition: all 0.4s ease
  &:hover .post-content,
  &:active .post-content
    background-color: rgba($color, 0.26)

@media (min-width: 768px)
  .intro h1
    font-size: 2rem
</style>
