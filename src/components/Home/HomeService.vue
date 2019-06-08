<template>
    <div class="wrapper">
        <div class="container-left">
            <div class="image"></div>
        </div>
        <div class="container-right">
            <h1>Wij leggen het gras!</h1>
            <h2>Zelf niet zo technisch?<br>Onze werknemers staan klaar voor u<br> om het gras te leggen!</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeService"
}
</script>

<script>
export default {
    
}
</script>

<style scoped>
    .wrapper {
        width: 100vw;
        height: 65vh;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .container-left, .container-right {
        width: 100%;
        height: 100%;
        max-height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }
    .container-left {
        float: left;
    }
    .container-right {
        float: right;
    }
    .container-right h1 {
        font-size: calc(20px + 2vw);
        margin-bottom: 5%;
    }
    .container-right h2 {
        white-space: nowrap;
        font-size: calc(10px + 1.5vw);
    }
    .image {
        background-image: url('../../assets/grass-roll.png');
        width: 100%;
        height: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    @media (max-width: 920px) {
        .container-right h1 {
            font-size: calc(15px + 2vw);
        }
        .container-right h2 {
            font-size: calc(7px + 1.5vw);
        }
    }
    @media (max-width: 660px) {
        .wrapper {
            grid-template-columns: 1fr;
        }
        .container-right h1 {
             font-size: calc(20px + 2vw);
        }
        .container-right h2 {
            white-space: nowrap;
            font-size: calc(10px + 1.5vw);
        }
    }

</style>