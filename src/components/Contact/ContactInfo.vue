<template>
    <div class="container">
        <div class="inner-left">
            <h1>Contact</h1>
            <h2>Mail</h2>
            <p>24997@ma-web.nl</p>
            <h2>Telefoonnummer</h2>
            <p>0229-256789</p>
            <h2>Adres</h2>
            <p>Contactweg 36, 1014 AN Amsterdam</p>
        </div>
        <div class="inner-right">
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Media%20College&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
                <a href="https://www.pureblack.de"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container {
    width: 70%;
    height: 60vh;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.inner-left, .inner-right {
    position: relative;
    float: left;
    display: inline-block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 15px;
    min-height: 400px;
}
.inner-left {
    border-right: 2px solid #2c3e50;
}
.mapouter {
    position: absolute;
    text-align:right;
    height:90%;
    width:90%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.gmap_canvas {
    overflow:hidden;
    background:none!important;
    height:100%;
    width:100%;
}
h1 {
    font-size: calc(20px + 1.5vw);
    margin-bottom: 35px;
}

p {
    margin-bottom: 8%;
}
@media (max-width: 1294px) {
    .container {
        grid-template-columns: 1fr;
    }
    .mapouter {
        text-align: center;
    }
    .inner-left {
        border-right: 0;
    }
}

@media (max-width: 450px) {
    .container {
        width: 100%;
    }
}
</style>