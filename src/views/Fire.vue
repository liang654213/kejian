<template>
  <div class="go-in">
    <banner img="../assets/img/bgtop.jpg" title="火灾逃生" />
    <div class="section" v-loading="loading">
      <div class="section-content">
        <el-divider class="el-divider-active">
          <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
        </el-divider>
        <!-- 发展历程 -->
        <div class="content-course">
          <div class="top">
            <h3>火灾逃生</h3>
            <p>Fire Escape</p>
            <div class="border"></div>
            <div class="timeline"></div>
          </div>
          <div class="course-time">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="(item,index) in courseList" :key="index">
                <div class="time-show">
                  <div class="time-show-item" v-for="(courseOne,one) in item" :key="one">
                    <div class="item-top" :class="{'order-top' : one%2===1}"></div>
                    <el-divider>
                      <i class="el-icon-mobile-phone"></i>
                    </el-divider>
                    <div class="item-bottom" :class="{'order' : one%2===1}">
                      <div class="item-bottom-content">
                        <p>{{courseOne.Content}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    Banner,
    swiper,
    swiperSlide
  },
  data() {
    return {
      loading: true,
      honorList: [],
      partnerImg: [],
      courseList: [],
      teamItem: [],
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      dialogTableVisible: false,
      dialogUrl: "",
      dialogTitle: ""
    };
  },
  mounted() {
    this.$http
      .all([
        this.$http.get("Honor/GetHonorAll"),
        this.$http.get("Enterprise/GetEnterpriseAll"),
        this.$http.get(`Team/GetTeamAll`),
        this.$http.get(`Course/GetCourseAll`)
      ])
      .then(
        this.$http.spread(
          (responseHonor, responseEnterprise, responseTeam, responseCourse) => {
            this.honorList = responseHonor.data;
            this.partnerImg = responseEnterprise.data;
            this.teamItem = responseTeam.data;
            let dd = [
                {Content: "火情预警"},
                {Content: "抢救伤员"},
                {Content: "局部灭火"},
                {Content: "抢救现场"},
                {Content: "隔离易燃物"},
                {Content: "疏散人群"},
                {Content: "现场保护"},
                {Content: "合力灭火"},
                {Content: "事故调查"}
            ];
            var groupCount = Math.ceil(dd.length / 2);
            window.console.log(groupCount);
            for (let i = 0; i < groupCount; i++) {
              let img2 = [];
              for (let j = 0; j < 2; j++) {
                if (dd.length - 1 >= i * 2 + j) {
                  img2.push(dd[i * 2 + j]);
                }
              }
              this.courseList.push(img2);
            }
            // this.courseList = [
            //     {Content: "111"},
            //     {Content: "222"},
            //     {Content: "333"},
            //     {Content: "444"}
            // ];
            window.console.log(this.courseList);
            this.loading = false;
          }
        )
      );
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.go-in {
  width: 100%;
  height: 100%;
  background-color: #14679f;
  position: relative;
  overflow: hidden;
  .section {
    width: 100%;
    &-content {
      width: 1240px;
      margin: 0 auto;
      background-color: #fff;

      .content-summary {
        //height: 500px;
        display: flex;
        justify-content: space-around;
        padding: 100px 0;
        .summary-left {
          width: 600px;
          .title {
            font-size: 25px;
            color: #e13834;
          }
          .eTitle {
            font-size: 17px;
            color: #e13834;
            padding: 20px 0;
          }
          .content {
            color: #14679f;
            font-size: 14px;
            text-indent: 25px;
            line-height: 30px;
          }
        }

        .summary-right {
          width: 400px;
          height: 310px;
          border: 2px solid #1d42b9;
          //animation: imgboxkey 4s infinite;
          border-radius: 10px;
          margin-top: 80px;
          text-align: center;

          img {
            width: 360px;
            height: 270px;
            margin-top: 20px;
            //animation: imgbo 4s infinite;
          }
        }
      }

      //发展历程
      .content-course {
        padding: 50px 0;
        .course-time {
          width: 1000px;
          height: 400px;
          margin: 20px auto;
          .swiper-container {
            height: 100%;
          }
          .time-show {
            width: 700px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            .time-show-item {
              width: 350px;
              height: 100%;
              overflow: hidden;
              display: flex;
              flex-direction: column;

              .item-top,
              .item-bottom {
                height: 100px;
              }
              .item-bottom {
                // display: flex;
                // align-content: center;
                .item-bottom-content {
                  background-color: #1667a0;
                  margin: 20px 0;
                  p {
                    color: #fff;
                    text-align: center;
                    padding: 15px;
                  }
                }
              }
            }
          }
        }
      }

      //企业文化
      .content-culture {
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 100px;
        background-color: #c2daeb;
        h3 {
          color: #3c6088;
          font-size: 26px;
        }
        p {
          color: #3c6088;
          font-size: 26px;
          padding: 5px 0;
        }
        span {
          font-weight: 400;
          line-height: 36px;
          font-size: 18px;
          padding: 5px 0;
        }
      }

      //公司荣誉
      .content-honor {
        padding: 50px 0;
        .honor-show {
          width: 1000px;
          margin: 30px auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-content: flex-start;

          li {
            width: 220px;
            height: 320px;
            margin-left: 15px;
            list-style: none;
            border: 1px solid palegoldenrod;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        p {
          text-align: center;
          color: #3c6088;
        }
      }

      //团队风采
      .content-team {
        padding: 50px 100px;
        .swiper-img {
          height: 400px;
          background: no-repeat center;
          background-size: cover;
        }
      }

      //合作伙伴
      .content-partner {
        padding: 50px 0;
        .partner-img {
          width: 950px;
          margin: 20px auto;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          li {
            width: 107px;
            height: 107px;
            list-style: none;
            margin: 10px 25px;

            img {
              width: 100%;
              height: 100%;
              border: 1px solid rgb(194, 218, 235);
            }
          }
        }
      }
    }
  }
}

@keyframes imgboxkey {
  0% {
    border: solid rgb(29, 66, 185) 2px;
  }
  40% {
    border: solid rgb(255, 255, 255) 2px;
  }
  60% {
    border: solid rgb(255, 255, 255) 2px;
  }
  100% {
    border: solid rgb(29, 66, 185) 2px;
  }
}

@keyframes imgbo {
  0% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px #ababab;
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px 5px #ababab;
  }
  100% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px #ababab;
  }
}
.el-divider--horizontal {
  margin: 1px 0;
}

.top {
  h3,
  p {
    text-align: center;
    color: #3c6088;
    font-weight: 400;
    padding: 10px 0;
  }
  h3 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
  .border {
    border-bottom: 1px solid #3c6088;
    width: 15%;
    margin: 0 auto;
  }
}
// .swiper-button-disabled {
//   display: none;
// }
.order {
  order: -1;
}
.order-top {
  order: 1;
}
.el-divider {
  background-color: red;
  height: 3px;
  .el-divider__text {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 0px;
    color: #fff;
    border: 3px solid red;
  }
}
.el-divider-active {
  background-color: #3c6088;
}
.honor-big-img {
  width: 100%;
  height: 100%;
  z-index: 10;
  text-align: center;
  padding-bottom: 20px;
  padding: 5%;
  //background-color: #14679f;
  .el-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;

    .el-dialog__body {
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
}
</style>


// driver.find_element_by_xpath('/html/body/uni-app/uni-tabbar/div[1]/div[5]/div/div[1]').click()