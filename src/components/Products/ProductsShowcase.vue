<template>
    <div class="wrapper">
        <div class="grass grass-1">
            <ProductsItem itemTitle="Le Grass"
            itemDesc="Aahhhh, Le grass, het perfecte grass voor de franse achtertuin"
            classname="img-1"
            item="Le Grass"
            />
        </div>
        <div class="grass grass-2">
            <ProductsItem itemTitle="Grais"
            itemDesc="Grais, rare naam, raar gras"
            classname="img-2"
            item="Grais"
            />
        </div>
        <div class="grass grass-3">
            <ProductsItem itemTitle="Es Grassos"
            itemDesc="Si, Es Grassos beautifull. Voor de achtertuin die wel wat pittigs kan gebruiken"
            classname="img-3"
            item="Es Grassos"
            />
        </div>
        <div class="grass grass-4">
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
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

export default {
    name: "ProductsShowcase",
    components: {
        ProductsItem
    },
    mounted() {
        var tl = new TimelineMax();
        tl
        .addLabel("start")
        .to(".grass-1", .7, {opacity: 1, scale: 1},"start")
        .to(".grass-2", .7, {opacity: 1, scale: 1},"start+=.3")
        .to(".grass-3", .7, {opacity: 1, scale: 1},"start+=.6")
        .to(".grass-4", .7, {opacity: 1, scale: 1},"start+=.9")
    }
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
    .grass {
        transform: scale(0);
        opacity: 0;
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