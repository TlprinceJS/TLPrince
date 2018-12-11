<!-- 古风页面 -->
<template>
  <!-- 古风页面  start -->
  <div class="gufeng_page">
    <section class="gufeng">
      <ul class="nav nav-tabs">
        <li role="presentation" class="active"><router-link :to="{name:'Picture'}">古风图片</router-link></li>
        <li role="presentation"><router-link :to="{name:'Sentence'}">古风句子</router-link></li>
        <li role="presentation"><router-link :to="{name:'WebName'}">古风网名</router-link></li>
        <li role="presentation"><router-link :to="{name:'Gfcomic'}">动漫</router-link></li>
      </ul>
      
      <router-view></router-view>
      <!-- 美文小说  start -->
      <div class="row article_list">
        <h2 class="page-header">
          美文小说
        </h2>
        <div class="col-md-12 r_img">
          <img src="http://www.xingmaow.com/Public/home/images/create-img4.png" alt="" width="100%" height="80%">
        </div>
        
        <div class="col-md-4 col-sm-3 col-xs-12" v-for="item in GuFengData.articleDataArr" :key="item.list">
          <div class="cover_img">
            <a :href="item.url">
              <img :src="item.img_src" alt="" width="100%" height="100%">
            </a>
          </div>
          
          <div class="introduce">
            <span class="title">{{item.title}}</span>
            <span class="description">{{item.description}}</span>
            <span class="author">作者：{{item.author}}</span>
          </div>
        </div>
      </div>
      <!-- 美文小说  end -->

       <div class="row hot_list">
        <h2 class="page-header">
          热门推荐
        </h2>
        <div class="col-md-3 col-sm-4 col-xs-6" v-for="item in GuFengData.hotDataArr" :key="item.list">
          <a :href="item.url">
            <img :src="item.img_src" alt="" class="img-responsive" width="100%" height="100%">
          </a>
          <div style="text-align:center" class="comment">
            <p><a :href="item.url">{{item.title}}</a></p>
          </div>
        </div>
      </div>

    </section>
  </div>
  <!-- 古风页面  end -->
</template>

<script>
import axios from 'axios'
import '../../static/css/gufeng/gufeng.css'
export default {
    data () {
        return {
            GuFengData:[],
        };
    },

    created(){
        this.getdata()
    },
    mounted(){
      this.navActive()
    },
    methods: {
        // 请求数据
        getdata(){
            axios.get("/gufeng").then(res => {
                console.log(res.data.result)
                this.GuFengData = res.data.result
            })
        },
        navActive(){
          $('.nav-tabs li').on('click', function(){
            $(this).addClass('active')
            $('.nav-tabs li').not($(this)).removeClass('active')
          })
        }
    }
}

</script>
<style scoped>
</style>