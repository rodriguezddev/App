<template>
<div style="margin-top:3rem; max-width: 330px; margin-left:auto; margin-right:auto;">
    <div>
        <h1 style="font-family:GalanoGrotesque; margin:0;">Banca</h1>
        <p style=" margin:0;">Seleccione una opcion para empezar</p>
    </div>
    <div>
        <div v-for="tarjeta in tarjetasbancos" :class="tarjeta.fondo" class="swiper-slide active-slider tamañosld 0" style="width: 300px !important; height: 210px;
    border-radius: 10px;  border-top-left-radius: 8; color: #ffffff; background-size: cover; background-repeat: repeat-y; padding-left: 2rem;">
            <div class="row">
                <div style=" margin-top: 15px;filter: brightness(100); width:40%">
                    <div :class="tarjeta.img" v-bind:style="{width:tarjeta.width,filter:tarjeta.filter,marginTop:tarjeta.top,marginLeft:tarjeta.left}" style=" float: left; text-align: left;" class="float-left tarjeta_logo_v"></div>
                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left text-left" style="overflow: hidden; margin-left: -10px; height: 43px; margin-top: 2px;">
                    <img src="@/assets/chip.png" style="width: 38px; float: left; text-align: left; margin-top: 13px; margin-bottom: 28px;" class="float-left" />
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left text-left" style="overflow: hidden; margin-left: -10px; height: 21px; margin-top: 5px; margin-bottom: 72px;">
                    <h5 style="font-family: 'Source Code Pro',  monospace; font-size: 17px; line-height: 26px; font-weight: 400;text-shadow:1px 1px 0px #2b2b2b">{{tarjeta.I_num}} **** **** {{tarjeta.I_num_dos}}</h5>
                </div>
                <div class="col-md-12" style="margin-top: -69px; font-family: 'Source Code Pro', monospace; font-size: 11px; color: #c3c3c3;">
                    <div class="row" style="display: flex;
    align-items: center;
    margin-left: 1.5rem;">
                        <div style="color:white; text-align:center;">
                            Vence <br /> en
                        </div>
                        <div style="color: #ffffff; font-size: 17px; margin-left: 2rem;">
                            0#/0#
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 col-lg-12 col-md-12 col-sm-12 col-xl-12 float-left text-left" style="overflow: hidden; margin-left: -10px; height: 18px; margin-top: -22px; margin-bottom: 94px;">
                        <h5 style="font-family: 'Source Code Pro', monospace; font-size: 17px; margin-top: -5px; line-height: 26px;  font-weight: 400; text-transform: uppercase; margin-left: 1rem;text-shadow:1px 1px 0px #2b2b2b;">{{tarjeta.S_nombre}}</h5>
                    </div>
                    <div class="col-12 col-sm-12 float-left text-left col-xl-12 col-md-12 col-lg-12 borrar" style="height: 119px; width: 204px; margin: -254px 25px 10px -29px;">
                        <div class="pg-empty-placeholder float-right" style="background-size: contain; margin-top: -10px; float: right; width: 55px; background-repeat: no-repeat; margin-left: -330px; margin-right: -44px; background-image: url('assets/LOGOS_MARCAS/visa.png'); height: 66px;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="display:flex; margin-bottom:20px; margin-top: 20px;">
        <div style="border-bottom: solid 2px blue; width: 100px; text-align: center; margin-right:10px;">
            <p style="margin-left:5px; margin-top:5px; margin-bottom:0;">Cuentas</p>
        </div>
        <div style=" width: 100px; text-align: center; margin-right:10px;">
            <p style="margin:0; ">Tarjetas</p>
        </div>
    </div>
    <div style="background-color: rgb(245, 244, 244);">
        <div v-for="ventas in venta" style="width:100%; height:70px; background: #fff; margin-top: 10px; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75);     border-radius: 5px;">
            <router-link to='/Banca/Operaciones'>
                <div style="height:70px;"></div>
            </router-link>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Banca',
    data() {
        return {
            nombrep: "",
            sucursalp: "",
            contratop: "",
            icon_table: "SVG%20NO%20EMBEBIDO/bank.svg",
            hola: "Mas extravagantes",
            dueno_cuenta: "",
            n_cuenta: "",
            banco: "",
            cuenta_id_tabla: 0,
            idaccount_editar: 0,
            id_tarjeta_editar: 0,
            hexi: "#2845d7",
            value: "",
            n_tarjeta1_editar: 0,
            n_tarjeta2_editar: 0,
            dueno_tarjeta_editar: "",
            account_de_editar_tarjeta: 0,
            e_procesadora_model_editar_tarjeta: 0,
            dueno_cuenta_editar: "",
            banco_editar: 0,
            n_cuenta_editar: 0,
            dueno_cuenta_editar: "",
            saldo_inicial: 0,
            colora: [],
            dnip: "",
            state_tipo: 0,
            correop: "",
            id_bank_table: "",
            helados: [],
            someVar: "",
            cuenta_array: "",
            valueprueba: "",
            value1: "",
            state: "",
            img_bloque: "",
            width_l: "",
            top_l: "",
            left_l: "",
            filter_l: "",
            account_de: "",
            account_a: "",
            prueba: "",
            monto: "",
            moneda: "",
            page: 1,
            modedin: "",
            numero_bloque: 0,
            nombre_bloque: "",
            dinero_bloque: 0,
            tarjeta_id: 7,
            transferencias_cuenta: [],
            cuentasbancos_modificable: [],
            state_moneda: 0,
            key: [],
            checkboxt: false,
            cantidad_cuentas: 20,
            id_total: 0,
            page_dos: 0,
            n_tarjeta1: 1111,
            n_tarjeta2: 1111,
            banco_logo_t_img: "",
            dueno_tarjeta: "NOMBRE TITULAR",
            tarjetasbancos: [],
            cuentasbancos: [],
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
    },
    created: function () {

        var that = this
        that.GetTarjetas();

    },
    methods: {
        GetTarjetas() {
            var that = this
            that.axios.get('http://api.symba.pe/api/general_banca_tarjetas?I_a=1000&I_de=0', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImNvcnJlbyI6IjEiLCJlbXByZXNhIjoxLCJlbXBsZWFkbyI6MywicGVybWlzbyI6IjEiLCJzdWN1cnNhbCI6MX0sImlhdCI6MTU5MzMxMTEzNn0.CNFnTbY9kFzIxM8o8GbzJIRPCClbJfJ88cQBEMUFsWs"
                    }
                })
                .then(function (response) {
                    console.log(response.data)
                    for (let i = 0; i < response.data.length; i++) {
                        console.log('Aqui')

                        var n_parte_uno_s = response.data[i].I_numero.toString() //captura el numera de tarjeta y lo convierte  string
                        console.log(n_parte_uno_s)
                        response.data[i].width = "82px" //crea un nuevo item en el objeto
                        var id = response.data[i].I_id.toString() //captura el id y lo convierte  string
                        response.data[i].fondo = id.slice(-1)

                        response.data[i].I_num = n_parte_uno_s.substring(0, 4) //captura el numero de tarjeta desde la posicion 0 hasta la 4

                        response.data[i].I_num_dos = n_parte_uno_s.substring(4, 8) //captura el numero de tarjeta desde la posicion 4 hasta la 8
                        console.log('Aqui')
                        if (response.data[i].fondo == 0) {
                            response.data[i].fondo = "A1"
                        } else if (response.data[i].fondo == 1) {
                            response.data[i].fondo = "A2"
                        } else if (response.data[i].fondo == 2) {
                            response.data[i].fondo = "A3"
                        } else if (response.data[i].fondo == 3) {
                            response.data[i].fondo = "A4"
                        } else if (response.data[i].fondo == 4) {
                            response.data[i].fondo = "A5"
                        } else if (response.data[i].fondo == 5) {
                            response.data[i].fondo = "A6"
                        } else if (response.data[i].fondo == 6) {
                            response.data[i].fondo = "A7"
                        } else if (response.data[i].fondo == 7) {
                            response.data[i].fondo = "A8"
                        } else if (response.data[i].fondo == 8) {
                            response.data[i].fondo = "A9"
                        } else if (response.data[i].fondo == 9) {
                            response.data[i].fondo = "A10"
                        }

                        if (response.data[i].I_bancos == 1) {
                            response.data[i].img = "logo1"
                            response.data[i].width = "82px"
                            response.data[i].filter = "grayscale(1)"
                            response.data[i].left = "-8px"
                            response.data[i].top = "-4px"

                        } else if (response.data[i].I_bancos == 2) {
                            response.data[i].img = "logo2"
                            response.data[i].width = "71px"
                            response.data[i].left = "-15px"
                            response.data[i].top = "0px"
                            response.data[i].filter = "grayscale(1)"
                        } else if (response.data[i].I_bancos == 3) {
                            response.data[i].img = "logo3"
                            response.data[i].width = "71px"
                            response.data[i].left = "-5px"
                            response.data[i].top = "0px"
                            response.data[i].filter = "grayscale(1)"
                        } else if (response.data[i].I_bancos == 4) {
                            response.data[i].img = "logo4"
                            response.data[i].width = "105px"
                            response.data[i].left = "-11px"
                            response.data[i].top = "-8px"
                            response.data[i].filter = "grayscale(1)"

                        } else if (response.data[i].I_bancos == 5) {
                            response.data[i].img = "logo5"
                            response.data[i].width = "105px"
                            response.data[i].left = "-36px"
                            response.data[i].top = "-8px"
                            response.data[i].filter = "grayscale(1)"
                        } else if (response.data[i].I_bancos == 6) {
                            response.data[i].img = "logo6"
                            response.data[i].width = "91px"
                            response.data[i].left = "0px"
                            response.data[i].top = "-4px"
                            response.data[i].filter = "grayscale(1)"

                        } else if (response.data[i].I_bancos == 7) {
                            response.data[i].img = "logo7"

                            response.data[i].width = "91px"
                            response.data[i].left = "-17px"
                            response.data[i].top = "-4px"
                            response.data[i].filter = "grayscale(1)"
                        } else if (response.data[i].I_bancos == 8) {
                            response.data[i].img = "logo8"
                            response.data[i].width = "91px"
                            response.data[i].left = "-5px"
                            response.data[i].top = "-4px"
                            response.data[i].filter = "grayscale(1)"
                        } else if (response.data[i].I_bancos == 9) {
                            response.data[i].img = "logo9"
                            response.data[i].width = "105px"
                            response.data[i].left = "-5px"
                            response.data[i].top = "-4px"
                            response.data[i].filter = "grayscale(1)"
                        } else if (response.data[i].I_bancos == 10) {
                            response.data[i].img = "logo10"
                            response.data[i].width = "110px"
                            response.data[i].left = "-5px"
                            response.data[i].top = "-8px"
                            response.data[i].filter = "grayscale(1)"
                        } else if (response.data[i].I_bancos == 11) {
                            response.data[i].img = "logo11"
                            response.data[i].width = "100px"
                            response.data[i].left = "-21px"
                            response.data[i].top = "-6px"
                            response.data[i].filter = "grayscale(1)"
                        } else if (response.data[i].I_bancos == 12) {
                            response.data[i].img = "logo12"
                            response.data[i].width = "91px"
                            response.data[i].left = "-21px"
                            response.data[i].top = "-3px"
                            response.data[i].filter = "grayscale(1)"
                        } else if (response.data[i].I_bancos == 13) {
                            response.data[i].img = "logo13"
                            response.data[i].width = "110px"
                            response.data[i].left = "-3px"
                            response.data[i].top = "-8px"
                            response.data[i].filter = "grayscale(1)"
                        } else if (response.data[i].I_bancos == 14) {
                            response.data[i].img = "logo14"
                            response.data[i].width = "85px"
                            response.data[i].left = "-3px"
                            response.data[i].top = "-1px"
                            response.data[i].filter = "invert(1)"
                        } else if (response.data[i].I_bancos == 15) {
                            response.data[i].img = "logo15"
                            response.data[i].width = "95px"
                            response.data[i].left = "-3px"
                            response.data[i].top = "-1px"
                            response.data[i].filter = "invert(1)"
                        } else if (response.data[i].I_bancos == 16) {
                            response.data[i].img = "logo16"
                            response.data[i].width = "95px"
                            response.data[i].left = "-3px"
                            response.data[i].top = "-1px"
                            response.data[i].filter = "invert(1)"
                        } else if (response.data[i].I_bancos == 17) {
                            response.data[i].img = "logo17"
                            response.data[i].width = "95px"
                            response.data[i].left = "-3px"
                            response.data[i].top = "-1px"
                            response.data[i].filter = "invert(1)"
                        } else if (response.data[i].I_bancos == 18) {
                            response.data[i].img = "logo18"
                            response.data[i].width = "82px"
                            response.data[i].left = "-5px"
                            response.data[i].top = "0px"
                            response.data[i].filter = "invert(1)"
                        } else if (response.data[i].I_bancos == 19) {
                            response.data[i].img = "logo19"
                            response.data[i].width = "93px"
                            response.data[i].left = "-5px"
                            response.data[i].top = "-4px"
                            response.data[i].filter = "grayscale(1)"
                        }
                    }
                    console.log("ESTAS SON LAS TARJETAS")
                    console.log(response.data)
                    that.tarjetasbancos = response.data

                }).catch(function (error) {
                    console.log("fallo tarjheta")
                    that.GetTarjetas();

                });
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

.hey {
    color: #091236 45.4106%
}

.css-selector {
    background: linear-gradient(45deg, #6666ff, #0066cc, #3333cc, #003399, #000066, #336699);
    background-size: 800% 100% !important;
    animation: gradient 16s linear infinite;
    animation-direction: alternate;
}

.A1 {
    background: linear-gradient(75deg, #0D3A7C, #3F8DFF, #653FFF, #3200FF, #1A2675, #0077B7);
    background-size: 600% 100% !important;
    animation: gradient 16s linear infinite;
    animation-direction: alternate;
}

.A2 {
    background: linear-gradient(45deg, #003A93, #053173, #1F214B, #132C52, #385C95, #2765C7);
    background-size: 600% 100% !important;
    animation: gradient 16s linear infinite;
    animation-direction: alternate;
}

.A3 {
    background: linear-gradient(-45deg, #203863, #415A88, #416888, #417888, #554D79, #223372);
    background-size: 600% 100% !important;
    animation: gradient 16s linear infinite;
    animation-direction: alternate;
}

.A4 {
    background: linear-gradient(45deg, #0043AD, #493876, #384176, #2D3E9D, #2412BB, #005993);
    background-size: 600% 100% !important;
    animation: gradient 16s linear infinite;
    animation-direction: alternate;
}

.A5 {
    background: linear-gradient(-45deg, #2681CC, #2653CC, #113186, #007CFF, #001A61, #0043AD);
    background-size: 600% 100% !important;
    animation: gradient 16s linear infinite;
    animation-direction: alternate;
}

.A6 {
    background: linear-gradient(45deg, #445E7C, #304583, #22419D, #255172, #625193, #515E93);
    background-size: 600% 100% !important;
    animation: gradient 16s linear infinite;
    animation-direction: alternate;
}

.A7 {
    background: linear-gradient(-45deg, #263E68, #50668C, #314483, #6B5492, #546992, #597590);
    background-size: 600% 100% !important;
    animation: gradient 16s linear infinite;
    animation-direction: alternate;
}

.A8 {
    background: linear-gradient(-45deg, #072C4F, #073A4F, #07184F, #0F074F, #22074F, #243156);
    background-size: 600% 100% !important;
    animation: gradient 16s linear infinite;
    animation-direction: alternate;
}

.A9 {
    background: linear-gradient(-45deg, #68A6D1, #6890D1, #6878D1, #7668D1, #2F7AD8, #6789B4);
    background-size: 600% 100% !important;
    animation: gradient 16s linear infinite;
    animation-direction: alternate;
}

.A10 {
    background: linear-gradient(45deg, #445E7C, #304583, #22419D, #255172, #625193, #515E93);
    background-size: 600% 100% !important;
    animation: gradient 16s linear infinite;
    animation-direction: alternate;
}

@keyframes gradient {
    0% {
        background-position: 0%;
    }

    100% {
        background-position: 100%;
    }
}

.logo1 {
    background-image: url(../assets/Bancos_color/BancodeCrédito.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo2 {
    background-image: url(../assets/Bancos_color/BancoCencosud.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo3 {
    background-image: url(../assets/Bancos_color/BancodeComercio.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo4 {
    background-image: url(../assets/Bancos_color/BancoAzteca.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo5 {
    background-image: url(../assets/Bancos_color/BancodelaNación.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo6 {
    background-image: url(../assets/Bancos_color/BancoFalabella.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo7 {
    background-image: url(../assets/Bancos_color/BBVAcontinental.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo8 {
    background-image: url(../assets/Bancos_color/BancoRipley.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo9 {
    background-image: url(../assets/Bancos_color/Interbank.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo10 {
    background-image: url(../assets/Bancos_color/ScotiaBank.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo11 {
    background-image: url(../assets/Bancos_color/GNB.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo12 {
    background-image: url(../assets/Bancos_color/MiBanco.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo13 {
    background-image: url(../assets/Bancos_color/FinancieraUNO.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo14 {
    background-image: url(../assets/Bancos_color/CajaArequipa.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo15 {
    background-image: url(../assets/Bancos_color/CajaCusco.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo16 {
    background-image: url(../assets/Bancos_color/CajaHuancayo.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo17 {
    background-image: url(../assets/Bancos_color/CajaIca.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo18 {
    background-image: url(../assets/Bancos_color/CajaPiura.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.logo19 {
    background-image: url(../assets/Bancos_color/CajaSullana.svg);
    width: 100%;
    height: 2rem;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
</style>
