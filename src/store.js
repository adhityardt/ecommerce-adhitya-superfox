import Vue from 'vue'
import Vuex from 'vuex'
import { user, db } from './firebase.js'
import alertify from 'alertifyjs'
// import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: localStorage.getItem('userId')
  },
  mutations: {
    setUserId (state, payload) {
      state.userId = payload
    }
  },
  actions: {
    logIn ({ commit }, payload) {
      user.signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          localStorage.setItem('userId', response.user.uid)
          commit('setUserId', response.user.uid)
          alertify
            .alert('You have successfully logged in', function () {
              alertify.message('You are now logged in')
            })
          // router.push({name: 'mainpage'})
        })
        .catch(error => {
          alertify
            .alert('Email or password is wrong', function () {
              alertify.message('Please check or re-enter your email and password')
            })
          console.log(error)
        })
    },
    register ({commit}, payload) {
      user.createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          db.ref('/Users/').child(response.user.uid).set({
            name: payload.name,
            email: payload.email,
            balance: 1000000
          })
          alertify
            .alert('You have successfully registered', function () {
              alertify.message('Verify your email to login')
            })
        })
        .catch(err => {
          alertify
            .alert('Email or password is wrong', function () {
              alertify.message('Please check or re-enter your email and password')
            })
          console.log(err)
        })
    }
  }
})
