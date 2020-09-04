<template>
<div>
    <div v-for="pEnviars in pEnviar" style="border-left: solid blue; background:#fff; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); padding-left: 1rem; padding-right:2rem; margin-bottom:8px; height: 70px; display: flex; flex-direction: column; justify-content: center;">
        <h5 style="margin: 0;font-size: 18px; font-family:HelveticaNeue">{{pEnviars.name}}</h5>
        <div style="display:flex;">
            <p style="margin:0">{{pEnviars.agencia}}</p>
            <p style="margin:0">{{pEnviars.direccion}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'PorEnviar',
    data() {
        return {
            pEnviar: [{
                name: 'Gonzalo Meza',
                direccion: 'calle 213 Manzana cinco',
                agencia: 'Glovo'
            }]
        }

    }

}
</script>

<style>
@font-face {
    font-family: 'HelveticaNeue';
    src: url('../HelveticaNeue-Light.woff2') format('woff2'),
        url('../HelveticaNeue-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
</style>
