<template>
    <div>
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
        ShowcaseDesc: String
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
        padding: 5% 0;
    }

    div:first-child {
        border-bottom: 1.5px solid #555;
        border-left: 1.5px solid #555;
        border-right: 1.5px solid #555;
    }

    .item-image {
        width: 100%;
        height: 60%;
        position: relative;
        background: blue;
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
        background: transparent;
        border: 2px solid #98ff98;
        color: black;
        font-size: 18px;
    }

    
</style>


