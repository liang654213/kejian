<template>
  <div class="case">
    <banner img="../assets/img/bgtop.jpg" title="个人中心"/>
    <div class="case-product">
      <div class="case-product-content">
        <!-- <img v-lazy="imgserver+caseIdList.Img" alt /> -->
        <p class="product-title">个人积分说明：</p>
        <p class="product-content">1、使用本学习系统任一功能都可获得个人积分，具体详情为：每日题库练习上限+10分，每日模拟测试上限+10分，每日观影上限+4分，积分每一季度进行清零，体验者可在积分商店兑换相应实物奖励。</p>
        <p class="product-content">2、个人积分不可转移，不可赠送，每季度清零前会有信息提醒。</p>
        <p class="product-content">3、兑换实物奖励后扣除相应积分，请注意认真填写邮寄地址。</p>
        <p class="product-content">4、本玩法最终解释权归盗梦·建筑安全沉浸式学习系统所有。</p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  components: {
    Banner
  },
  data() {
    return {
      pid: 0,
      caseIdList: {}
    };
  },
  created() {
    this.pid = this.$route.params.id;
    window.console.log(this.pid);
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.$http
        .get(`Cases/GetCasesById/${this.pid}`)
        .then(response => {
          //console.log(response);
          this.caseIdList = response.data;
          window.console.log(this.caseIdList);
        })
        .catch(function(error) {
          window.console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.case {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #14679f;
  &-product {
    width: 1240px;
    margin: 0 auto;
    background-color: #fff;
    //border: 1px solid red;
    &-content {
      width: 760px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 50px 0;
      img {
        width: 100%;
        height: 430px;
      }
      .product-title {
        font-size: 25px;
        color: #e13834;
        padding: 20px 0;
      }
      .product-content {
        font-size: 17px;
        font-weight: bolder;
        padding: 20px 0;
      }
    }
  }
}
</style>