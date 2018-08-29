<template>
    <div id="login">
      this is login page
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Login',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      user: state => state.login.user
    })
  },
  methods: {
    ...mapActions({
      login: actions => actions.login.login
    })
  }
}
</script>

<style scoped>

</style>
