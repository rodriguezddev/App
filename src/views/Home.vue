<template>
<div class="home">
    <Dashboard />
    <Producto />
    <DetalleProduc />

</div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'
import Producto from '@/components/Producto.vue'
import DetalleProduc from '@/components/DetalleProduc.vue'

export default {
    name: 'home',
    components: {
        Dashboard,
        Producto,
        DetalleProduc
    }
}
</script>
