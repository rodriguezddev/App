<template>
<div style="max-width:350px;margin-left:auto; margin-top:20px; margin-right:auto;">
    <div>
        <div style="margin-top:20px; display:flex; flex-direction:column;">
            <div style="display:flex;">
                <div style="display:flex; flex-direction: column;">
                    <h1 style="margin:0; font-size:33px; font-family:GalanoGrotesque;">{{msg}}.</h1>
                    <p style="margin-bottom:0; margin-top:-6px">{{sub}}</p>
                </div>
                <img src="../assets/emoji.jpg" alt style="width:25%; margin-right:19rpx;">
            </div>

            <div style="display:flex; justify-content:space-between;">
                <div style="display:flex; flex-direction:column;">
                    <h2 style="margion:0; color:blue; font-size:25px; font-family:GalanoGrotesque;">S/.{{ventas}}</h2>
                    <p style="margin-top:-20px; color:#7e7e7e">Total ventas</p>
                </div>
                <div style="display:flex; flex-direction:column;">
                    <h2 style="margion:0; color:blue; font-size:25px; font-family:GalanoGrotesque;">S/.{{utilidad}}</h2>
                    <p style="margin-top:-20px; color:#7e7e7e">Utilidad mensual</p>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div style="display:flex; flex-wrap:wrap;">
            <div v-for="modulos in modulo" style="flex-basis: calc(50% - 1rem); background:#fff; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); height:50vw;  margin-top:1rem; margin-left:1rem; border-radius:10px; padding:1rem; display:flex; flex-direction:column; justify-content:space-between;">
                <router-link :to='modulos.ruta' style="color:#7e7e7e">
                    <div style="display:flex; justify-content:flex-end;">
                        <svg id="Capa_1" style="width:25px; fill: blue; background-color:#95dbf085; padding: 10px;height: 20px; border-radius:100px" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <g>
                                    <path d="m39.825 237.236h32.325c4.142 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.358-7.5-7.5-7.5h-32.325c-4.142 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.358 7.5 7.5 7.5zm7.5-62.631h17.325v47.63h-17.325z"></path>
                                    <path d="m32.325 324.691c0 4.142 3.358 7.5 7.5 7.5h32.325c4.142 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.358-7.5-7.5-7.5h-32.325c-4.142 0-7.5 3.358-7.5 7.5zm15-55.13h17.325v47.63h-17.325z"></path>
                                    <path d="m32.325 472.175c0 4.142 3.358 7.5 7.5 7.5h32.325c4.142 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.358-7.5-7.5-7.5h-32.325c-4.142 0-7.5 3.358-7.5 7.5zm15-55.13h17.325v47.63h-17.325z"></path>
                                    <path d="m504.5 159c4.143 0 7.5-3.358 7.5-7.5v-40.963c0-4.142-3.357-7.5-7.5-7.5h-89.48v-55.712h2.606c4.143 0 7.5-3.358 7.5-7.5v-32.325c0-4.142-3.357-7.5-7.5-7.5h-323.252c-4.142 0-7.5 3.358-7.5 7.5v32.325c0 4.142 3.358 7.5 7.5 7.5h2.606v55.711h-89.48c-4.142 0-7.5 3.358-7.5 7.5v40.964c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-33.463h81.98v231.479h-2.606c-4.142 0-7.5 3.358-7.5 7.5v32.325c0 4.142 3.358 7.5 7.5 7.5h2.606v100.159h-81.98v-310.444c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v317.944c0 4.142 3.358 7.5 7.5 7.5h497c4.143 0 7.5-3.358 7.5-7.5v-317.944c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v310.444h-81.98v-100.159h2.606c4.143 0 7.5-3.358 7.5-7.5v-32.325c0-4.142-3.357-7.5-7.5-7.5h-2.606v-231.479h81.98v33.463c0 4.142 3.357 7.5 7.5 7.5zm-94.374 205.516v17.325h-308.252v-17.325zm-161.626 132.484h-25.407v-67.833h25.407zm15 0v-67.833h25.406v67.833zm136.52 0h-96.113v-75.333c0-4.142-3.357-7.5-7.5-7.5h-80.813c-4.142 0-7.5 3.358-7.5 7.5v75.333h-96.114v-100.159h288.04zm-288.04-147.484v-302.191h231.143c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-241.249v-17.325h308.252v17.325h-31.947c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h21.841v302.191z"></path>
                                    <path d="m169.126 64.65h-32.325c-4.142 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.358 7.5 7.5 7.5h32.325c4.142 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.358-7.5-7.5-7.5zm-7.5 62.63h-17.325v-47.63h17.325z"></path>
                                    <path d="m237.817 64.65h-32.325c-4.142 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.358 7.5 7.5 7.5h32.325c4.142 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.358-7.5-7.5-7.5zm-7.5 62.63h-17.325v-47.63h17.325z"></path>
                                    <path d="m306.508 64.65h-32.325c-4.143 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.357 7.5 7.5 7.5h32.325c4.143 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.358-7.5-7.5-7.5zm-7.5 62.63h-17.325v-47.63h17.325z"></path>
                                    <path d="m375.199 64.65h-32.325c-4.143 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.357 7.5 7.5 7.5h32.325c4.143 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.357-7.5-7.5-7.5zm-7.5 62.63h-17.325v-47.63h17.325z"></path>
                                    <path d="m169.126 159.605h-32.325c-4.142 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.358 7.5 7.5 7.5h32.325c4.142 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.358-7.5-7.5-7.5zm-7.5 62.631h-17.325v-47.63h17.325z"></path>
                                    <path d="m237.817 159.605h-32.325c-4.142 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.358 7.5 7.5 7.5h32.325c4.142 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.358-7.5-7.5-7.5zm-7.5 62.631h-17.325v-47.63h17.325z"></path>
                                    <path d="m306.508 159.605h-32.325c-4.143 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.357 7.5 7.5 7.5h32.325c4.143 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.358-7.5-7.5-7.5zm-7.5 62.631h-17.325v-47.63h17.325z"></path>
                                    <path d="m375.199 159.605h-32.325c-4.143 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.357 7.5 7.5 7.5h32.325c4.143 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.357-7.5-7.5-7.5zm-7.5 62.631h-17.325v-47.63h17.325z"></path>
                                    <path d="m169.126 254.561h-32.325c-4.142 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.358 7.5 7.5 7.5h32.325c4.142 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.358-7.5-7.5-7.5zm-7.5 62.63h-17.325v-47.63h17.325z"></path>
                                    <path d="m237.817 254.561h-32.325c-4.142 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.358 7.5 7.5 7.5h32.325c4.142 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.358-7.5-7.5-7.5zm-7.5 62.63h-17.325v-47.63h17.325z"></path>
                                    <path d="m306.508 254.561h-32.325c-4.143 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.357 7.5 7.5 7.5h32.325c4.143 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.358-7.5-7.5-7.5zm-7.5 62.63h-17.325v-47.63h17.325z"></path>
                                    <path d="m375.199 254.561h-32.325c-4.143 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.357 7.5 7.5 7.5h32.325c4.143 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.357-7.5-7.5-7.5zm-7.5 62.63h-17.325v-47.63h17.325z"></path>
                                    <path d="m136.801 479.675h46.467c4.142 0 7.5-3.358 7.5-7.5v-50.508c0-4.142-3.358-7.5-7.5-7.5h-46.467c-4.142 0-7.5 3.358-7.5 7.5v50.508c0 4.142 3.358 7.5 7.5 7.5zm7.5-50.508h31.467v35.508h-31.467z"></path>
                                    <path d="m328.731 479.675h46.468c4.143 0 7.5-3.358 7.5-7.5v-50.508c0-4.142-3.357-7.5-7.5-7.5h-46.468c-4.143 0-7.5 3.358-7.5 7.5v50.508c0 4.142 3.358 7.5 7.5 7.5zm7.5-50.508h31.468v35.508h-31.468z"></path>
                                    <path d="m479.675 167.105c0-4.142-3.357-7.5-7.5-7.5h-32.325c-4.143 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.357 7.5 7.5 7.5h32.325c4.143 0 7.5-3.358 7.5-7.5zm-15 55.131h-17.325v-47.63h17.325z"></path>
                                    <path d="m479.675 262.061c0-4.142-3.357-7.5-7.5-7.5h-32.325c-4.143 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.357 7.5 7.5 7.5h32.325c4.143 0 7.5-3.358 7.5-7.5zm-15 55.13h-17.325v-47.63h17.325z"></path>
                                    <path d="m472.175 402.045h-32.325c-4.143 0-7.5 3.358-7.5 7.5v62.63c0 4.142 3.357 7.5 7.5 7.5h32.325c4.143 0 7.5-3.358 7.5-7.5v-62.63c0-4.142-3.358-7.5-7.5-7.5zm-7.5 62.63h-17.325v-47.63h17.325z"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <h2 style="margin:0; color:blue; font-size:26px; font-family:GalanoGrotesque;">{{modulos.name}}</h2>
                        <p style="margin:0; color:#7e7e7e">{{modulos.sub}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            msg: "Hola, Gonzalo",
            sub: "¿Qué planeas hacer hoy?",
            ventas: "896,89",
            utilidad: "896,89",
            modulo: [{
                    name: "Gestion",
                    sub: "y stock",
                    ruta: "/GestionStock"
                },
                {
                    name: "Cajero",
                    sub: "y sucursales",
                    ruta: "/Cajero"
                },
                {
                    name: "Envios",
                    sub: "y couriers",
                    ruta: "/Envios"
                },
                {
                    name: "Ventas",
                    sub: "y facturas",
                    ruta: "/Venta"
                },
                {
                    name: "Estadisticas",
                    sub: "Actualizadas",
                    ruta: "/Estadistica"
                },
                {
                    name: "Estadisticas",
                    sub: "Actualizadas",
                    ruta: "/Estadistica"
                }
            ]
        };
    }
};
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
