<template>
    <div>
        <header class="header">
            <a href="#/bill" class="back">
              <Icon iconid="back"/>
            </a>
            <Types @updataType="onUpdataType"/>
        </header>
        <Tags :data-source.sync="tags" @selected="onSelected"/>
        <NumberPad  @updataAmount="onUpdataAmoun"/>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import NumberPad from "@/components/NumberPad.vue"
import Tags from "@/components/Tags.vue"
// type Record={
//   type:String
//   reamrks:String
//   amount:,
//   tags:[]
// }
@Component({
  components:{Tags,NumberPad}
})
export default class Accounting extends Vue{
    tags= [{icon:"daily",word:"日常"},
    {icon:"restaurant",word:"餐饮"},
    {icon:"shopping",word:"购物"},
    {icon:"traffic",word:"交通"},
    {icon:"entertainment",word:"娱乐"},
    {icon:"learn",word:"学习"},
    {icon:"sport",word:"运动"},
    {icon:"house",word:"住房"},
    {icon:"watele",word:"水电网"},
    {icon:"medical",word:"医药"}
]
record = {
  icon:"daily",word:"日常",type:"-",amount:0,remarks:""
}
recordList = JSON.parse(window.localStorage.getItem("recordList")||'[]')
onSelected(tag: {icon: string,word: string}){
  console.log(tag)
  this.record.icon=tag.icon
  this.record.word=tag.word
}
onUpdataType(type: string){
  this.record.type=type
}
onUpdataAmoun(remount:{remarks:string,amount: number}){
  this.record.amount=remount.amount
  this.record.remarks=remount.remarks
  const recard2 = JSON.stringify(this.record)
    console.log(this.recordList)
  this.recordList.push(recard2)
  window.localStorage.setItem("recordList",JSON.stringify(this.recordList))
  console.log(this.recordList)
} 
  
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
    float: left;
    margin:-8px 12px ;
    font-size: 30px;
  }
}
</style>
