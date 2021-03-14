<template>
    <div>
        <header class="header">
            <a href="#/bill" class="back">ab</a>
            <Types/>
        </header>
        <div class="count">
        <div class="count-left">
          <icon iconid="daily"/><span class="type">日常</span>
        </div> 
        <span id="countmony">100.00</span>
        </div>
        <ul class="itemwrapper">
          <li>
            <icon iconid="daily"/>
            <div>日常</div>
          </li>
          <li>
            <icon iconid="restaurant"/>
            <div>餐饮</div>
          </li>
          <li>
            <icon iconid="shopping"/>
            <div>购物</div>
          </li>
          <li>
            <icon iconid="traffic"/>
            <div>交通</div>
          </li>
          <li>
            <icon iconid="entertainment"/>
            <div>娱乐</div>
          </li>
          <li>
            <icon iconid="learn"/>
            <div>学习</div>
          </li>
          <li>
            <icon iconid="sport"/>
            <div>运动</div>
          </li>
          <li>
            <icon iconid="house"/>
            <div>住房</div>
          </li>
          <li>
            <icon iconid="watele"/>
            <div>水电网</div>
          </li>
          <li>
            <icon iconid="medical"/>
            <div>医药</div>
          </li>
        </ul>
        <NumberPad/>
    </div>
</template>

<script lang='ts'>
import NumberPad from "@/components/NumberPad.vue"
export default {
  components: { NumberPad },
  name: 'Accounting'
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: 56px;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  text-align: center;
  padding:12px 0;
  .back{
    position: absolute;
    left: 20px;
  }
}
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
