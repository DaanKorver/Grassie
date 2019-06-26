<template>
    <div class="page">
        <div class="container">
            <!-- <div class="inner">
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
            </div> -->
            <h1>{{itemName}}</h1>
            <form>
                <label for="name">Naam</label>
                <input type="text" name="name" v-model="form.name" required>
                <label for="surname">Achternaam</label>
                <input type="text" name="surname" v-model="form.surname" required>
                <label for="street">Straat</label>
                <input type="text" name="street" v-model="form.street" required>
                <label for="number">Huisnummer</label>
                <input type="number" name="number" v-model="form.housenumber" required>
                <label for="zip">Postcode</label>
                <input type="text" name="zip" v-model="form.zip" required>
                <label for="city">Plaats</label>
                <input type="text" name="city" v-model="form.city" required>
                <hr>
                <label for="squarem">Aantal m<sup>2</sup></label>
                <input id="inputPrice" type="number" v-model="textInput" required/>
                <p>1.99 per m<sup>2</sup></p>
                <hr>
                <h1>Totaal</h1>
                <p>x - {{itemName}} {{textInput}} m<sup>2</sup> - ${{textInput * price}}</p>
                <p>x - Verzendkosten - $ 6.95</p>
                <h3>Totaal: {{(textInput * price) + 6.95}}</h3>
                <hr>
                <input type="submit" @click.stop.prevent="submit()">
            </form>
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
            form: {
                name: '',
                surname: '',
                street: '',
                housenumber: 0,
                zip: '',
                city: ''
            }
        }
    },
    methods: {
        submit() {
            this.$router.push({name: "geslaagd"});
        }
    }
}
</script>

<style scoped>

    .container {
        width: 100%;
        max-width: 800px;
        height: auto;
        position: relative;
        margin: 0 auto;
        box-sizing: border-box;
        padding-left: 30px;
        padding-bottom: 30px;
        padding-right: 30px;
    }

    .container h1 {
        text-align: center;
    }

    input {
        display: block;
        min-height: 36px;
        padding: 8px 12px;
        width: calc(100%);
        margin-top: 5px;
        background: #fff;
        border: 1px solid #d9d9d9;
        border-top: 1px solid #c0c0c0;
        box-sizing: border-box;
        border-radius: 1px;
        font-size: 15px;
        color: #404040;
        outline: none;
    }

    hr {
        width: 100%;
        margin: 30px auto;
        outline: none;
        border: 0;
        background: #2c3e50;
        height: 2px;
    }

    form p:first-of-type {
        font-size: 12px;
    }

    input[type="submit"] {
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

</style>