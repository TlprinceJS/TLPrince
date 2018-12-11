<!--  -->
<template>
  <div>
      <div class="row img_list">
        <h2 class="page-header">
          古风句子
        </h2>
        <div class="col-md-12">
          <img src="http://www.xingmaow.com/Public/home/images/create-img5.png" alt="" width="100%" height="100%">
        </div>
        <div class="col-md-3 col-sm-4 col-xs-6" v-for="item in GuFengData.sentenceDataArr" :key="item.list">
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
</style>