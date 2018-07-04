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
          <img class="d-block w-100" src="@/assets/download.jpeg" alt="First slide">
          <div class="carousel-caption d-none d-md-block">
            <h5>First Slide</h5>
            <p>Ayo kamu bisa</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/download.jpeg" alt="Second slide">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second Slide</h5>
            <p>Ayo kamu pasti bisa</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/download.jpeg" alt="Third slide">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third Slide</h5>
            <p>Bisa bisa bisa</p>
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
