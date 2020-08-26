<template>
<ion-app style="max-width:400px;margin-left:auto; margin-right:auto;">
    <ion-grid>
        <ion-row>
            <h1 style="font-family:GalanoGrotesque;">Productos</h1>
            <img src="" alt="">
        </ion-row>
    </ion-grid>
    <ion-tabs>
    </ion-tabs>
    <ion-grid style="width:100%;">
        <ion-col>
            <ion-row style="background:#fff; padding-bottom:10px; padding-left: 1rem; padding-right:2rem;">
                <p style="font-size:15px; margin:0; font-family:GalanoGrotesque;">Nombre</p>
                <p style="font-size:15px; font-family:GalanoGrotesque; margin:0px 0px 0px 100px;">Cod barras</p>
            </ion-row>
            <ion-row v-for="productos in producto" style="background:#fff; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); padding-left: 1rem; padding-right:2rem; margin-bottom:8px;">
                <p style="font-size:18px; ">{{productos.name}}</p>
                <p style="font-size:18px; margin-left: 30px; ">{{productos.cod}}</p>
            </ion-row>
        </ion-col>
    </ion-grid>
</ion-app>
</template>

<script>
export default {
    name: 'Producto',
    data() {
        return {
            producto: [{
                    name: 'Botella de agua',
                    cod: 97836927864
                },
                {
                    name: 'Botella de agua',
                    cod: 97836927864
                },
                {
                    name: 'Botella de agua',
                    cod: 97836927864
                },
                {
                    name: 'Botella de agua',
                    cod: 97836927864
                },
            ]
        }
    }

}
</script>

<style>
@font-face {
    font-family: 'GalanoGrotesque';
    src: url('../GalanoGrotesque-Bold.woff') format('woff2'),
        url('../GalanoGrotesque-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
</style>
