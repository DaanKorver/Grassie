<template>
    <div class="wrapper">
        <div>
            <ProductsItem itemTitle="Le Grass"
            itemDesc="Aahhhh, Le grass, het perfecte grass voor de franse achtertuin"
            classname="img-1"
            item="Le Grass"
            />
        </div>
        <div>
            <ProductsItem itemTitle="Grais"
            itemDesc="Grais, rare naam, raar gras"
            classname="img-2"
            item="Grais"
            />
        </div>
        <div>
            <ProductsItem itemTitle="Es Grassos"
            itemDesc="Si, Es Grassos beautifull. Voor de achtertuin die wel wat pittigs kan gebruiken"
            classname="img-3"
            item="Es Grassos"
            />
        </div>
        <div>
            <ProductsItem itemTitle="Yeetes Grasses"
            itemDesc="Voor de waaghalsen onder ons"
            classname="img-4"
            item="Yeetes Grasses"
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