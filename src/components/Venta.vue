<template>
<div style="max-width:350px;margin-left:auto; margin-top:40px; margin-right:auto;">
    <h1 style="font-family:GalanoGrotesque">Ventas</h1>
    <div style="display: flex; align-items: center;justify-content: flex-end;">
        <input type="text" style="width: 99%; border: none; background: #e7e7e7; height: 35px; border-radius: 6px;">
        <span class="iconify" data-icon="oi:magnifying-glass" data-inline="false" style="position: absolute; z-index: 1; left: 320px;"></span>
    </div>
    <div style=" height: 40px;width: 100%; margin-left: 10px; display: flex; align-items: center; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75);">
        <div style="margin-right:60px;display:flex; justify-content:space-between; align-items: center; width: 100%;">
            <p style="margin:0; font-family:GalanoGrotesque">Id</p>
            <p style="margin:0; font-family:GalanoGrotesque">Monto</p>
            <p style="margin:0; font-family:GalanoGrotesque">Fecha</p>
        </div>
    </div>
    <div style="background-color: rgb(245, 244, 244);">
        <div v-for="ventas in venta" style="width:100%; height:70px; background: #fff; margin-top: 10px; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75);     border-radius: 5px;">
            <router-link to='/Venta/Productos'>
                <div style="height:70px;"></div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Venta',
    data() {
        return {
            venta: [{
                    id: 1,
                    monto: 123.12,
                    fecha: '12/02/20'
                },
                {
                    id: 1,
                    monto: 123.12,
                    fecha: '12/02/20'
                },
                {
                    id: 1,
                    monto: 123.12,
                    fecha: '12/02/20'
                },
                {
                    id: 1,
                    monto: 123.12,
                    fecha: '12/02/20'
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
