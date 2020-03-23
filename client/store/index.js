// Vuex 패키지 불러오기
import Vuex from 'vuex'
import axios from 'axios'

const api = process.env.baseUrl

// 스토어 생성 함수 정의
const createStore = () => {
  // Vuex.Store 객체 생성 반환
  return new Vuex.Store({
    // 상태(데이터)
    state: {
      loadedPosts: []
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    },
    // 쓰기(동기 처리)
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      createPost(state, createdPost) {
        state.loadedPosts.push(createdPost)
      },
      updatePost(state, updatePost) {
        const idx = state.loadedPosts.findIndex(
          post => post.id === updatePost.id
        )
        state.loadedPosts[idx] = updatePost
      }
    },
    // 액션(비동기 처리 ⟹ 쓰기 커밋)
    actions: {
      // 액션에 nuxtServerInit 메서드를 추가하면
      // 서버에서 전달 받은 데이터를 초기화 과정에서 처리
      async nuxtServerInit({ commit }, context) {
        try {
          const { data } = await axios.get(api + '/posts.json')
          const postsList = []
          for (let key in data) {
            postsList.push({ ...data[key], id: key })
          }
          console.log(postsList)
          commit('setPosts', postsList)
        } catch (e) {
          console.error(e)
        }
      },
      setPosts({ commit }, posts) {
        commit('setPosts', posts)
      },
      createPost({ commit }, createdPost) {
        createdPost.createdDate = new Date().toLocaleString()
        createdPost.updatedDate = createdPost.createdDate
        // Firebase 데이터베이스와 통신
        return axios
          .post(api + '/posts.json', createdPost)
          .then(res => {
            // 통신이 성공하면 뮤테이션에 커밋
            commit('createPost', { ...createdPost, id: res.data.name })
          })
          .catch(e => console.error(e))
      },
      async updatePost({ commit }, updatePost) {
        updatePost.updatedDate = new Date().toLocaleString()
        return axios
          .put(api + `/posts/${updatePost.id}.json`, updatePost)
          .then(res => {
            commit('updatePost', updatePost)
          })
          .catch(e => console.error(e))
      }
    }
  })
}

// createStore 함수 모듈 기본으로 내보내기
export default createStore
