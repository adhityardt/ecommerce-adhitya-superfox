<template>
  <div>
    <NavBar/>
      <Carousel> </Carousel>
      <Items/>
    <div class="content">
    </div>
    <RegisterModal/>
    <LoginModal/>
    <AddItemModal/>
    <EditItemModal/>
    <CartModal/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Carousel from '@/components/Carousel.vue'
import Items from '@/components/Items.vue'
import RegisterModal from '@/components/RegisterModal.vue'
import LoginModal from '@/components/LoginModal.vue'
import AddItemModal from '@/components/AddItemModal.vue'
import EditItemModal from '@/components/EditItemModal.vue'
import CartModal from '@/components/CartModal.vue'
export default {
  name: 'mainpage',
  components: {
    NavBar,
    Carousel,
    Items,
    RegisterModal,
    LoginModal,
    AddItemModal,
    EditItemModal,
    CartModal
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
