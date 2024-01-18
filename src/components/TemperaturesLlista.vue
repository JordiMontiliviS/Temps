<script setup>
import { Clock } from 'framework7-icons/vue';
const props = defineProps({
    llista: {
        type: Array,
        default: []
    }
});
</script>
<template>
    <div class="">
        <div v-for="a in props.llista"
            class="flex flex-col rounded-lg bg-neutral-700 shadow m-1">
            <div class="py-3">
                <Clock class="inline text-white"/> 
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-100">
                   {{ a.dt_txt.split(' ')[1].split(':')[0] +":"+ a.dt_txt.split(' ')[1].split(':')[1]}}
                </h5>
               
            </div>
        </div>
    </div>
</template>
