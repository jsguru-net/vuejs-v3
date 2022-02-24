<script setup></script>

<template>
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
</template>

<style lang="scss" scoped src="../styles/home.scss"></style>
