<template>
  <div class="page">
    <HomeHeader />
    <HomeShowcase />
    <HomeService />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/Home/HomeHeader.vue'
import HomeShowcase from '../components/Home/HomeShowcase.vue'
import HomeService from '../components/Home/HomeService.vue'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeShowcase,
    HomeService
  }
}
</script>
