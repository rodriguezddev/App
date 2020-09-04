<template>
<div>

    <span class="iconify" data-icon="ic:round-arrow-back-ios" data-inline="false" style="width:10%; margin-bottom: -25px;"></span>
    <p style="text-align:center; margin:0; font-size: 17px; font-family:HelveticaNeue;">Pagar y terminar venta</p>

    <div style="display: flex; justify-content: space-between; height: 60px; align-items: center; margin-top: 20px; background-color: rgb(245, 244, 244); padding: 0 20px;">
        <p style="margin:0; font-size: 17px; font-family:HelveticaNeue;">¿Paga completo?</p>
        <label class="switch m5">
            <input type="checkbox">
            <small></small>
        </label>
    </div>
    <div>
        <!--AQUI VAN UN SELECT-->
    </div>
    <div style="display:flex; margin-bottom:20px; -webkit-box-shadow: rgba(0, 0, 0, 0.75) 0px 10px 22px -14px; -moz-box-shadow: rgba(0, 0, 0, 0.75) 0px 10px 22px -14px;box-shadow: rgba(0, 0, 0, 0.75) 0px 10px 22px -14px;">
        <div style="border-bottom: solid 2px blue; height: 30px; width: 80px; margin-right:10px;">
            <p style="margin-left:5px; font-family:HelveticaNeue; margin-top:5px; margin-bottom:0;">Boleta</p>
        </div>
        <div style=" width: 80px; height: 30px;  margin-right:10px;">
            <p style="margin-top:0; font-family:HelveticaNeue; margin-bottom:5px;">Fatura</p>
        </div>
        <div style=" height: 30px;  margin-right:10px;">
            <p style="margin-top:0; font-family:HelveticaNeue; margin-bottom:5px;">No emitir comprobante</p>
        </div>
    </div>
    <div style=" max-width: 330px; margin-left:auto; margin-right:auto;">
        <p style="font-size:17px; font-family:HelveticaNeue; padding-left: 5px; margin: 0 0 5px 0;">DNI/RUC</p>
        <input type="text" placeholder="Ejem:78697598" style="width: 99%; padding-left: 10px;
    font-size: 17px; border: none; font-family:HelveticaNeue; background: #e7e7e7; height: 35px; border-radius: 6px;">
    </div>
    <div style="height:100px; display: flex; justify-content: center; align-items: center;">
        <p style="margin:0; font-size:30px; font-family:HelveticaNeue;">S/.87.90</p>
    </div>
    <div style="margin-top:3rem; max-width: 330px; margin-left:auto; margin-right:auto; background-color: rgb(245, 244, 244);">
        <div style="cursor:pointer; display: flex; align-items: flex-end; ">
            <div style="width: 100%; border-radius: 5px; height: 60px; background: linear-gradient(90deg, rgb(9, 18, 54) 45.4106%, rgb(9, 18, 54) 45.4106%); color: #ffffff; display:flex; align-items:center; padding: 10px; margin-top: -4px;justify-content: space-between;">
                <h1 style="margin:0; font-family: GalanoGrotesque; font-family: GalanoGrotesque;font-size: 20px;">Efectivo</h1>
                <p style=" color:#fff;  margin:0;  font-family: HelveticaNeue; font-size: 17px;">Pagar</p>
            </div>
        </div>

        <div style="cursor:pointer; margin: 20px 0; display: flex; align-items: flex-end; ">
            <div style="width: 100%; border-radius: 5px; height: 60px; background: #ffffff; display:flex; align-items:center; padding: 10px; margin-top: -4px;justify-content: space-between;">
                <h1 style="margin:0; font-family: GalanoGrotesque; font-family: GalanoGrotesque;font-size: 20px;">Tarjeta o depósito</h1>
                <p style=" margin:0;  font-family: HelveticaNeue; font-size: 17px;">Pagar</p>
            </div>
        </div>

        <div style="cursor:pointer; margin: 20px 0; display: flex; align-items: flex-end; ">
            <div style="width: 100%; border-radius: 5px; height: 60px; background: #ffffff; display:flex; align-items:center; padding: 10px; margin-top: -4px;justify-content: space-between;">
                <h1 style="margin:0; font-family: GalanoGrotesque; font-family: GalanoGrotesque;font-size: 20px;">Giftcard</h1>
                <p style=" margin:0;  font-family: HelveticaNeue; font-size: 17px;">Pagar</p>
            </div>
        </div>

        <div style="cursor:pointer; margin: 20px 0; display: flex; align-items: flex-end; ">
            <div style="width: 100%; border-radius: 5px; height: 60px; background: #ffffff; display:flex; align-items:center; padding: 10px; margin-top: -4px;justify-content: space-between;">
                <h1 style="margin:0; font-family: GalanoGrotesque; font-family: GalanoGrotesque;font-size: 20px;">Depósito</h1>
                <p style=" margin:0;  font-family: HelveticaNeue; font-size: 17px;">Pagar</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'DetalleVenta'
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

.m5 {
    margin: 0 5px;
}

.switch {
    display: inline-block;
}

.switch input {
    display: none;
}

.switch small {
    display: inline-block;
    width: 48px;
    height: 23px;
    background: #455a64;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
}

.switch small:after {
    content: "";
    position: absolute;
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    width: 100%;
    left: 0px;
    text-align: right;
    padding: 0 6px;
    box-sizing: border-box;
    line-height: 18px;
}

.switch small:before {
    content: "";
    position: absolute;
    width: 17px;
    height: 17px;
    background: #fff;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    transition: .3s;
    box-shadow: -3px 0 3px rgba(0, 0, 0, 0.1);
}

.switch input:checked~small {
    background: blue;
    transition: .3s;
}

.switch input:checked~small:before {
    transform: translate(25px, 0px);
    transition: .3s;
}

.switch input:checked~small:after {
    text-align: left;
}
</style>
