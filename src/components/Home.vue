<template>
  <div id="home">
    this is a new page
    <button @click="filterUser()">fdasf</button>
    <div v-for="item in userList" :key="item._id">
      {{item._id}}
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      vm: {
      }
    }
  },
  created () {
    this.initUserList()
  },
  computed: {
    ...mapState({
      userList: state => state.home.userList
    }),
    ...mapGetters([
      'filterUser'
    ])
  },
  methods: {
    ...mapActions([
      'initUserList'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
