<!--  -->
<template>
  <div>
      <div class="row img_list">
        <h2 class="page-header">
          图片榜单
        </h2>
        <div class="col-md-12">
          <img src="http://www.xingmaow.com/Public/home/images/create-img5.png" alt="" width="100%" height="100%">
        </div>
        <div class="col-md-3 col-sm-4 col-xs-6" v-for="item in GuFengData.imgDataArr" :key="item.list">
          <a :href="item.url">
            <img :src="item.img_src" alt="" class="img-responsive" width="100%" height="100%">
          </a>
          <div style="text-align:center" class="comment">
            <p><a :href="item.url">{{item.title}}</a></p>
            <p>{{item.time}} / <i style="color:red">{{item.populition}}人气</i></p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
        GuFengData:[]
    };
  },
  
  created(){
      this.getdata()
  },
  components: {},

  computed: {},

  methods: {
    getdata(){
        axios.get("/gufeng").then(res => {
            console.log(res.data.result)
            this.GuFengData = res.data.result
        })
    }
  }
}

</script>
<style scoped>
.gufeng_page .row{
    margin: 0 15px
  }
  .gufeng_page .row > div{
    padding: 0 10px;
    margin-bottom: 15px;
  }
  .gufeng_page .row > div .comment{
  }
  .gufeng_page .row > div p{
    font-size: 14px;
    margin: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .gufeng_page .row > div img{
    border: 1px solid transparent;
    border-radius: 10px;
  }
  .gufeng_page .row > div img:hover{
    border: 1px solid pink;
    box-shadow: 0px 0px 2px 2px pink
  }
  .gufeng_page .img-responsive{
    width: 268px;
    height: 188px;
  }
</style>