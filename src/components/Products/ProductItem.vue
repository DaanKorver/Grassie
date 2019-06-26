<template>
    <div class="item">
        <div class="item-image" :class="classname" ></div>
        <h1>{{itemTitle}}</h1>
        <p>{{itemDesc}}</p>
        <router-link :to="{ name: 'bestellen', params: { itemName: item }}">Bestel</router-link>
    </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: {
        itemTitle: String,
        itemDesc: String,
        classname: String,
        item: String
    }
}
</script>

<style scoped>
    .item {
        width: 100%;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    }
    .item-image {
        width: 95%;
        height: 50%;
    }
    a {
        width: 80%;
        height: 45px;
        border: none;
        background-color: #98ff98;
        font-size: 18px;
        font-weight: bold;
        color: #2c3e50;
        border-radius: 5px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .img-1{
        background-image: url("../../assets/grass-product-1.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center bottom;
    }
    .img-2{
        background-image: url("../../assets/grass-product-2.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center bottom;
    }
    .img-3{
        background-image: url("../../assets/grass-product-3.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center bottom;
    }
    .img-4{
        background-image: url("../../assets/grass-product-1.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center bottom;
    }
</style>