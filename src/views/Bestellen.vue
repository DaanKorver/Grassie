<template>
    <div class="page">
        <!-- <h1>{{itemName}}</h1>
        <input type="text" v-model="textInput">{{textInput * price}} -->
        <div class="container">
            <div class="inner">
                <div class="inner-left">
                    <h1>{{itemName}}</h1>
                    <p>Aantal m<sup>2</sup></p>
                    <input id="inputPrice" type="number" v-model="textInput"/>
                    <p>{{price}} per m<sup>2</sup></p>
                </div>
                <div class="inner-right">
                    <div class="total">
                        <h1>Totaal</h1>
                        <p><strong>Aantal m<sup>2</sup>:</strong><br> {{textInput}}m<sup>2</sup></p>
                        <p><strong>Prijs:</strong><br> ${{textInput * price}}</p>
                        <p><strong>Verzendkosten:</strong><br> $6.95</p>
                        <p><strong>Totaal:<br></strong> ${{(textInput * price) + 6.95}}</p>
                        <router-link :to="{ name: 'bestellen', params: { itemName: item }}">Bestel</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "bestellen",
    data() {
        return {
            textInput: "0",
            price: 1.99,
            itemName: this.$route.params.itemName,
        }
    },
    mounted() {
        console.log(this.$route.params.itemName);
    }
}
</script>

<style scoped>

    .container {
        width: 80%;
        height: 80vh;
        position: relative;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .inner {
        width: 90%;
        height: 90%;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .inner-left, .inner-right {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .inner-left {
        border-right: 2px solid #2c3e50;
    }
    .inner-right {
        align-items: flex-start
    }
    input {
        padding: 7px 0;
        font-size: 15px;
        margin-top: 20px 0;
        border: 1.5px solid #2c3e50;
        outline: none;
        background: #f7f7f7;
    }

    .total {
        text-align: left;
        padding-left: 25px;
    }

    .total p {
        margin-bottom: 25px;
    }

        a {
        width: 100%;
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

    @media (max-width:675px) {
        .inner {
            grid-template-columns: 1fr;
        }
        .inner-left {
            border-right: none;
            border-bottom: 2px solid #2c3e50;
            padding-bottom: 40px;
        }
        .inner-right {
            align-items: center;
        }
        .total {
            width: 100%;
        }
        .total h1 {
            text-align: center;
        }        
    }

</style>