<template>
    <nav id="#nav">
      <router-link to="/bill" class="iconitem" active-class="selected">
      <Icon iconid="bill"/>
      账单</router-link>
      <router-link to="/accounting" class="iconitem" active-class="selected">
      <Icon iconid="add"/>
      记账</router-link>
      <router-link to="/chart" class="iconitem" active-class="selected">
      <Icon iconid="chart"/>
      图表</router-link>
    </nav>
</template>

<script lang="ts">

import x from '@/assets/icons/bill.svg'
console.log("aaaa"+x)

export default {
  data(){
    return {
      activeClass: 0
    }
  },
  name: 'Nav'
}
</script>

<style  lang="scss" scoped>
nav{
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,0.2); 
  color:#A49E9E;
  .iconitem{
    $width:100% ;
    width: $width/3;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 3px 0 2px 0;
    font-size: 12px;
    .icon{
      width: 28px;
      height: 28px;
    }
  }
  .iconitem.selected{
    color:#5796FF;
    font-weight: bloder;
  }
}
</style>
