<template>
    <div class="wrapper">
        <div class="item-image"></div>
        <div class="item-content">
            <h2>{{ ShowcaseProduct }}</h2>
            <p>{{ ShowcaseDesc }}</p>
            <button>Bestel</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShowcaseItem",
    props: {
        ShowcaseProduct: String,
        ShowcaseDesc: String,
        ShowcaseImgSrc: String
    }
}
</script>

<style scoped>
    div {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    }

    .wrapper {
       border: 1.5px solid #555;
    }

    .item-image {
        width: 100%;
        height: 60%;
        position: relative;
       background: seagreen;
    }

    .item-content {
        width: 80%;
        position: relative;
        margin: 0 auto;
        text-align: center;
    }

    .item-content h2 {
        font-size: 34px;
    }

    .item-content p {
        font-size: 18px;
    }

    .item-content button {
         width: 80%;
        height: 45px;
        border: none;
        background: #98ff98;
        font-size: 18px;
        font-weight: bold;
        color: #2c3e50;
        border-radius: 5px;
    }

    @media (max-width: 550px) {
        div:first-child {
            border: none;
            border-bottom: 1.5px solid #555;
            border-top: 1.5px solid #555;
        }
    }

    
</style>


