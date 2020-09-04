<template>
<div>
    <div style="margin-top:3rem; max-width: 330px; margin-left: auto; margin-right: auto;">
        <h1 style="font-family: GalanoGrotesque; margin:0; ">Gestión stock</h1>
        <div style="margin:2rem 0rem;">
            <p style="margin: 0px 0px 10px 0px; font-size:22px; font-family: HelveticaNeue; ">Almacenes</p>
            <div v-for="almacenes of almacen" style="dispplay:flex;  padding-left:10px; padding-top:1rem; padding-bottom:1rem; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); background:#fff;  border-radius: 8px; display:flex; justify-content: space-between; ">
                <div style="display:flex; flex-direction: column;  justify-content: flex-end; height: 120px;">
                    <h1 style="font-family: GalanoGrotesque; color: #e7e7e7; font-size: 45px; margin: 0;">Almacén</h1>
                    <div style="margin-top: -20px; line-height: 0.5; color: rgb(82, 85, 85);">
                        <h2 style="font-family: HelveticaNeue; font-size: 26px">{{almacenes.name}}</h2>
                        <p style="font-family: HelveticaNeue; font-size: 15.5px; margin: 0;">tienes <span style="color:blue; ">{{almacenes.cantidad}}</span> productos en stock</p>
                    </div>
                </div>
                <!--<img src="Danielasvg/Sintítulo.png" style="width: 5%; margin-right: 10px;" alt="">-->
            </div>
        </div>
        <div style="margin:2rem 0rem;">
            <p style="margin: 0px 0px 10px 0px; font-size:22px; font-family: HelveticaNeue; ">Sucursales</p>
            <div class="swiper-slide" style="height: 200px;display:flex; justify-content: space-between; align-items: flex-end; background:#fff;  border-radius: 8px;    margin-right: 12px; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75);" v-for="sucursales of sucursal">
                <!--<img src="Danielasvg/property.svg" width="20%" alt="">-->
                <div style="flex-basis:calc(100% - 3rem); line-height: 0.5; text-align: start;">
                    <p style="font-size: 15.5px; margin: 10px; font-family: HelveticaNeue;">{{sucursales.cantidad}} ventas este mes</p>
                    <h4 style="font-weight: bold;  font-family: HelveticaNeue; margin: 10px; font-size: 26px;">{{sucursales.name}}</h4>
                    <h6 style="font-family: GalanoGrotesque; margin: 10px; font-size: 15.5px; color: blue;">3H4DF6</h6>
                </div>
            </div>
        </div>
        <!-- Initialize Swiper -->
        <div style="cursor:pointer; display: flex; align-items: flex-end; ">
            <div style="width: 100%; background: linear-gradient(90deg, rgb(9, 18, 54) 45.4106%, rgb(9, 18, 54) 45.4106%); color: #ffffff; font-family: Helveltica; padding: 10px; margin-top: -4px;">
                <div style="margin-top: -14px; justify-content: flex-end; display: flex;">
                    <p style="border-radius: 6px; padding: 5px; color:#000; background-color:#fff; margin:0; font-family: GalanoGrotesque; text-align: end;">Proximamente</p>
                </div>
                <h1 style="margin:0 0 0.67em 0; font-family: HelveticaNeue; font-family: GalanoGrotesque;font-size: 20px;">Transferir</h1>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

    name: 'GestionStock',
    data() {
        return {
            almacen: [{
                    name: 'Todos tus productos',
                    cantidad: 324
                },
                {
                    name: 'Todos tus productos',
                    cantidad: 324
                }
            ],
            sucursal: [{
                    name: 'Miraflores 312',
                    cantidad: 324
                },
                {
                    name: 'Miraflores 312',
                    cantidad: 324
                }
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

@font-face {
    font-family: 'HelveticaNeue';
    src: url('../HelveticaNeue-Light.woff2') format('woff2'),
        url('../HelveticaNeue-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
</style>
