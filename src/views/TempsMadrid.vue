<script setup>
import CiutatTargeta from '../components/CiutatTargeta.vue';
import BroadCrumbs from '../components/BrodCrumbs.vue'
</script>
<template>
     <main>
          <BroadCrumbs class="relative m-3" currentPage="Madrid" linkPage="/madrid" />
          <Suspense>
               <CiutatTargeta ciutat="Madrid" />
          </Suspense>
     </main>
</template>
<style></style>