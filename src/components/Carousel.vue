<template>
  <div id="carousel">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="@/assets/25percentoff.png" alt="First slide" style="height: 700px;">
          <div class="carousel-caption d-none d-md-block">
            <h5>25 Percent Off</h5>
            <p>Only on ecommerce</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/freeshipping.png" alt="Second slide" style="height: 700px;">
          <div class="carousel-caption d-none d-md-block">
            <h5>Free Shipping</h5>
            <p>Go buy now!!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/buyone.jpeg" alt="Third slide" style="height: 700px;">
          <div class="carousel-caption d-none d-md-block">
            <h5>Buy 1 Get 1 Free</h5>
            <p>Buy one get one for your love one</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carousel'
}
</script>

<style>
#carousel {
  height: 750px;
}
</style>
