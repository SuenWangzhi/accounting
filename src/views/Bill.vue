<template>
    <div>
      <Layout>
        <div class="banner">

        </div>
        <ul>
          <li>
            <Icon iconid="medical"/>
            <div class="remarks">
              <div class="tagword">医药</div>
              <div class="remark">这里是备注</div>
            </div>
            <span class="amount">-20</span>
          </li>
          <li>
            <Icon iconid="medical"/>
            <div class="remarks">
              <div class="tagword">医药</div>
              <div class="remark">这里是备注</div>
            </div>
            <span class="amount">-20</span>
          </li>
          <li>
            <Icon iconid="medical"/>
            <div class="remarks">
              <div class="tagword">医药</div>
              <div class="remark">这里是备注</div>
            </div>
            <span class="amount">-20</span>
          </li>
          <li>
            <Icon iconid="medical"/>
            <div class="remarks">
              <div class="tagword">医药</div>
              <div class="remark">这里是备注</div>
            </div>
            <span class="amount">-20</span>
          </li>
          <li>
            <Icon iconid="medical"/>
            <div class="remarks">
              <div class="tagword">医药</div>
              <div class="remark">这里是备注</div>
            </div>
            <span class="amount">-20</span>
          </li>
          <li>
            <Icon iconid="medical"/>
            <div class="remarks">
              <div class="tagword">医药</div>
              <div class="remark">这里是备注</div>
            </div>
            <span class="amount">-20</span>
          </li>
          <li>
            <Icon iconid="medical"/>
            <div class="remarks">
              <div class="tagword">医药</div>
              <div class="remark">这里是备注</div>
            </div>
            <span class="amount">-20</span>
          </li>
          <li>
            <Icon iconid="medical"/>
            <div class="remarks">
              <div class="tagword">医药</div>
              <div class="remark">这里是备注</div>
            </div>
            <span class="amount">-20</span>
          </li>
          
        </ul>
      </Layout>
    </div>
</template>

<script lang='ts'>
import Layout from '@/components/Layout.vue'
export default {
  components: { Layout },
  name: 'Bill'
}
</script>

<style lang="scss" scoped>
.banner{
  width: 100%;
  height: 200px;
  background-color: #aaaaaa;
}
li{
  display: flex;
  justify-content: space-around;
  height: 60px;
  align-content: center;
  align-items: center;
  padding-left:24px ;
  padding-right:24px ;
  .icon{
    font-size: 40px;
    width: 40px;
  }
  .remarks{
  padding-left:12px ;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .tagword{
      font-size: 16px;
      font-weight: bold;
      color:#444
    }
    .remark{
      font-size: 12px;
      color:#888888;
    }
  }
  .amount{
    flex-grow: 1;
    text-align: right;
    font-size: 20px;
    font-weight: bold;
    color:#83AAEC ;
  }
}
</style>
