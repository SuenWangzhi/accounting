<template>
    <div class="numberPad">
<div class="output">
    <label for="remarks">备注：</label>
    <input id="remarks" type="text"/>
</div>
<div class="buttons">
    <button>1</button>
    <button>4</button>
    <button>7</button>
    <button>.</button>
    <button>2</button>
    <button>5</button>
    <button>8</button>
    <button>0</button>
    <button>3</button>
    <button>6</button>
    <button>9</button>
    <button class="delete">x</button>
    <button class="addnumber">+</button>
    <button class="jiannumber">-</button>
    <button class="ok">OK</button>
</div>
    </div>
</template>

<script lang="ts">

export default{
    name: 'NumberPad'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
    width: 100%;
    @keyframes upscoll {
        0%{
            transform:translateY(304px)
        }
        100%{
            transform:translateY(0px)
        }
    }
      position: absolute;
      bottom: 0;
      height: 304px;
      animation: upscoll 0.6s;
    .output {
      @extend %clearFix;
      @extend %innerShadow;
      font-size: 26px;
      line-height: 36px;
      font-family: Consolas, monospace;
      padding: 6px 20px;
      text-align: left;
      height: 48px;
      background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);

    }
    .buttons {
      background-color:#F2F2F4;
      width: 100%;
      height: 256px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: space-evenly;
      padding: 8px 0 16px 0;
        button {
        width: 22%;
        height: 50px;
        float: left;
      background-color:#FDFDFE;
        border-radius:27px;
        border: none;
        font-size: 18px;
        font-weight: bolder;
        margin-top: 8px;
        &.ok {
          flex-grow: 1;
          border-radius: 500px;
        }
        &.zero {
          width: 25*2%;
        }
      }
    }
  }
</style>