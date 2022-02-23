<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import "./styles/home.scss";
</script>

<template>
  <nav class="nav-fixed nav-default z-50">
    <div class="container">
      <div class="nav-container flex flex-wrap justify-between items-center">
        <a href="./" class="nav-brand inline-block"
          ><img class="h-16" src="/images/nodepress-logo.png" alt="nodepress"
        /></a>
        <a id="nav-menu-toggle" class="md:hidden"
          ><span class="material-icons">menu</span></a
        >
        <!-- <div class="border-b basis-full md:hidden mt-2"></div> -->
        <div id="nav-menu" class="nav-menu h-0 md:h-auto">
          <a class="nav-menu-link" href="./page.html">Why NodePress?</a>
          <a class="nav-menu-link" href="./page.html">Showcase</a>
          <a class="nav-menu-link" href="./page.html">Learn</a>
          <a class="nav-menu-link" href="./page.html">Themes</a>
          <a class="nav-menu-link" href="./page.html">Plugins</a>
          <a class="nav-menu-link" href="./page.html">Support</a>
        </div>
      </div>
    </div>
  </nav>
  <main>
    <section class="container section hero-section">
      <h1 class="hero-section-heading">NodePress</h1>
      <div class="hero-section-content">
        NodePress is open source software you can use to create a beautiful
        website, blog, or app
      </div>
    </section>
    <section class="container section news-section clearfix">
      <div data-content="newsfeature">
        <div class="clear-fix">
          <article class="card-post card-post-feature">
            <a href="post.html"
              ><img src="/images/post-image.png" alt="Flower and sky"
            /></a>
            <h2 class="card-post-title">
              <a href="post.html">Điều gì khiến NestJS trở nên phổ biến?</a>
            </h2>
            <div class="card-post-description">
              NestJS là một framework mã nguồn mở NodeJS, được xây dựng trên nền
              tảng typescript. Hỗ trợ kiến trúc monolith cũng như microservice.
            </div>
          </article>

          <article
            v-for="i in [1, 2]"
            :key="i"
            class="card-post card-post-picked"
          >
            <a href="post.html"
              ><img src="/images/post-image.png" alt="Flower and sky"
            /></a>
            <h3 class="card-post-title">
              <a href="post.html">Làm thế nào để áp dụng MVC với NestJS?</a>
            </h3>
          </article>
        </div>
      </div>
      <div data-content="newstrending">
        <article
          v-for="i in [1, 2, 3, 4, 5]"
          :key="i"
          class="card-post card-post-feature"
        >
          <a href="post.html"
            ><img src="/images/post-image.png" alt="Flower and sky"
          /></a>
          <h4 class="card-post-title">
            <a href="post.html">Làm thế nào để áp dụng MVC với NestJS?</a>
          </h4>
        </article>
      </div>
    </section>
    <section class="container section clearfix">
      <div class="content md:w-2/3 md:float-left">
        <div
          v-for="i in [1, 2, 3, 4, 5, 6]"
          :key="i"
          class="card card-post md:flex mb-4"
        >
          <a href="post.html" class="card-image"
            ><img class="w-96" src="/images/post-image.png" alt="flower sky"
          /></a>
          <div class="card-post-meta px-0 mt-2 md:px-4 md:mt-0">
            <h3 class="card-post-title">
              <a href="post.html">NestJS là gì?</a>
            </h3>
            <div>
              <a href="./category.html" class="card-post-category">Category</a>
            </div>
            <div><span class="card-post-date">19/01/2022</span></div>
            <div class="card-post-description">
              NestJS là 1 framework nodejs sử dụng typescript, hỗ trợ phát triển
              ứng dụng web, api.
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar md:w-1/3 md:float-left">
        <div class="theiaStickySidebar">
          <div class="sidebar-widget px-4">
            <div class="sidebar-widget-title font-heading">
              HÃY KHÁM PHÁ THÊM CÁC CHỦ ĐỀ THÚ VỊ KHÁC BÊN DƯỚI
            </div>
            <div class="sidebar-widget-content p-4 flex flex-wrap flex-row">
              <a
                v-for="i in [1, 2, 3, 4, 5, 6]"
                :key="i"
                href="./category.html"
                class="m-1 p-1 text-xs font-bold leading-none border border-gray-200 bg-white"
                >software architecture</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
