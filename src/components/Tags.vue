<template>
   <div>
       <div class="count">
        <div class="count-left">
          <icon :iconid="selected.icon"/><span class="type">{{selected.word}}</span>
        </div> 
        <span id="countmony"> {{amount}} </span>
        </div>
        <ul class="itemwrapper">
          <li @click=select(tag) v-for="tag in dataSource" :key="tag">
            <icon :iconid="tag.icon"/>
            <div>{{tag.word}}</div>
          </li>
        </ul>
   </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
@Component
export default class Tags extends Vue{
  selected = {icon:"daily",word:"日常"}
  amount = '0'
  @Prop() dataSource:object | undefined
  select(tag: { icon: string; word: string; }){
    this.selected = tag
    this.$emit('selected', this.selected)
  }
  // onUpdataAmoun(value: string){
  //   this.amount = parseFloat(value)
  // } 
}
</script>

<style lang="scss" scoped>
.count{
  display: flex;
  padding:2px 18px ;
  justify-content: space-between;
  align-items: center;
  font-size: 32px;
  height: 56px;
  border-bottom: solid 1px #f3f3f3;
  .icon{
    vertical-align:middle;
  }
  .type{
    font-size: 16px;
    margin-left:12px;
  }
}
.itemwrapper{
    display: flex;
    flex-wrap: wrap;
    li{
      width: 20%;
      text-align: center;
      list-style: none;
      padding-top: 12px;
      font-size: 12px;
      .icon{
        font-size: 42px;
      }
    }
  }

</style>