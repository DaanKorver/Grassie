<template>
    <div class="wrapper">
        <div class="container container-left">
            <h1>Wij zijn wij?</h1>
            <p>Grassie is een bedrijf opgezet door de gebroeders Kuil. Het bedrijf is ontstaan in de jaren ’60 nadat er door lange droogte een tekort aan gras was. De gebroeders vonden een zeer efficiënte manier om gras te produceren zonder dat hier een grote mate van irrigatie toegepast diende te worden. Dit zorgde ervoor dat Grassie is gegroeid tot de multinational die het vandaag de dag is.</p>
            
            <h1>Oorsprong van het gras</h1>
            <p>Het gras wordt gekweekt in speciale kassen die voorzien zijn van verlichting met een hoge mate van UV straling. Doordat het gras continue wordt voorzien van belichting van de hoogste kwaliteit, kunnen wij u een product leveren waar u nog jaren van kunt genieten. De zaadjes waaruit het gras kiemt zijn afkomstig van een graslijn uit Azië genoemd Yeetes Grasses. Yeetes Grasses is zaad van het hoogste kwaliteit welke tevens wordt toegepast om de golfbanen voor de PGA golftour te voorzien van gras. </p>

            <h1>Grassoorten</h1>
            <p>Grassie kan u voorzien van diverse soorten gras afhankelijk van het doeleinde. Wij bieden voornamelijk de volgende grassoorten aan:
- Sportvelden gras
- Golfbaan gras
- Gras voor recreatieve doeleinde voor particulieren
- Festivalgras ( speciaal gras welke resistent is tegen massas dansende mensen en podia )
- Gras t.b.v. veehouderij / weilandgras
Tevens zijn wij in het bezit van een graslab waarin wij elke soort gras voor u kunnen kruizen voor de gewenste doeleinde. <br><br>Mocht u op zoek zijn naar kunstgras, laat u dan informeren naar onze vervanger voor kusntgras om dit milieuvervuilende product uit de wereld te helpen!</p>
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
    min-height: 80vh;
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
