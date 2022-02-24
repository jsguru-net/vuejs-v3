<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import AppHeader from "./components/AppHeader.vue";

// reactive state
</script>

<template>
  <app-header />
  <main>
    <router-view></router-view>
  </main>
  <footer class="bg-gray-100 py-8">
    <div class="container">
      <div class="text-center">
        <a href=""><span class="material-icons text-4xl">facebook</span></a>
        <a href=""
          ><span class="material-icons text-4xl">smart_display</span></a
        >
      </div>
      <div class="text-center text-lg py-4">Copyright @ nodepress 2022</div>
      <div class="text-center text-sm">
        Powered by
        <a
          class="font-bold text-primary"
          href="https://github.com/jsguru-net/nodepress"
          >NodePress</a
        >
        - Made with love from
        <a
          class="font-bold text-primary"
          href="https://github.com/jsguru-net/nodepress"
          >jsguru.net</a
        >
        - Build Version 202201302230
      </div>
    </div>
  </footer>
</template>

<style></style>
