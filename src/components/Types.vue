<template>
     <div class="moneytype">
              <div @click="selectType('-')" :class="type==='-'&&'selected'" class="changitem">支出</div>
              <div @click="selectType('+')" :class="type==='+'&&'selected'" class="changitem">收入</div>
            </div>
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
@Component
export default class Types extends Vue{
    type= '-'
    selectType(type:string){
        this.type=type
        this.$emit('updataType', this.type)
    }
}
</script>

<style lang="scss" scoped>
.moneytype{
    height: 32px;
    width: 60%;
    background-color: #81A4DE;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin:0 auto;
    border-radius: 6px;
    .changitem{
      width: 48%;
      border-radius: 7px;
      height: 24px;
    }
    .selected.changitem{
      background-color: #fff;
    }
  }
</style>