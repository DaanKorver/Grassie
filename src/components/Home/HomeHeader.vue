<template>
    <div class="home-header">
        <div class="text">
            <h2 class="text-ani hidden-left">U DOET DE WAS</h2>
            <h1 class="text-ani hidden-right">GRASSIE</h1>
            <h2 class="text-ani hidden-left">WIJ DOEN HET GRASS</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
        mounted() {
        let texts = document.getElementsByClassName("text-ani");
            
        setTimeout(()=>{
            texts[0].classList.remove("hidden-left");
            setTimeout(()=>{
                texts[1].classList.remove("hidden-right");
                setTimeout(()=>{
                    texts[2].classList.remove("hidden-left");
                    }, 300);
                }, 300);
            },300);
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

</style>