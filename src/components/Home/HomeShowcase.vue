<template>
    <div class="home-showcase">
        <div>
            <ShowcaseItem ShowcaseProduct="Le grass"
            ShowcaseDesc="Aahhhh, Le grass, het perfecte grass voor de franse achtertuin"
            classname="img-1"
            item="Le grass"
            />
            </div>
        <div>
            <ShowcaseItem ShowcaseProduct="Grais"
            classname="img-2"
            ShowcaseDesc="Grais, rare naam, raar gras"
            item="Grais"
            />
        </div>
        <div>
            <ShowcaseItem ShowcaseProduct="Es Grassos"
            ShowcaseDesc="Si, Es Grassos beautifull. Voor de achtertuin die wel wat pittigs kan gebruiken"
            item="Es Grassos"
            classname="img-3"
            />
            </div>
    </div>
</template>

<script>
import ShowcaseItem from './ShowcaseItem.vue';
export default {
    name: "HomeShowcase",
    components: {
        ShowcaseItem
    }
}
</script>

<style scoped>
    .home-showcase {
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .home-showcase > div {
        display: inline-block;
        height: calc(100vh - 64px);
        width: calc(90vw / 3);
        position: relative;
        margin: 0 auto;
        padding: 5% 0;
    }

    @media (max-width: 970px) {
        .home-showcase { 
            grid-template-columns: 1fr;
        }
        .home-showcase > div {
            width: 80vw;
            margin: 5% auto;
        }
    }

    @media (max-width: 550px) {
        .home-showcase > div {
            width: 100vw;
        } 
    }
</style>

