<template>
<div style="max-width:400px;margin-left:auto; margin-right:auto;">
    <div>
        <div style="display:flex; margin-left: 30px; margin-bottom: 20px;">
            <h1 style="font-family:GalanoGrotesque;">Productos</h1>
        </div>
        <div style="display: flex; align-items: center;justify-content: flex-end; margin: 0 5px; ">
            <input type="text" style="width: 99%; border: none; background: #e7e7e7; height: 35px; border-radius: 6px;">
            <span class="iconify" data-icon="oi:magnifying-glass" data-inline="false" style="position: absolute; z-index: 1; left: 320px;"></span>
        </div>
    </div>
    <div style="width:100%;">
        <div>
            <div style="background:#fff; display:flex; padding-bottom:10px; padding-left: 1rem; padding-right:2rem;">
                <p style="font-size:15px; margin:0; font-family:GalanoGrotesque;">Nombre</p>
                <p style="font-size:15px; font-family:GalanoGrotesque; margin:0px 0px 0px 100px;">Cod barras</p>
            </div>
            <router-link :to="{name: 'detalles'}">
            </router-link>
            <div v-for="productos in producto" style="background:#fff; display:flex; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); padding-left: 1rem; padding-right:2rem; margin-bottom:8px;">
                <p style="font-size:18px; ">{{productos.name}}</p>
                <p style="font-size:18px; margin-left: 30px; ">{{productos.cod}}</p>
            </div>

        </div>
    </div>
</div>
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
