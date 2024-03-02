<script setup lang="ts">

let year = new Date().getFullYear()

</script>

<template>
    <footer ref="footer">copyright © carl sandberg {{ year }}</footer>
</template>

<style scoped lang="scss">
footer {
    width: 100vw;
    height: auto;
    bottom: 0;
    position: fixed;
    margin-left: 1rem;
    padding-left: 1rem;
    text-transform: uppercase;
    font-size: small;
}
</style>