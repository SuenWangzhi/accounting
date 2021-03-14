<template>
    <div class="numberPad">
<div class="output">
    <div class="output">aa:{{output}}</div>
    <label for="remarks">备注：</label>
    <input id="remarks" v-model="value" placeholder="输入备注信息" type="text"/>
</div>
<div class="buttons">
    <button @click="inputContent">1</button>
    <button @click="inputContent">4</button>
    <button @click="inputContent">7</button>
    <button @click="inputContent">.</button>
    <button @click="inputContent">2</button>
    <button @click="inputContent">5</button>
    <button @click="inputContent">8</button>
    <button @click="inputContent">0</button>
    <button @click="inputContent">3</button>
    <button @click="inputContent">6</button>
    <button @click="inputContent">9</button>
    <button @click="clear">清空</button>
    <button @click="remove" class="del">Del</button>
    <button @click="ok" class="ok">OK</button>
</div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
@Component
export default class NumberPad extends Vue{
    output = '0';
    value = ''
    onInput(event:KeyboardEvent){
      const input = event.target as HTMLElement;
      this.value = input.value
    }
    inputContent(event: MouseEvent) {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent!;
      if (this.output.length === 16){ return; }
      if (this.output === '0') {
        if ('0123456789'.indexOf(input) >= 0) {
          this.output = input;
        } else {
          this.output += input;
        }
        return;
      }
      if (this.output.indexOf('.') >= 0 && input === '.') {return;}
      this.output += input;
      console.log(this.output)
    }
     remove() {
      if (this.output.length === 1) {
        this.output = '0';
      } else {
        this.output = this.output.slice(0, -1);
      }
    }

    clear() {
      this.output = '0';
    }

    ok() {
      const number = parseFloat(this.output);
      this.$emit('update:value', number);
      this.$emit('submit', number);
      this.output = '0';
    }
}
</script>
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
    width: 100%;
    max-width: 460px;
    @keyframes upscoll {
        0%{
            transform:translateY(292px)
        }
        100%{
            transform:translateY(0px)
        }
    }
      position: absolute;
      bottom: 0;
      height: 292px;
      animation: upscoll 0.6s;
    .output {
      @extend %clearFix;
      @extend %innerShadow;
      font-size: 26px;
      display: flex;
      align-items: center;
      font-family: Consolas, monospace;
      padding: 0px 20px;
      text-align: left;
      height: 48px;
      background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
      #remarks{
        font-size:16px;
        height: 30px;
      }
    }
    .buttons {
      background-color:#F2F2F4;
      width: 100%;
      height: 244px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: space-evenly;
      padding: 6px 0 14px 0;
        button {
        width: 22%;
        height: 48px;
        float: left;
        background-color:#FDFDFE;
        border-radius:27px;
        border: none;
        font-size: 18px;
        font-weight: bolder;
        margin-top: 8px;
        outline:none; 
        &.del {
          flex-grow: 1;
        }
        &.ok{
          flex-grow: 7;
          border-radius: 500px;
          margin-top: 14px;
        }
      }
    }
  }
</style>