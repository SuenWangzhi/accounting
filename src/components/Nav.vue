<template>
    <nav id="#nav">
      <router-link @click.native="billactive" to="/bill" class="iconitem" active-class="selected bill">
      <Icon :iconid="bill1"/>
      账单</router-link>
      <router-link to="/accounting" class="iconitem" active-class="selected">
      <Icon id="add" iconid="add-active"/>
      </router-link>
      <router-link @click.native="chartactive" to="/chart" class="iconitem" active-class="selected">
      <Icon :iconid="chart1"/>
      图表</router-link>
    </nav>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
@Component
export default class Tags extends Vue{
  selected = {icon:"daily",word:"日常"}
  bill1= "bill-active"
  chart1= "chart"  
  billactive(){
    this.bill1 = "bill-active"
    this.chart1 = "chart"
    console.log(this.bill1+this.chart1)
  }
  chartactive(){
    this.bill1 = "bill"
    this.chart1 = "chart-active"
    console.log(this.bill1+this.chart1)
  }
}

  

</script>

<style  lang="scss" scoped>
nav{
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,0.2); 
  color:#A49E9E;
  height: 56px;
  .iconitem{
    $width:100% ;
    width: $width/3;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 6px 0 2px 0;
    font-size: 12px;
    .icon{
    font-size: 28px;
    }
    #add{
      margin-top: 2px;
    font-size: 38px;
    }
  }
  .iconitem.selected{
    color:#5796FF;
    font-weight: bloder;
  }
}
</style>
