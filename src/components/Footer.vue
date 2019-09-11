<template>
    <div class="wrapper">
        <div class="grass-container">
            <div class="grass"></div>
        </div>
        <div class="footer-container">
            <div class="col">
                <h1>Navigatie</h1>
                <br>
                <router-link to="/" title="Home" class="link">Home</router-link>
                <router-link to="/products" title="Producten" class="link">Producten</router-link>
                <router-link to="/about" title="Over ons" class="link">Over ons</router-link>
                <router-link to="/contact" title="Contact" class="link">Contact</router-link>
            </div>
            <div class="col">
                <h1>Grassie</h1>
                <br>
                <p class="link">Services</p>
                <p class="link">FAQ</p>
                <p class="link">Privacy Policy</p>
                <p class="link">Servicevoorwaarden</p>
            </div>
            <div class="col">
                <h1>Landen</h1>
                <br>
                <p class="link">Nederland</p>
                <p class="link">Belgie</p>
                <p class="link">Luxenburg</p>
                <p class="link">Duitsland</p>
            </div>
            <div class="col">
                <h1>Social Media</h1>
                <br>
                <p class="link">Facebook</p>
                <p class="link">Instagram</p>
                <p class="link">Twitter</p>
                <p class="copyright">Copyright © 2019, All rights reserved</p>
            </div>
        </div>
    </div>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

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
        min-height: 200px;
    }
    .col h1 {
        font-size: 25px;
    }
    .link {
        font-size: 20px;
        line-height: 35px;
        margin-left: 7px;
        display: block;
        text-decoration: none;
        color: #2c3e50;
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


