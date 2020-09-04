<template>
<div style="margin-top:3rem; max-width: 330px; margin-left:auto; margin-right:auto;">

    <div style="display:flex; margin-bottom: 20px;">
        <h1 style="font-family:GalanoGrotesque;">Cajero</h1>
    </div>

    <div style="display: flex; align-items: center;justify-content: flex-end;">
        <input type="text" style="width: 99%; border: none; background: #e7e7e7; height: 35px; border-radius: 6px;">
        <span class="iconify" data-icon="oi:magnifying-glass" data-inline="false" style="position: absolute; z-index: 1; left: 320px;"></span>
    </div>
    <div>

        <div>
            <div style="display:flex;">
                <p style="font-family:GalanoGrotesque; margin:0">Producto</p>
                <p style="font-family:GalanoGrotesque; margin:0; margin-left: 5rem;">Código</p>
            </div>
            <div style="display:flex; justify-content:flex-end; margin-top: 10px; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75);">
                
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 796 1096" style="enable-background:new 0 0 596 796;  width:10%; margin-top: 12px;" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M331.753,11.396C307.311,3.834,281.824,0,256,0C187.62,0,123.333,26.629,74.981,74.98C26.629,123.333,0,187.62,0,256

    c0,109.987,69.975,207.491,174.122,242.624c0.797,0.269,1.606,0.396,2.403,0.396c3.136,0,6.062-1.978,7.119-5.114

    c1.328-3.933-0.785-8.196-4.717-9.523C80.894,451.313,15.029,359.533,15.029,256c0-64.365,25.066-124.879,70.579-170.392

    S191.635,15.03,256,15.03c24.317,0,48.309,3.608,71.311,10.724c3.969,1.229,8.174-0.993,9.4-4.958

    C337.938,16.831,335.718,12.622,331.753,11.396z"></path>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M470.473,116.171c-26.468-40.518-63.635-72.61-107.483-92.808c-3.77-1.738-8.233-0.088-9.969,3.682

    c-1.736,3.77-0.088,8.233,3.682,9.969c41.277,19.014,76.268,49.228,101.188,87.377c25.567,39.137,39.08,84.647,39.08,131.61

    c0,64.365-25.065,124.878-70.579,170.392C380.879,471.905,320.365,496.97,256,496.97c-15.271,0-30.55-1.437-45.412-4.271

    c-4.075-0.783-8.012,1.896-8.789,5.974c-0.777,4.077,1.897,8.013,5.974,8.79C223.561,510.473,239.787,512,256,512

    c68.38,0,132.667-26.628,181.02-74.98C485.371,388.667,512,324.38,512,256C512,206.111,497.64,157.759,470.473,116.171z"></path>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M352.391,248.485h-88.876v-88.876c0-4.15-3.364-7.515-7.515-7.515c-4.15,0-7.515,3.364-7.515,7.515v88.876H159.61

    c-4.15,0-7.515,3.364-7.515,7.515c0,4.15,3.364,7.515,7.515,7.515h88.876v88.875c-0.001,4.151,3.364,7.515,7.514,7.515

    c4.15,0,7.515-3.364,7.515-7.515v-88.875h88.876c4.15,0,7.515-3.365,7.515-7.515C359.906,251.85,356.542,248.485,352.391,248.485z

    "></path>
                        </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                </svg>
            </div>
        </div>
    </div>
    <div style="cursor:pointer; display: flex; align-items: flex-end; " onclick="document.getElementById('id01').style.display='block'">
        <div style="width: 100%; background: linear-gradient(90deg, rgb(9, 18, 54) 45.4106%, rgb(9, 18, 54) 45.4106%); color: #ffffff; display:flex; align-items:center; padding: 10px; margin-top: -4px;justify-content: space-between;">
            <h1 style="margin:0; font-family: GalanoGrotesque; font-family: GalanoGrotesque;font-size: 20px;">Continuar</h1>
            <p style=" color:#fff;  margin:0;  font-family: HelveticaNeue; font-size: 22px;">S/.87.90</p>
        </div>
    </div>
    <div id="id01" class="w3-modal">
        <div style="margin:0; border-radius: 20px 20px 0px 0px; padding-top: 15px; height: 100%; display: flex; flex-direction: column;justify-content: space-between;" class="w3-modal-content w3-animate-bottom w3-card-4">

            <div class="w3-container">
                <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
                <div style="display:flex; justify-content:space-between; padding: 0 10px;">
                    <p style="margin:0; font-family: GalanoGrotesque;">Producto</p>
                    <div style="display:flex; justify-content:space-between;">
                        <p style="margin:0; font-family: GalanoGrotesque; margin-right: 55px;">Precio</p>
                        <p style="margin:0; font-family: GalanoGrotesque;">Foto</p>
                    </div>
                </div>
                <div v-for="productos in producto" style="margin-top: 10px; padding: 0 10px; display:flex; justify-content:space-between; height: 70px; align-items: center; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75);">
                    <p style="margin:0; font-family: HelveticaNeue; flex-basis:calc(70% - 1rem);">(1) {{productos.name}}</p>
                    <div style="display:flex; justify-content:space-between; align-items: center; flex-basis:calc(70% - 1rem);">
                        <p style=" font-family: HelveticaNeue; margin: 0px 0px 0px 30px; font-size: 17.5px;">S/.{{productos.precio}}</p>
                        <img src="@/assets/botella.webp" style="width: 25%;" alt="">
                    </div>
                </div>
            </div>

            <footer>
                <div style="cursor:pointer; display: flex; align-items: flex-end; ">
                    <div style="width: 100%; background: linear-gradient(90deg, rgb(9, 18, 54) 45.4106%, rgb(9, 18, 54) 45.4106%); color: #ffffff; display:flex; align-items:center; padding: 10px; margin-top: -4px;justify-content: space-between;">
                        <h1 style="margin:0; font-family: GalanoGrotesque; font-family: GalanoGrotesque;font-size: 20px;">Total</h1>
                        <p style=" color:#fff;  margin:0;  font-family: HelveticaNeue; font-size: 22px;">S/.87.90</p>
                    </div>
                </div>
                <div style="width:100%; height:50px;">
                    <button style="width:50%; border:none; height:50px;font-size: 20px;font-family: HelveticaNeue; ">Pre vender</button>
                    <button style="width:50%; border:none; height:50px;font-size: 20px;font-family: HelveticaNeue; background-color: #e7e7e7;">Vender</button>
                </div>
            </footer>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Cajero',
    data() {
        return {
            producto: [{
                    name: 'Inka cola 550ML',
                    precio: 2.50
                },
                {
                    name: 'Inka cola 550ML',
                    precio: 2.50
                },
                {
                    name: 'Inka cola 550ML',
                    precio: 2.50
                },
                {
                    name: 'Inka cola 550ML',
                    precio: 2.50
                },
            ], 
            productoCom:[
                
            ]
        }
    },

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
