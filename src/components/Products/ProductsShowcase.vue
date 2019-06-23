<template>
    <div class="wrapper">
        <div>
            <ProductsItem itemTitle="Title 1"
            itemDesc="This is a short description for the product that in this container"
            classname="img-1"
            item="Le Grass"
            />
        </div>
        <div>
            <ProductsItem itemTitle="Title 2"
            itemDesc="This is a short description for the product that in this container"
            classname="img-2"
            />
        </div>
        <div>
            <ProductsItem itemTitle="Title 3"
            itemDesc="This is a short description for the product that in this container"
            classname="img-3"
            />
        </div>
        <div>
            <ProductsItem itemTitle="Title 4"
            itemDesc="This is a short description for the product that in this container"
            classname="img-4"
            />
        </div>
    </div>
</template>

<script>
import ProductsItem from './ProductItem'

export default {
    name: "ProductsShowcase",
    components: {
        ProductsItem
    },
}
</script>

<style scoped>
    .wrapper {
        width: 100vw;
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .wrapper > div {
        display: inline-block;
        height: 60vh;
        width: 100%;
        position: relative;
        min-width: 270px;
    }
    @media (max-width: 1100px) {
        .wrapper {
            grid-template-columns: 1fr 1fr;
        }
    }
        @media (max-width: 550px) {
        .wrapper {
            grid-template-columns: 1fr;
        }
    }
</style>