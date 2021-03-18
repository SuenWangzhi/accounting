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
    height: 100vh;
.content{
    height: calc(100vh - 56px);
    overflow: auto;
}
}

</style>
