<template>
  <div>
    <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Cart</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div v-if="userId">
            <!-- <div v-for="cart of cartsDb" :key="cart['.key']"> -->
              <div v-for="(cart, index) in carts" :key="index">
                <!-- <h5>{{cart.itemName}}</h5>
                <p>Total: {{cart.total}} </p> -->
                <h5>{{cart.data.itemName}}</h5>
                <p>Total Item: {{cart.data.total}}</p>
                <p>Total Price: {{cart.data.price * cart.data.total}}</p>
                <button class="btn">
                  <img src="@/assets/glyphicons-433-plus.png" @click="plusCart(cart.key)">
                </button>
                <button class="btn">
                  <img src="@/assets/glyphicons-434-minus.png" @click="minCart(cart.key)">
                </button>
                <hr>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase.js'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'cartmodal',
  data () {
    return {
      carts: []
    }
  },
  firebase: {
    cartsDb: db.ref(`/Carts/`)
  },
  computed: {
    ...mapState([
      'userId'
    ])
  },
  methods: {
    getCart () {
      db.ref('/Carts/' + this.userId).on('value', (snapshot) => {
        let cartList = []
        snapshot.forEach(snap => {
          let result = {
            key: snap.key,
            data: snap.val()
          }
          cartList.push(result)
        })
        this.carts = cartList
      })
    },
    plusCart (itemKey) {
      db.ref('/Carts/' + this.userId).child(itemKey).child('total').transaction(function (currentValue) {
        return (currentValue || 0) + 1
      })
      this.decrementStock(itemKey)
    },
    minCart (itemKey) {
      db.ref('/Carts/' + this.userId).child(itemKey).child('total').transaction(function (currentValue) {
        return (currentValue || 0) - 1
      })
      this.incrementStock(itemKey)
    },
    ...mapActions([
      'decrementStock',
      'incrementStock'
    ])
  },
  created () {
    this.getCart()
  }
}
</script>

<style>

</style>
