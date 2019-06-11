<template>
    <div class="item">
        <div class="item-image"></div>
        <h1>{{itemTitle}}</h1>
        <p>{{itemDesc}}</p>
        <button>Bestel</button>
    </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: {
        itemTitle: String,
        itemDesc: String,
        itemImg: String
    }
}
</script>

<style scoped>
    .item {
        width: 100%;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
        background: white;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    }
    .item-image {
        width: 95%;
        height: 50%;
        background-color: seagreen;
    }
    button {
        width: 80%;
        height: 45px;
        border: none;
        background: #98ff98;
        font-size: 18px;
        font-weight: bold;
        color: #2c3e50;
        border-radius: 5px;
    }
</style>