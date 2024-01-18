<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LogoWeb from './components/LogoWeb.vue'

</script>

<template>
  <header class="">
    <nav class="bg-gray-900  w-full border-b border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <LogoWeb />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Projecte 04</span>
        </a>

        <div class="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <RouterLink to="/"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/girona"
                class="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0">
                Girona
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/barcelona"
                class="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0">
                Barcelona
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/madrid"
                class="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0">
                Madrid
              </RouterLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>
<style>
* {
  color: black;
}
</style>