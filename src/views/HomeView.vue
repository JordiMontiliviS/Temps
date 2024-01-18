<script setup>
import CiutatTargeta from '../components/CiutatTargeta.vue';
import BroadCrumbs from '../components/BrodCrumbs.vue'
</script>

<template>
    <BroadCrumbs class="relative m-3" currentPage="Home" linkPage="/" />
    <Suspense>
      <CiutatTargeta />
    </Suspense>
</template>
<style>
* {
  color: black;
}
</style>