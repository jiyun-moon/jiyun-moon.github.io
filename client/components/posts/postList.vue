<template lang="pug">
section.post-list
	post-preview(
		v-for="post in posts"
		:key="post.id"
		:id="post.id"
		:isAdmin="isAdmin"
		:title="post.title"
		:thumbnail="post.thumbnail"
		:content="post.content"
	)
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: { PostPreview },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    // 외부에서 전달 받ㅇ르 데이터 posts 타입, 필수유무 정의
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.post-list
  display: flex
  justify-content: center
  align-items: flex-start
  flex-wrap: wrap
  padding: 20px
</style>
