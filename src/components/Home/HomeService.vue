<template>
    <div class="wrapper">
        <div class="container-left">

        </div>
        <div class="container-right">
            <h1>Wij leggen het gras!</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeService"
}
</script>

<script>
export default {
    
}
</script>

<style scoped>
    .wrapper {
        width: 100vw;
        height: 80vh;
        position: relative;
    }
    .container-left, .container-right {
        width: 50%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .container-left {
        float: left;
        background: red;
    }
    .container-right {
        float: right;
        background: green;
    }
    .container-right h1 {
        font-size: calc(20px + 2vw);
    }
</style>