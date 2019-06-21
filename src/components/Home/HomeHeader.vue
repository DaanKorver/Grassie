<template>
    <div class="home-header">
        <div class="text">
            <h2 class="hidden-left hidden-left1">U DOET DE WAS</h2>
            <h1 class="hidden-right">GRASSIE</h1>
            <h2 class="hidden-left hidden-left2">WIJ DOEN HET GRAS</h2>
        </div>
    </div>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
    export default {
        name: 'HomeHeader',
        mounted() {
            var tl = new TimelineMax();
            tl.addLabel("start")
            .to(".hidden-left1", .6, {opacity: 1, x: 0, ease:Power2.easeOut},"start")
            .to(".hidden-right", .6, {opacity: 1, x: 0, ease:Power2.easeOut, delay: .3},"start")
            .to(".hidden-left2", .6, {opacity: 1, x: 0, ease:Power2.easeOut, delay: .6},"start")
        }
    }
</script>

<style scoped>
    .home-header {
        width: 100vw;
        max-width: 100%;
        height: 75vh;
        background: url("../../assets/grass-header.jpg");
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-attachment: fixed;
    }

    .text {
        width: 60%;
        height: auto;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .text h1,
    .text h2 {
        text-shadow: 3px 3px rgba(0, 0, 0, .6);
        white-space: nowrap;
        margin: 2% 0;
    }

    .text-ani {
        transition: opacity .5s, transform .5s;
    }

    h1 {
        font-size: calc(30px + 3vw);
        color: #ffff66;
    }

    h2 {
        font-size: calc(30px + 1vw);
    }

    .hidden-left {
        opacity: 0;
        transform: translateX(-50%);
    }

    .hidden-right {
        opacity: 0;
        transform: translateX(50%);
    }

    @media (max-width: 345px) {
        h1 {
            font-size: calc(20px + 3vw);
        }

        h2 {
            font-size: calc(20px + 1vw);
        }
    }
</style>