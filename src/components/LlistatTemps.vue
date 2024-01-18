<script setup>
import { ref } from 'vue';
import TemperaturesLlista from '../components/TemperaturesLlista.vue'
const props = defineProps({
    llista: {
        type: Array,
        default: []
    }
});

let sumadia =0;
const dates = [[]];
const nums = [];
const dies = [];
let dia = props.llista[0].dt_txt.split(' ')[0];

props.llista.forEach((e) => {
    if (e.dt_txt.split(' ')[0] != dia) {
        dies.push(e.dt_txt.split(' ')[0]);
        dia = e.dt_txt.split(' ')[0];
        dates.push([])
        sumadia++;
    }else{
        if(!nums.includes(sumadia))
            nums.push(sumadia)
        dates[sumadia].push(e)
    }
})
nums.shift()
</script>
<template>
    <div class="mt-5 grid-cols-3 sm:grid md:grid-cols-5">
        <div v-for="n in nums"
            class="flex flex-col rounded-lg bg-neutral-700 shadow m-1">
            <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-100">
                    {{ dies[n-1].split('-')[2]+"/"+dies[n-1].split('-')[1]+"/"+ dies[n-1].split('-')[0] }}
                </h5>
                <TemperaturesLlista :llista="dates[n]"/>
            </div>
        </div>
    </div>
</template>
