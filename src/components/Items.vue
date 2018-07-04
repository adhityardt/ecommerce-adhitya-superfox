<template>
  <div id="items">
    <!-- <div class="row container"> -->
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Stock Remaining : </li>
            <li class="list-group-item">
              <button data-toggle="modal" data-target="#updateAnswerModal" class="btn btn-warning" @click="editAnswer(answer.key)"  >
                <img src="@/assets/glyphicons-151-edit.png" >  
                Edit Item
              </button>
              <button class="btn btn-danger" @click="deleteAnswer(answer.key)"  >
                <img src="@/assets/glyphicons-257-delete.png" >  
                Delete Item
              </button>
            </li>
          </ul>
          <button class="btn btn-primary" style="margin-top:10px;">
            <img src="@/assets/glyphicons-209-cart-in.png" >
            Add To Cart
          </button>
        </div>
      </div>
      <!-- <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'items'
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
