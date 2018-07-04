<template>
  <div class="modal fade" id="loginModal" tabindex="-1" role="dalog" aria-labelledby="registerModalLaber" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">E-commerce</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password">
            <input type="checkbox" @click="showPassword">Show Password
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <button class="btn btn-lg btn-danger btn-block" type="submit" @click="signIn" data-dismiss="modal">Sign in</button>
          </form>
        </div>
        <div class="modal-footer" style="text-align:center;">
          <p class="mt-5 mb-3 text-muted">© 2017-2018 </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'loginModal',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods:{
    signIn () {
      let payload = {
        email: this.email,
        password: this.password
      }
      this.logIn(payload)
    },
    ...mapActions([
      'logIn'
    ])
  }
}
</script>

<style>

</style>
