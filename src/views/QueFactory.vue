<template>
  <div class="case">
    <banner img="../assets/img/bgtop.jpg" :title="titile" />
         <div class="case-section" v-loading="loading">
            <div class="case-section-content">
                <div v-for="(que,index) in res.list" :key="index">
                    <div v-show="index === que_num">
                    <QuestionItem :que=que></QuestionItem><br>
                    <el-button type="text" class="nextbt" v-on:click="change_num()">下一题 >>></el-button>
                    </div>
                </div>
            </div>
            </div>
  </div>
</template>
<script>
import Banner from "../components/Banner";
import QuestionItem from "../components/QuestionItem";
export default {
  components: {
    Banner,
    QuestionItem
  },
  data() {
    return {
      que_num: 0,
      loading: false,
      caseList: [],
      question:[],
      titile :'模拟测试',
      res : {
                "count": 3,
                "list": [
                    {
                        "createTime": 1597030865000,
                        "delFlag": "0",
                        "id": 1,
                        "num": 0,
                        "questionType": "1",
                        "sjIntroduction": "计算机基本知识",
                        "stAnalysis": "JEIIXJIEJXIJIEXIJEIX",
                        "stAnswer": "B",
                        "stContent": "1.安全法的基本方针是（）",
                        "stScore": 10,
                        "stSelect1": "安全第一",
                        "stSelect2": "安全第一，预防为主",
                        "stSelect3": "安全第一、预防为主、综合治理",
                        "stSelect4": "",
                        "stType": "1",
                        "right_ans": [1,3]		//会给你个这个字段
                    },
                    {
                        "createTime": 1597030865000,
                        "delFlag": "0",
                        "id": 2,
                        "num": 0,
                        "questionType": "1",
                        "sjIntroduction": "计算机基本知识2",
                        "stAnalysis": "JEIIXJIEJXIJIEXIJEIX",
                        "stAnswer": "B",
                        "stContent": "2  多数轿车更换发动机机油的周期里程为________km。",
                        "stScore": 10,
                        "stSelect1": "2000--3000",
                        "stSelect2": "5000--8000",
                        "stSelect3": "10000--12000",
                        "stSelect4": "14000--16000",
                        "stType": "1",
                        "right_ans": [1,4]		//会给你个这个字段
                    },
                    {
                        "createTime": 1597030865000,
                        "delFlag": "0",
                        "id": 3,
                        "num": 0,
                        "questionType": "1",
                        "sjIntroduction": "计算机基本知识3",
                        "stAnalysis": "JEIIXJIEJXIJIEXIJEIX",
                        "stAnswer": "B",
                        "stContent": "3  多数轿车更换发动机机油的周期里程为________km。",
                        "stScore": 10,
                        "stSelect1": "2000--3000",
                        "stSelect2": "5000--8000",
                        "stSelect3": "10000--12000",
                        "stSelect4": "14000--16000",
                        "stType": "1",
                        "right_ans": [2]		//会给你个这个字段
                    }
                ],
    
        },
      
    };
  },
  created() {
    this.init()		//初始化函数
  },
  mounted() {
    // window.console.log("case");
    // this.$http
    //   .get("Cases/GetCasesAll")
    //   .then(response => {
    //     //console.log(response);
    //     this.caseList = response.data;
    //     //window.console.log(this.caseList);
    //     this.loading = false;
    //   })
    //   .catch(function(error) {
    //     window.console.log(error);
    //   });
  },
  methods: {
    change_num(){
        if(parseInt(this.res['count']) - 1 > parseInt(this.que_num)){
            this.que_num = this.que_num + 1;
        }else{
            alert("题目已全部做完");
        }
    },
	//给多选框用，否则会出现一个bug，就是先点一下多选框，然后没反应，
	//然后点一下按钮或者点击下拉框后，这个多选框就高亮了

	//初始化函数

    init() {
        if(this.$route.name == 'que-factory'){
          this.titile = '日常练习'
        }
        // var json = this.res.returnObject.list
        // for (let i = 0; i < json.length; i++) {
        
        //     //如果他是多选题的话，把它初始化为一个数组，而不是普通的字符串
            
        //     if (json[i].questionType == 3) {
        //         json[i].resource = []		
        //         //直接给每一项加一个resource属性，因为res.data他是一个对象，所以可以任意给他添加新的键值对
        //     }else{
        //         json[i].resource = ''
        //  }
        // }
        // this.question = json
  },
}
}
</script>

 <style lang="scss" scoped>
 .nextbt{
     margin-left: 82%;
 }
.case {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #14679f;

  &-section {
    width: 100%;
    &-content {
      width: 1240px;
      min-height: 1000px;
      margin: 0 auto;
      background-color: #fff;

      &-list {
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid pink;

        img {
          width: 612px;
          height: 314px;
        }
        .content-list-abstract {
          width: 290px;
          height: 350px;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .abstract-title {
            line-height: 30px;
            font-size: 22px;
            color: #e13834;
          }
          .abstract-content {
            height: 150px;
            color: #484848;
            font-size: 15px;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 7;
            -webkit-box-orient: vertical;
            white-space: normal !important;
            word-wrap: break-word;
            //border: 1px solid pink;
          }
          .more {
            display: flex;
            justify-content: flex-start;
            .text-decoration {
              text-decoration: none;

              span {
                color: #000;
              }
              img {
                width: 12px;
                height: 12px;
              }
            }
          }
        }
        .abstract-active {
          order: -1;
        }
      }
    }
  }
}
</style>