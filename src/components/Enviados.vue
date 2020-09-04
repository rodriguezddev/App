<template>
<div>
    <div v-for="Enviados in Enviado" style="border-left: solid blue; background:#fff; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); padding-left: 1rem; padding-right:2rem; margin-bottom:8px; height: 70px; display: flex; flex-direction: column; justify-content: center;">
        <h5 style="margin: 0;font-size: 18px; font-family:HelveticaNeue">{{Enviados.name}}</h5>
        <div style="display:flex;">
            <p style="margin:0">{{Enviados.agencia}}</p>
            <p style="margin:0">{{Enviados.direccion}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Enviados',
    data() {
        return {
            Enviado: [{
                name: 'Gonzalo Meza',
                direccion: 'calle 213 Manzana cinco',
                agencia: 'Glovo'
            }]
        }

    }

}
</script>
