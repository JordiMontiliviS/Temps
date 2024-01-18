<script setup>
import CiutatTargeta from '../components/CiutatTargeta.vue';
import BroadCrumbs from '../components/BrodCrumbs.vue'
</script>
<template>
     <main>
          <BroadCrumbs class="relative m-3" currentPage="Barcelona" linkPage="/barcelona" />
          <Suspense>
               <CiutatTargeta ciutat="Barcelona" />
          </Suspense>
     </main>
</template>
<style></style>