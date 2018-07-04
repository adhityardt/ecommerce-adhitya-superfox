<template>
  <div>
    <NavBar/>
      <Carousel> </Carousel>
      <Items/>
    <div class="content">
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Carousel from '@/components/Carousel.vue'
import Items from '@/components/Items.vue'
export default {
  name: 'mainpage',
  components: {
    NavBar,
    Carousel,
    Items
  }
}
</script>

<style>
/* .content{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
} */
/* Carousel{
  display: flex;
  margin-bottom: 10cm;
} */
</style>
