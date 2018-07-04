<template>
  <div>
    <div id="addItemModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Add an Item</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Image File:</label>
              <input type="file" class="form-control" @change="postImageHandler">
            </div>
            <div class="form-group">
              <label>Item Name:</label>
              <input type="text" class="form-control" v-model="itemName">
            </div>
            <div class="form-group">
              <label>Stock Amount:</label>
              <input type="text" class="form-control" v-model="stock">
            </div>
            <div class="form-group">
              <label>Price per-Item:</label>
              <input type="text" class="form-control" v-model="price">
            </div>
            <div class="form-group">
              <label>Item Description:</label>
              <textarea class="form-control" rows="4" cols="50" v-model="description"></textarea>
            </div>
            <button type="submit" class="btn btn-warning" @click="postItem" data-dismiss="modal">POST</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'additemmodal',
  data () {
    return {
      image: '',
      itemName: '',
      stock: 0,
      price: 0,
      description: ''
    }
  },
  methods: {
    postImageHandler: function (event) {
      this.image = event.target.files[0]
    },
    postItem () {
      let payload = {
        image: this.image,
        itemName: this.itemName,
        stock: this.stock,
        price: this.price,
        description: this.description
      }
      this.addItemDb(payload)
    },
    ...mapActions ([
      'addItemDb'
    ])
  }
}
</script>

<style>

</style>
