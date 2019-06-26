<template>
    <div class="page">
        <div class="confirm">
            <img src="@/assets/check.gif" alt="gif">
            <h2>Bestelling geslaagd</h2>
            <router-link to="/">Ga terug</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "geslaagd"
}
</script>

<style scoped>
    .confirm {
        width: 100%;
        max-width: 500px;
        height: 500px;
        margin: 0 auto;
        text-align: center;
    }

    img {
        width: 100%;
    }

    a {
        width: 50%;
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
        margin: 0 auto;
    }
</style>