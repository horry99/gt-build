<template>
  <div class="aui-wrapper aui-page__not-found">
    <div class="aui-content__wrapper">
      <div class="aui-content">
        <h2 class="title">404</h2>
        <p class="desc">
          抱歉！您访问的页面
          <em>失联</em>啦...
        </p>
        <div class="btn-bar">
          <button @click="$router.go(-1)">上一页</button>
          <button class="primary" @click="$router.push({ name: 'home' })">首页</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>
