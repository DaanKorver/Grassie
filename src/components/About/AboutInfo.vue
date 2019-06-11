<template>
    <div class="wrapper">
        <div class="container container-left">
            <h1>First Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam veniam accusantium delectus error doloremque quo aspernatur modi est quod ut laudantium, suscipit ullam voluptates qui provident dicta eaque repudiandae. Impedit libero odio possimus consequuntur fuga enim rerum dolore, consequatur maiores!</p>
            
            <h1>Second Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam veniam accusantium delectus error doloremque quo aspernatur modi est quod ut laudantium, suscipit ullam voluptates qui provident dicta eaque repudiandae. Impedit libero odio possimus consequuntur fuga enim rerum dolore, consequatur maiores!</p>

            <h1>Third Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam veniam accusantium delectus error doloremque quo aspernatur modi est quod ut laudantium, suscipit ullam voluptates qui provident dicta eaque repudiandae. Impedit libero odio possimus consequuntur fuga enim rerum dolore, consequatur maiores!</p>
        </div>
        <div class="container container-right">
            <div class="about-image"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: auto;
    position: relative;
    display: grid;
    grid-template-columns: .7fr 1fr;
}
.container {
    position: relative;
    width: 100%;
    height: auto;
    padding: 10%;
    box-sizing: border-box;
    padding-bottom: 0;
}
.container-left {
    float: left;
}
.container-right {
    float: right;
}
.about-image {
    width: 100%;
    height: 90%;
    background-image: url('../../assets/grass-header.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
p {
    margin-bottom: 18px;
}

@media (max-width: 880px) {
    .wrapper {
        grid-template-columns: 1fr;
    }
    .container-right {
        padding: 5%;
    }
    .container-left {
        height: auto;
    }
    .container-right {
        height: 40vh;
        padding: 2%;
    }
}

</style>
