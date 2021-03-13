<template>
    <nav>
      <router-link to="/bill">
      <Icon iconid="bill"/>
      账单</router-link>
      <router-link to="/accounting">
      <Icon iconid="add"/>
      记账</router-link>
      <router-link to="/chart">
      <Icon iconid="chart"/>
      图表</router-link>
    </nav>
</template>

<script lang="ts">
import x from '@/assets/icons/bill.svg'
console.log("aaaa"+x)

export default {
  name: 'Nav'
}
</script>

<style  lang="scss" scoped>

</style>
