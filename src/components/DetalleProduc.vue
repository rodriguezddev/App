<template>
<div>
    <div>
        <div style="display:flex; justify-content:space-between;">
            <img src="" alt="">

            <div style="display:flex; justify-content:flex-end;">
                <img src="" alt="">
                <img src="" alt="">
            </div>
        </div>
    </div>
    <div>
        <div v-for="detalles in detalle" style="display:flex; flex-direction:column;">
            <h1 style="margin:0; font-family:GalanoGrotesque;">{{detalles.name}}</h1>
            <p style="margin-top:-1px; color:blue;">{{detalles.cod}}</p>
        </div>
    </div>
    <div>
        <div style="display: flex; justify-content: center; align-items: center">
            <div style=" -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); width: 40%;
                        display: flex; justify-content: center; align-items: center; height: 200px;">
                <img src="@/assets/botella.webp" style="width: 100%; height: 160px;" alt="">
            </div>
            <div style="background-color:#ffffff; display: flex;flex-direction: column; justify-content: space-between; height: 250px; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); padding: 20px;">
                <div style="margin-top: -5px">
                    <h1 style="color:#e7e7e7; font-size: 45px; margin:0; font-family:GalanoGrotesque;">Info</h1>
                    <p style="margin:0">Marca: Cola-cola</p>
                    <p style="margin:0">Stok:453 productos</p>
                    <p style="margin:0">Tamaño: grande</p>
                </div>
                <div>
                    <p style="margin:0; color:blue; font-family:GalanoGrotesque;">K54J90</p>
                    <p style="margin:0">959 ventas</p>
                </div>
            </div>
        </div>
    </div>
    <div>
        <p style="font-size:HelveticaNeue; margin: 0; font-size: 28px;">Ventas del producto</p>
        <div style="display:flex; flex-direction:column;">
            <div style="display:flex;padding-bottom:10px; padding-left: 1rem; padding-right:2rem;">
                <p style="font-family:GalanoGrotesque; margin:0">Precio</p>
                <p style="font-family:GalanoGrotesque; margin:0px 0px 0px 50px;">Fecha</p>
            </div>
            <div v-for="ventasProds in ventasProd" style="display:flex; padding-left: 1rem; padding-right:2rem; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75);">
                <p style="font-size:18px;">S/.{{ventasProds.precio}}</p>
                <p style="font-size:18px; margin-left:50px;">{{ventasProds.fecha}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'DetalleProduc',
    data() {
        return {
            detalle: [{
                name: 'Botella de agua',
                cod: '9423246456300'
            }],
            ventasProd: [{
                    precio: 50,
                    fecha: '12/15/04'
                },
                {
                    precio: 50,
                    fecha: '12/15/04'
                },
                {
                    precio: 50,
                    fecha: '12/15/04'
                },
                {
                    precio: 50,
                    fecha: '12/15/04'
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

@font-face {
    font-family: 'HelveticaNeue';
    src: url('../HelveticaNeue-Light.woff2') format('woff2'),
        url('../HelveticaNeue-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
</style>
