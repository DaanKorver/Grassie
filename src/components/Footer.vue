<template>
    <div class="wrapper">
        <div class="grass-container">
            <div class="grass"></div>
        </div>
        <div class="footer-container">
            <div class="col">
                <h1>Subject 1</h1>
                <br>
                <p class="link">Link 1</p>
                <p class="link">Link 2</p>
                <p class="link">Link 3</p>
                <p class="link">Link 4</p>
            </div>
            <div class="col">
                <h1>Subject 2</h1>
                <br>
                <p class="link">Link 1</p>
                <p class="link">Link 2</p>
                <p class="link">Link 3</p>
                <p class="link">Link 4</p>
            </div>
            <div class="col">
                <h1>Subject 3</h1>
                <br>
                <p class="link">Link 1</p>
                <p class="link">Link 2</p>
                <p class="link">Link 3</p>
                <p class="link">Link 4</p>
            </div>
            <div class="col">
                <h1>Subject 4</h1>
                <br>
                <p class="copyright">Copyright © 2019, All rights reserved</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    .wrapper {
        width: 100vw;
        height: auto;
    }
    .grass-container {
        width: 100%;
        height: 35vh;
    }
    .footer-container {
        width: 100%;
        height: auto;
        background-color: white;
        border-top: 2px solid #2c3e50;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .grass {
        background-image: url('../assets/grass-vector.png');
        width: 100%;
        height: 100%;
        background-position: bottom center;
        background-size: contain;
        background-repeat: repeat-x;
        position: relative;
    }
    .col {
        width: 100%;
        height: 40vh;
        min-width: 250px;
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        padding: 10px;
    }
    .col h1 {
        font-size: 25px;
    }
    .link {
        font-size: 20px;
        line-height: 35px;
        margin-left: 7px;
    }
    .copyright {
        position: absolute;
        bottom: 3px;
        right: 15px;
    }

    @media (max-width: 1000px) {
        .footer-container {
            grid-template-columns: 1fr 1fr;
        }
    }
        @media (max-width: 525px) {
        .footer-container {
            grid-template-columns: 1fr;
        }
    }
</style>


