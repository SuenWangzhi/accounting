<template>
    <div class="nav-wrapper">
<div class="content">
    <slot/>
</div>
<Nav/>
    </div>
</template>

<script lang="ts">
export default {
  name: 'Layout'
}
</script>

<style lang="scss" scoped>
.nav-wrapper{
    display:flex;
    height: 100vh;
    flex-direction: column;
}
.content{
    flex-grow: 1;
    border: 1px solid blue;
    overflow: auto;
}
</style>
