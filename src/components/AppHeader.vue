<template>
  <nav class="nav-fixed nav-default z-50">
    <div class="container">
      <div class="nav-container flex flex-wrap justify-between items-center">
        <router-link class="nav-brand inline-block" to="/">
          <img class="h-16" src="/images/nodepress-logo.png" alt="nodepress"
        /></router-link>
        <a id="nav-menu-toggle" class="md:hidden"
          ><span class="material-icons">menu</span></a
        >
        <!-- <div class="border-b basis-full md:hidden mt-2"></div> -->
        <div id="nav-menu" class="nav-menu h-0 md:h-auto">
          <router-link class="nav-menu-link" to="/pages/1"
            >NodePress</router-link
          >
          <router-link class="nav-menu-link" to="/pages/2"
            >Showcase</router-link
          >
          <router-link class="nav-menu-link" to="/pages/3">Learn</router-link>
          <router-link class="nav-menu-link" to="/pages/4">Themes</router-link>
          <router-link class="nav-menu-link" to="/pages/5">Plugins</router-link>
          <router-link class="nav-menu-link" to="/pages/6">Support</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script></script>

<style scoped></style>
