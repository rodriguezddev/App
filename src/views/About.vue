<template>
<div class="about">
    <Producto />
</div>
</template>

<script>
import Producto from '@/components/Producto.vue'
import Envios from '@/components/Envios.vue'
export default {
    name: 'about',
    components: {
        Producto,
        Envios
    }
}
</script>
