import Vue from 'vue'
import Vuex from 'vuex'
import { user, db, storageRef } from './firebase.js'
import alertify from 'alertifyjs'
// import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: localStorage.getItem('userId'),
    image: '',
    itemName: '',
    stock: 0,
    price: 0,
    description: ''
  },
  mutations: {
    setUserId (state, payload) {
      state.userId = payload
    },
    setItemState (state, payload) {
      state.itemName = payload.itemName
      state.stock = payload.stock
      state.price = payload.price
      state.description = payload.description
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
              window.location.reload()
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
    },
    addItemDb ({commit, state}, payload) {
      let date = Number(new Date()).toString()
      storageRef.ref(date).put(payload.image)
        .then(response => {
          storageRef.ref(date).getDownloadURL()
            .then(urlResponse => {
              db.ref('/Items/').push({
                itemName: payload.itemName,
                stock: payload.stock,
                price: payload.price,
                description: payload.description,
                url: urlResponse
              })
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(error => {
          console.log(error)
        })
    },
    editItemDb ({commit}, payload) {
      db.ref('/Items/' + localStorage.getItem('editItemKey')).update({
        itemName: payload.itemName,
        stock: payload.stock,
        price: payload.price,
        description: payload.description
      })
    },
    setItemState ({commit}, payload) {
      commit('setItemState', payload)
    },
    removeItem ({commit}, payload) {
      alertify.confirm('Are you sure?',
        function () {
          alertify.success('Answer successfully deleted')
          db.ref('/Items').child(payload).remove()
        },
        function () {
          alertify.error('Cancel')
        })
    },
    addToCartDb ({commit}, payload) {
      db.ref('/Carts/' + localStorage.getItem('userId')).child(payload.itemKey).set({
        itemName: payload.itemName,
        total: 1,
        price: payload.price
      })
      // .then(response => {
      //   db.ref('/Carts/' + localStorage.getItem('userId')).child(payload.itemKey).child('total').transaction(function (currentValue) {
      //     return (currentValue || 0) + 1
      //   })
      // })
      // .catch(error => {
      //   console.log(error)
      // })
    },
    decrementStock ({commit}, payload) {
      db.ref('/Items/' + payload).child('stock').transaction(function (currentValue) {
        return (currentValue || 0) - 1
      })
    },
    incrementStock ({commit}, payload) {
      db.ref('/Items/' + payload).child('stock').transaction(function (currentValue) {
        return (currentValue || 0) + 1
      })
    }
  }
})
