<template>
    <div class="wrapper">
        <div class="item-image"  :class="classname"></div>
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
    // props: {
    //     ShowcaseProduct: String,
    //     ShowcaseDesc: String,
    //     ShowcaseImgSrc: String
    // },
    props: ['ShowcaseProduct','ShowcaseDesc','classname'],
    computed: {
    },
    methods: {
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
        padding-top: 10px;
    }

    .wrapper {
       background-color: #f7f7f7;
       box-shadow: 0px 3px 5px 3px rgba(0,0,0,.5);
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
      background-position: center;
      background-position: center bottom;
    }
    .img-3{
      background-image: url("../../assets/grass-product-3.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      background-position: center bottom;
    }

    .item-image {
        width: 100%;
        height: 60%;
        position: relative;
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
        .wrapper {
            box-shadow: none;
        }
    }

    
</style>


