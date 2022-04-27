<template>
  <div id="app">
    <el-row :gutter="10">
  <el-col :span="12">
      <div class="grid-content bg-purple" id="div1">
        <router-link 
                :to="{ name: 'fire'}"
              >
                <el-link type="info" class="inspan">
                <span >火灾逃生 >>></span>
                </el-link>
            </router-link>
       <!-- </el-link> -->
    </div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple" id="div2">
      <router-link 
                :to="{ name: 'fall'}"
              >
                <el-link type="info" class="inspan">
                <span >高空坠落 >>></span>
                </el-link>
            </router-link>
      </div></el-col>
</el-row>
  </div>
</template>
<style>
    #div1{  
        background-image: url(../assets/img/fire.jpg);
        background-size:100%;
        background-repeat: inherit;

    }
    #div1 .inspan{
        /* width: 100%; */
        left:15%;
        top:43%;
        vertical-align: center;
        text-align:center;
        position: absolute;
        font-size: 50px;
        color: whitesmoke;
        /* text-decoration:underline; */
        font-weight: bold;
    }

    #div2{  
        background-image: url(../assets/img/gaokong.png);
        background-size:100%;
        background-repeat: inherit;

    }
    #div2 .inspan{
        /* width: 100%; */
        left:68%;
        top:43%;
        vertical-align: center;
        text-align:center;
        position: absolute;
        font-size: 50px;
        color: rgb(212, 11, 11);
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
        left:77%;
        top:43%;
        vertical-align: center;
        text-align:center;
        position: absolute;
        font-size: 50px;
        color: whitesmoke;
        /* text-decoration:underline; */
        font-weight: bold;
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

