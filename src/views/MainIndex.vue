<template>
  <div id="app">
    <el-row :gutter="10">
  <el-col :span="6">
      <div class="grid-content bg-purple" id="div1">
        <router-link 
                :to="{ name: 'que-index'}"
              >
                <el-link type="info" class="inspan f-s">
                <span >安全知识学习<br>与测试>>></span>
                </el-link>
            </router-link>
       <!-- </el-link> -->
    </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple" id="div2">
      <router-link 
                :to="{ name: 'vrhome'}"
              >
                <el-link type="info" class="inspan f-s">
                <span >"造梦空间"<br>模拟体验 >>></span>
                </el-link>
            </router-link>
      </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple" id="div3">
      <router-link 
                :to="{ name: 'seevedio'}"
              >
                <el-link type="info" class="inspan f-s">
                <span >典型事故<br>警醒与教育 >>></span>
                </el-link>
            </router-link>
      </div></el-col>
  <!-- <el-col :span="6"><div class="grid-content bg-purple"></div></el-col> -->
  <el-col :span="6"><div class="grid-content bg-purple" id="div4">
      <router-link 
                :to="{ name: 'userhome'}"
              >
                <el-link type="info" class="inspan f-s">
                <span >个人中心 >>></span>
                </el-link>
            </router-link>
      </div></el-col>
</el-row>
  </div>
</template>
<style>
    
    #div1{  
        background-image: url(../assets/img/img1.png);
        background-size:100%;
        background-repeat: inherit;

    }
    #div1 .inspan{
        /* width: 100%; */
        left:4%;
        top:43%;
        vertical-align: center;
        text-align:center;
        position: absolute;
        /* font-size: 30px; */
        color: whitesmoke;
        /* text-decoration:underline; */
        font-weight: bold;
    }

    #div2{  
        background-image: url(../assets/img/img3.png);
        background-size:100%;
        background-repeat: inherit;

    }
    #div2 .inspan{
        /* width: 100%; */
        left:29%;
        top:43%;
        vertical-align: center;
        text-align:center;
        position: absolute;
        /* font-size: 50px; */
        color: whitesmoke;
        /* text-decoration:underline; */
        font-weight: bold;
    }

    #div3{  
        background-image: url(../assets/img/img2.png);
        background-size:100%;
        background-repeat: inherit;

    }
    #div3 .inspan{
        /* width: 100%; */
        left:53%;
        top:43%;
        vertical-align: center;
        text-align:center;
        position: absolute;
        /* font-size: 50px; */
        color: whitesmoke;
        /* text-decoration:underline; */
        font-weight: bold;
    }
    #div4{  
        background-image: url(../assets/img/img1.png);
        background-size:100%;
        background-repeat: inherit;

    }
    #div4 .inspan{
        /* width: 100%; */
        left:79%;
        top:43%;
        vertical-align: center;
        text-align:center;
        position: absolute;
        /* font-size: 50px; */
        color: whitesmoke;
        /* text-decoration:underline; */
        font-weight: bold;
    }
    .f-s{
      font-size: 40px;
    }

  .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 0px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 0px;
    min-height: 770px;
  }
  .row-bg {
    /* padding: 10px 0; */
    background-color: #f9fafc;
  }



</style>
<script>
export default {
  data() {
    return {
      router: true,
      defaultActive: "/",
      isShow: false
    };
  },
  methods: {
    handleSelect(key) {
      this.isShow = this.defaultActive != key;
      window.console.log(this.isShow);
    }
  }
};
</script>

