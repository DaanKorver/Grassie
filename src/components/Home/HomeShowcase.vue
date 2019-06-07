<template>
    <div class="home-showcase">
        <div>
            <ShowcaseItem ShowcaseProduct="GrassRoll"
            ShowcaseDesc="Dit is de bescrhijving van product nummer 1"
            />
            </div>
        <div>
            <ShowcaseItem ShowcaseProduct="GrassRoll2"
            ShowcaseDesc="Dit is de bescrhijving van product nummer 2"
            />
        </div>
        <div>
            <ShowcaseItem ShowcaseProduct="GrassRoll3"
            ShowcaseDesc="Dit is de bescrhijving van product nummer 3"
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

