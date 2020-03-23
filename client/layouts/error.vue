<template>
  <section class="container">
    <h1 v-if="error.statusCode === 404">요청하는 페이지를 찾을 수 없습니다.</h1>
    <h1 v-else>오류가 발생했습니다.</h1>
    <nuxt-link to="/">홈</nuxt-link> 페이지로 이동하여 다시 시도해보세요.
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
