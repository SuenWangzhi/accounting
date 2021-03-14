<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
document.body.parentNode.style.overflow = "hidden";//隐藏窗口滚动条
</script>

<style lang="scss">
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  color: #333;
}
body{
  line-height: 1.5;
}
a{
  text-decoration: none;
  color:inherit;
}
#app{
  max-width: 460px;
  margin: 0 auto;
}
</style>
