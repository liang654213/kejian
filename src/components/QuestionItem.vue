<template>
 <div class="item-content">

      <!-- {
                        "createTime": 1597030865000,
                        "delFlag": "0",
                        "id": 285,
                        "num": 0,
                        "questionType": "1",
                        "sjIntroduction": "计算机基本知识",
                        "stAnalysis": "JEIIXJIEJXIJIEXIJEIX",
                        "stAnswer": "B",
                        "stContent": "多数轿车更换发动机机油的周期里程为________km。",
                        "stScore": 10,
                        "stSelect1": "2000--3000",
                        "stSelect2": "5000--8000",
                        "stSelect3": "10000--12000",
                        "stSelect4": "14000--16000",
                        "stType": "1",
                        "right_ans": [1,3]		//会给你个这个字段
                    } -->


    <br><p class="item-content-head">{{que.stContent}}</p><br>
    A：  <el-checkbox v-model="checked1"  :label=que.stSelect1 border :id="'ck1_'+(que.id)"></el-checkbox>
        <i class="el-icon-check" style="color: green;" v-if="r_1"></i>
        <i class="el-icon-close" style="color: red;" v-if="w_1"></i>
    <br><br>
    B： <el-checkbox v-model="checked2" :label=que.stSelect2 border :id="'ck2_'+(que.id)" ></el-checkbox>
        <i class="el-icon-check" style="color: green;" v-show="r_2"></i>
        <i class="el-icon-close" style="color: red;" v-show="w_2"></i>
    <br><br>
    C： <el-checkbox v-model="checked3" :label=que.stSelect3 border :id="'ck3_'+(que.id)" ></el-checkbox>
        <i class="el-icon-check" style="color: green;" v-show="r_3"></i>
        <i class="el-icon-close" style="color: red;" v-show="w_3"></i>
    <br><br>
    <div v-if = "que.stSelect4 != ''">
    D： <el-checkbox v-model="checked4" :label=que.stSelect4 border :id="'ck4_'+(que.id)" ></el-checkbox>
        <i class="el-icon-check" style="color: green;" v-show="r_4"></i>
        <i class="el-icon-close" style="color: red;" v-show="w_4"></i>
    <br><br>
    </div>

    <el-button size="medium" v-on:click="ck_qus()" type="primary" plain style="margin-left:90%;">提交</el-button>
  </div>
  
</template>

<script>
export default {
  name: "QuestionItem",
  props: {
    que: {
      type: Object,
      default: {}
    },
    // img: {
    //   type: String,
    //   default: "../assets/img/bgtop.jpg"
    // }
  },
  data () {
      return {
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checkboxGroup1: [],
        checkboxGroup2: [],
        r_1: false,
        r_2: false,
        r_3: false,
        r_4: false,
        w_1: false,
        w_2: false,
        w_3: false,
        w_4: false,
      };
    },
    mounted() {
        console.log(this.que);
  },
  methods:{
      change_icon(index,v1,v2){
          let flag = v1 ^ v2
          if(index == 1){
              this.w1 = flag
              this.r1 = !flag
            //   alert(this.r1)
              
          }
          if(index == 2){
              this.w2 = flag
              this.r2 = !flag
          }
          if(index == 3){
              this.w3 = flag
              this.r3 = !flag
          }
          if(index == 4){
              this.w4 = flag
              this.r4 = !flag
          }
      },
      ck_qus(){
          let r_ans = [0,0,0,0,0]
          for(let i = 0; i < this.que.right_ans.length; i++){
              r_ans[parseInt(this.que.right_ans[i])] = 1;
          }
          for(let i = 1; i <= 4; i++){
              let id = "ck" + String(i) + "_" + String(this.que.id)
              let obj = document.getElementById(id);
              let ck = i >= 3 ? (i == 4 ? this.checked4 : this.checked3) : (i == 1 ? this.checked1 : this.checked2)
              let r_ck = r_ans[i]
              if(r_ck && !ck){//漏选
                obj.style.borderColor = "gray";
                this.change_icon(i,ck,r_ck)
              }
              if(!r_ck && ck){//漏选
                obj.style.borderColor = "red";
                this.change_icon(i,ck,r_ck)
              }
              if(r_ck && ck){//漏选
                obj.style.borderColor = "green";
                this.change_icon(i,ck,r_ck)
              }
          }
        //   var obj = document.getElementById("ck1");
        //   obj.style.borderColor= "red";
          //green
          
      },
  }
};
</script>

<style lang="scss" scoped>
.item-content {
  width: 80%;
  margin-left: 10%;
}
  
.item-content-head{
    font-size: 23px;

}
//   position: relative;
//   overflow: hidden;
//   background-color: #fff;

//   &-title {
//     position: absolute;
//     color: #fff;
//     font-size: 45px;
//     font-weight: 400;
//     line-height: 300px;
//     text-align: center;
//     width: 100%;
//   }
</style>