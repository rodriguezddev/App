<template>
<div class="home">
    <DetalleVenta />
    <Dashboard />

    <!--<div id="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
            <div class="swiper-slide">Slide 10</div>
        </div>
        <div class="swiper-pagination"></div>
    </div>-->
</div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'
import GestionStock from '@/components/GestionStock.vue'
import Cajero from '@/components/Cajero.vue'
import DetalleVenta from '@/components/DetalleVenta.vue'

export default {
    name: 'home',
    components: {
        Dashboard,
        GestionStock,
        Cajero,
        DetalleVenta
    }

}
</script>
