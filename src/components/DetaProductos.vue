<template>
<div style="max-width:350px;margin-left:auto; margin-right:auto;">
    <router-link to='/Venta'>
        <span class="iconify" data-icon="ic:round-arrow-back-ios" data-inline="false" style="width:10%; margin-bottom: -25px;"></span>
    </router-link>
    <p style="text-align:center; margin:0; font-size: 17px; font-family:HelveticaNeue;">Productos de las venta</p>
    <div style="margin-top: 5rem;">
        <div style="display:flex; justify-content:space-between; padding: 0 10px;">
            <p style="margin:0; font-family: GalanoGrotesque;">Producto</p>
            <div style="display:flex; justify-content:space-between;">
                <p style="margin:0; font-family: GalanoGrotesque; margin-right: 55px;">Precio</p>
                <p style="margin:0; font-family: GalanoGrotesque;">Foto</p>
            </div>
        </div>
        <div style="background-color: rgb(245, 244, 244);">
            <div v-for="productos in producto" style="margin-top: 10px; background-color: #fff; padding: 0 10px; display:flex; justify-content:space-between; height: 70px; align-items: center; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75);">
                <p style="margin:0; font-family: HelveticaNeue; flex-basis:calc(70% - 1rem);">(1) {{productos.name}}</p>
                <div style="display:flex; justify-content:space-between; align-items: center; flex-basis:calc(70% - 1rem);">
                    <p style=" font-family: HelveticaNeue; margin: 0px 0px 0px 30px; font-size: 17.5px;">S/.{{productos.precio}}</p>
                    <img src="@/assets/botella.webp" style="width: 25%;" alt="">
                </div>
            </div>
            <div style="background-color: #fff; padding: 10px;
    margin-top: 10px; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75);">
                <div>
                    <div style="display:flex; justify-content:space-between; padding-top: 30px; padding-bottom: 20px;">
                        <p style="margin:0; font-family:GalanoGrotesque">Descuento</p>
                        <p style="margin:0; font-family:HelveticaNeue;">20.60</p>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding-bottom: 20px;">
                        <p style="margin:0; font-family:GalanoGrotesque">Impuestos</p>
                        <p style="margin:0; font-family:HelveticaNeue;">20.60</p>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding-bottom: 20px;">
                        <p style="margin:0; font-family:GalanoGrotesque">Total</p>
                        <p style="margin:0; font-family:HelveticaNeue;">20.60</p>
                    </div>
                </div>

                <div style="display:flex; justify-content:space-between; align-items: center; padding: 10px;">
                    <h1 style="font-size:30px; font-family:GalanoGrotesque">Almacen 4</h1>
                    <p style="margin:0; font-family:HelveticaNeue;    font-size: 17px;">Boleta</p>
                </div>
            </div>
            <div style="cursor:pointer; display: flex; align-items: flex-end; ">
                <div style="width: 100%; background: linear-gradient(90deg, rgb(9, 18, 54) 45.4106%, rgb(9, 18, 54) 45.4106%); color: #ffffff; display:flex; align-items:center; padding: 10px; margin-top: -4px;justify-content: space-between;">
                    <h1 style="margin:0; font-family: GalanoGrotesque; font-family: GalanoGrotesque;font-size: 20px;">Total</h1>
                    <p style=" color:#fff;  margin:0;  font-family: HelveticaNeue; font-size: 22px;">S/.87.90</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'DetaProductos',
    data() {
        return {
            producto: [{
                    name: 'Inka cola 550ML',
                    precio: 2.50,
                    foto: ''
                },
                {
                    name: 'Inka cola 550ML',
                    precio: 2.50,
                    foto: ''
                },
                {
                    name: 'Inka cola 550ML',
                    precio: 2.50,
                    foto: ''
                },
            ]
        }
    }
}
</script>
