<template>
  <div id="items">
    <div v-for="item of items" :key="item['.key']">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="item.url" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{item.itemName}}</h5>
          <p class="card-text">{{item.description}}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Item Price per-piece : Rp.{{item.price}}</li>
            <li class="list-group-item">Stock Remaining : {{item.stock}}</li>
            <div v-if="userId == 'e3DScum3mhe1WZyTa0v8AVvuHeM2'">
              <li class="list-group-item" v-if="userId ">
                <button data-toggle="modal" data-target="#editItemModal" class="btn btn-warning" @click="editItem(item['.key'],item.itemName,item.stock,item.price,item.description)"  >
                  <img src="@/assets/glyphicons-151-edit.png" >  
                  Edit Item
                </button>
                <button class="btn btn-danger" @click="deleteItem(item['.key'])"  >
                  <img src="@/assets/glyphicons-257-delete.png" >  
                  Delete Item
                </button>
              </li>
            </div>
          </ul>
          <button v-if="userId" class="btn btn-primary" style="margin-top:10px;" @click="addToCart(item['.key'], item.itemName, item.price)">
            <img src="@/assets/glyphicons-209-cart-in.png" >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'items',
  firebase: {
    items: db.ref('/Items')
  },
  computed: {
    ...mapState([
      'userId'
    ])
  },
  methods: {
    editItem (itemKey,itemName,stock,price,description) {
      localStorage.setItem('editItemKey', itemKey)
      localStorage.setItem('itemName', itemName)
      localStorage.setItem('stock', stock)
      localStorage.setItem('price', price)
      localStorage.setItem('description', description)
      let payload = {
        itemName: itemName,
        stock: stock,
        price: price,
        description: description
      }
      this.setItemState(payload)
    },
    deleteItem(itemKey) {
      this.removeItem(itemKey)
    },
    addToCart (itemKey, itemName, price) {
      // console.log(itemKey, itemName, price)
      let payload = {
        itemKey: itemKey,
        itemName: itemName,
        price: price
      }
      this.addToCartDb (payload)
      this.decrementStock (itemKey)
    },
    ...mapActions([
      'setItemState',
      'removeItem',
      'addToCartDb',
      'decrementStock'
    ])
  }
}
</script>

<style>
#items{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.card{
  margin-bottom: 10px;
}
</style>
