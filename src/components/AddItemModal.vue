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
              <label>Item name:</label>
              <input type="text" class="form-control" v-model="itemName">
            </div>
            <div class="form-group">
              <label>Stock Amount:</label>
              <input type="text" class="form-control" v-model="stock">
            </div>
            <div class="form-group">
              <label>Price per Item:</label>
              <input type="text" class="form-control" v-model="price">
            </div>
            <div class="form-group">
              <label>Description:</label>
              <textarea class="form-control" rows="4" cols="50" v-model="description"></textarea>
            </div>
            <button type="submit" class="btn btn-warning" @click="postImage" data-dismiss="modal">POST</button>
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
export default {
  name: 'additemmodal'
}
</script>

<style>

</style>
