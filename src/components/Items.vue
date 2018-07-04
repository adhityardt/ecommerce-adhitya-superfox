<template>
  <div id="items">
    <div v-for="item of items" :key="item['.key']">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{item.itemName}}</h5>
          <p class="card-text">{{item.description}}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Item Price per-piece : Rp.{{item.price}}</li>
            <li class="list-group-item">Stock Remaining : {{item.stock}}</li>
            <div v-if="userId == 'e3DScum3mhe1WZyTa0v8AVvuHeM2'">
              <li class="list-group-item" v-if="userId ">
                <button data-toggle="modal" data-target="#updateAnswerModal" class="btn btn-warning" @click="editAnswer(answer.key)"  >
                  <img src="@/assets/glyphicons-151-edit.png" >  
                  Edit Item
                </button>
                <button class="btn btn-danger" @click="deleteAnswer(answer.key)"  >
                  <img src="@/assets/glyphicons-257-delete.png" >  
                  Delete Item
                </button>
              </li>
            </div>
          </ul>
          <button class="btn btn-primary" style="margin-top:10px;">
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
import { mapState } from 'vuex'
export default {
  name: 'items',
  firebase: {
    items: db.ref('/Items')
  },
  computed: {
    ...mapState([
      'userId'
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
