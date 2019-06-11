<template>
  <div class="page">
    <AboutInfo />
    <Footer />
  </div>
</template>

<script>
import AboutInfo from '../components/About/AboutInfo'
import Footer from '../components/Footer'
export default {
  name: "about",
  components: {
    AboutInfo,
    Footer
  }
}
</script>
