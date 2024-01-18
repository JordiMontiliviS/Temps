<script setup>
import CiutatTargeta from '../components/CiutatTargeta.vue';
import BroadCrumbs from '../components/BrodCrumbs.vue'
</script>
<template>
     <main>
          <BroadCrumbs class="relative m-3" currentPage="Girona" linkPage="/girona" />
          <Suspense>
               <CiutatTargeta ciutat="Girona" />
          </Suspense>
     </main>
</template>
<style></style>