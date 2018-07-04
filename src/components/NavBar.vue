<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">E-commerce</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <div v-if="userId">
            <li class="nav-item active">
              <a class="nav-link" href="#">Balance Rp. {{usersDb.filter(function(el){return el['.key'] == userId})[0].balance}} <span class="sr-only">(current)</span></a>
            </li>
          </div>
        </ul>
        <div v-if="userId">
          <button class="btn btn-primary" data-toggle="modal" data-target="#addItemModal" v-if="userId == 'e3DScum3mhe1WZyTa0v8AVvuHeM2'">
            <img src="@/assets/glyphicons-433-plus.png" >
            Add an Item
          </button>  
          <button class="btn btn-success" data-toggle="modal" data-target="#cartModal">
            <img src="@/assets/glyphicons-203-shopping-cart.png" >
            CART
          </button>
          <button class="btn btn-danger" @click="doLogOut">
            <img src="@/assets/glyphicons-388-log-out.png" alt="">
            LOG OUT
          </button>
        </div>
        <div v-else>
          <button class="btn btn-info" data-toggle="modal" data-target="#loginModal" >
            <img src="@/assets/glyphicons-387-log-in.png" alt="">
            LOG IN
          </button>
          <button class="btn btn-primary" data-toggle="modal" data-target="#registerModal" >
            <img src="@/assets/glyphicons-7-user-add.png" alt="">
            REGISTER
          </button>
        </div>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import { db } from '../firebase.js'
import { mapState } from 'vuex'
export default {
  name: 'navbar',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'userId'
    ])
  },
  firebase:{
    usersDb: db.ref('/Users')
  },
  methods: {
    doLogOut () {
      localStorage.removeItem('userId')
      window.location.reload()
    }
  }
}
</script>

<style>
.container-navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
