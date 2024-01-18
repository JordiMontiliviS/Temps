<script setup>
import { ref } from 'vue';
import LlistatTemps from './LlistatTemps.vue';
let data = {}
const props = defineProps({
    ciutat: {
        type: String,
        default: "Llagostera"
    }
});
// Faig una funcio asyncrona per que quan tingui les dades les mostri.
async function fetchData() {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.ciutat}&appid=bc4ce74ffed49ace6232e3b4006406db`);
    const response = await data.json();
    return response;
}
// Assigno les dades agafades del fecth.
const res = ref(await fetchData());
data = res.value;
</script>
<template>
    <figure
        class="flex flex-col items-center justify-center p-4 text-center bg-gray-800 rounded shadow">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h1 class="text-2xl uppercase font-semibold text-gray-900">{{ data.city.name }}</h1>
            <p class="my-4 text-lg text-white">Població: {{ data.city.population }} habitants</p>
            <div class="space-y-0.5 font-medium text-center">
                <div class="text-white">Situació en el mapa de {{ data.city.name }}</div>
                <div class="text-sm text-white">
                    <div class="text-center">
                        <p class="text-sm text-white">Latitud: {{ data.city.coord.lat }}</p>
                        <p class="text-sm text-white">Longitud: {{ data.city.coord.lat }}</p>
                    </div>
                </div>
            </div>
        </blockquote>
        <LlistatTemps :llista="data.list" />
    </figure>
</template>
