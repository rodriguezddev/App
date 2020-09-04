<template>
<div>
    <div style=" margin-left: 30px; margin-bottom: 20px;">
        <h1 style="margin:0; font-family:GalanoGrotesque;">Envios</h1>
        <p style="margin:0">Seleccion una opcion para continuar</p>
    </div>
    <div style="display:flex; margin-bottom:20px;">
        <div @click="porEnviar()" style="border-bottom: solid 2px blue; width: 100px; text-align: center; margin-right:10px;">
            <p style="margin-left:5px; margin-top:5px; margin-bottom:0;">Por enivar</p>
        </div>
        <div @click="enCamino()" style=" width: 100px; text-align: center; margin-right:10px;">
            <p style="margin-top:0; margin-bottom:5px;">En camino</p>
        </div>
        <div @click="Enviado()" style=" width: 100px; text-align: center; margin-right:10px;">
            <p style="margin-top:0; margin-bottom:5px;">Enviados</p>
        </div>
    </div>
    <div style="max-width: 345px;
    margin-left: auto;
    margin-right: auto;">
        <div id="disUno" onclick="document.getElementById('id01').style.display='block'">
            <PorEnviar />
        </div>
        <div id="disDos" style="display:none" onclick="document.getElementById('id01').style.display='block'">
            <EnCamino />
        </div>
        <div id="disTres" style="display:none" onclick="document.getElementById('id01').style.display='block'">
            <Enviados />
        </div>
    </div>

    <div id="id01" style="padding-top: 402px;" class="w3-modal">
        <div style="margin:0; border-radius: 30px 30px 0px 0px; height: 400px;" class="w3-modal-content w3-animate-bottom w3-card-4">
            <header class="w3-container" style="text-align: center;">
                <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
                <h2 style="font-size: 18px; font-family:GalanoGrotesque">Envio</h2>
            </header>
            <div class="w3-container">
                <div style=" border-bottom: dashed 1px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin: 0 22px;">
                        <img src="@/assets/nes.png" style="width: 30%;" alt="">
                        <div>
                            <p style="margin:0; font-size: 12px;">Codigo</p>
                            <p style="margin:0">AKJLMB</p>
                        </div>
                    </div>
                </div>
                <div style=" border-bottom: dashed 1px;     padding: 15px 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin: 0 22px;">
                        <div>
                            <p style="margin:0;font-size: 12px;">Desde</p>
                            <p style="margin:0">LIM</p>
                            <p style="margin:0; font-size: 15px;">SUCURSAL</p>
                        </div>
                        <img src="@/assets/camion.png" style="width:15%" alt="">
                        <div>
                            <p style="margin:0;font-size: 12px;">Hasta</p>
                            <p style="margin:0">BEETHOVEN 432</p>
                            <p style="margin:0; font-size: 15px;">DIRECION</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p style="margin:0">Producto</p>
                        <p style="margin:0">Peluche rojo marca OSo</p>
                    </div>
                    <img src="@/assets/cod.jpg" style="width:100%" alt="">
                </div>
            </div>
            <footer style="width:100%; height:60px;">
                <button style="width:50%; border:none; height:60px">Enviado</button>
                <button style="width:50%; border:none; height:60px; background: linear-gradient(90deg, rgb(9, 18, 54) 45.4106%, rgb(9, 18, 54) 45.4106%); color:#fff">En camino</button>
            </footer>
        </div>
    </div>
</div>
</template>

<script>
import PorEnviar from './PorEnviar.vue'
import EnCamino from './EnCamino.vue'
import Enviados from './Enviados.vue'

export default {
    name: 'Envios',
    components: {
        PorEnviar,
        EnCamino,
        Enviados
    },
    data() {
        return {

        }
    },
    methods: {
        porEnviar() {
            document.getElementById('disUno').style.display = 'block'
            document.getElementById('disDos').style.display = 'none'
            document.getElementById('disTres').style.display = 'none'
            console.log('esto funciona')
        },
        enCamino() {
            document.getElementById('disUno').style.display = 'none'
            document.getElementById('disDos').style.display = 'block'
            document.getElementById('disTres').style.display = 'none'
            console.log('esto funciona')
        },
        Enviado() {
            document.getElementById('disUno').style.display = 'none'
            document.getElementById('disDos').style.display = 'none'
            document.getElementById('disTres').style.display = 'block'
            console.log('esto funciona')
        },
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
