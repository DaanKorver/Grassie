<template>
    <div class="page">
        <ProductsShowcase />
        <Footer />
    </div>
</template>

<script>
import Footer from '../components/Footer'
import ProductsShowcase from '../components/Products/ProductsShowcase'

export default {
    components: {
        ProductsShowcase,
        Footer
    }
}
</script>
