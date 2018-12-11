<!-- 首页的文章列表页面 -->
<template>
  <div>
    <!-- 文章列表  start -->
    <div class="article_list_wrap row">

        <!-- 自我描述  start -->
        <div class="self_evaluation col-md-3 col-sm-4 col-xs-12">
            <div class="bg_self" style=""></div>
            <div class="avatar">
                <img src="../../static/images/bg_img/header.jpg" alt="" width="100" height="100">
            </div>
            <p class="name">TLPrince | 贾浩</p>
            <p class="position font_color_g">WEB前端工程师</p>
            <p class="summary">一个90后无名小站长，15年入行，热衷于前端开发，喜欢动漫与古风，一边学习一边积累经验，分享一些动漫和古风的资讯</p>

            <h3>微信</h3>
            <div class="weixin"></div>
        </div>
        
        <!-- 自我描述  end -->
        
        <!-- 文章列表内容  start -->
        <div class="col-md-7 col-sm-7 col-xs-12">
            <div class="article_list " v-for="item in articleListData" :key="item.list">
                <div class="row">
                    <div class="cover_img col-sm-4 col-md-4 col-xs-12">
                        <router-link :to="{name: 'articleDetial', params:{id: item._id}}" style="display: block">
                            <img :src="item.cover" alt="" width="100%" height="150px">
                        </router-link>
                        
                    </div>
                
                    <div class="introduce col-md-8 col-sm-8 col-xs-12">
                        <router-link :to="{name: 'articleDetial', params:{id: item._id}}">
                            <p class="title"><i class="iconfont icon-double-slash" style="color:red; "></i>{{item.title}}</p>
                        </router-link>
                        <p class="description" v-html="item.content"></p>
                    </div>
                    <div class="detials">
                        <span class="kind f_left font_color_g"><i class="iconfont icon-tag-copy" style="color:pink;font-weight:900"></i>{{item.kind}}</span>
                        <span class="time f_left"><i class="iconfont icon-msnui-time" style="color:skyblue"></i>{{item.created | date}}</span>
                        <span class="author f_left"><i class="iconfont icon-zuozhe"></i>{{item.author}}</span>
                        <router-link :to="{name: 'articleDetial', params:{id: item._id}}" class="f_right font_color_g read">阅读原文</router-link>
                        <span class="commentNum f_right"><i class="iconfont icon-pinglun"></i>({{item.commentNum}})</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 文章列表内容  end -->
        
    </div>
    <!-- 文章列表  end  -->
  </div>
</template>

<script>
import axios from 'axios'
import '../../static/iconfont/iconfont.css'
export default {
    data () {
        return {
            articleListData:[],
        };
    },

    created(){
        this.getArticleList()  
    },

    methods: {
        // 获取文章列表数据
        // author title cover time kind
        getArticleList(){
            const id = this.$route.params.id
            axios.get('/home/main/page/1').then( res => {
                this.articleListData =res.data
                //console.log(res.data)
            })
        }
    },

    watch: {
        '$route'(to, from){
            const id = to.params.id;
            axios.get(`/home/main/page/${id}`).then( res => {
                this.articleListData =res.data
            })
        }
    },
    
    filters: {
        date(value){
            const date = new Date(value)
            const year = date.getFullYear()
            const month = date.getMonth()+1
            const day = date.getDate()

            const hour = date.getHours()
            const minute = date.getMinutes()
            const second = date.getSeconds()

            return `${year}/${month}/${day} ${hour}:${minute}:${second}`
        }
    }
}

</script>
<style scoped>
    .f_left{
        float: left;
    }
    .f_right{
        float: right;
    }
    .font_color_g{
        color: #096;
    }
    .article_list_wrap{
        margin: 0;
        background: url('../../static/images/bg_img/9.jpg') no-repeat center/cover;
        font-size: 12px;
        color: #777
    }
    .article_list{
        margin: 15px 0px;
        padding: 15px 20px;
        transition: 0.5s;
        background: rgba(255, 255, 255, 0.7);
    }
    .article_list:hover{
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.9);
    }
    .introduce{
        height: 128px;
    }
    .article_list .introduce .title{
        margin: 10px 0;
        font-size: 1.25em;
        font-weight: bold;
        color: #777
    }
    .article_list .introduce .description{
        color: #777;
        height: 80px;
        line-height:1.5em;
        height:5.9em;
        overflow:hidden;
    }
    .article_list .detials{
        margin:10px 0 0 0;
        padding-top: 150px
    } 
    .article_list .detials i{
        margin: 0 5px 0 10px;
    }
    .article_list .detials .read, .commentNum{
        margin-right: 10px;
    }
    .self_evaluation{
        position: relative;
        background: url("../../static/images/main_img/2.jpg") no-repeat center/cover;
        height:400px;
        margin:15px 0px 0px 80px;
        padding: 0;
        text-align: center;
    }
    .self_evaluation .avatar{
        position: absolute;
        left: 50%;
        top: 60px;
        margin-left: -50px;
    }
    .self_evaluation .avatar img{
        border-radius: 50%;
    }
    .self_evaluation .bg_self{
        background: url("../../static/images/main_img/3.jpg") no-repeat center/cover;
        height: 130px;
    }
    .self_evaluation .name{
        color: #3f3f3f;
        font-weight: bold;
        font-size: 16px;
        margin:40px 0 10px 0;
        text-align: center; 
    }
    .self_evaluation .summary{
        padding: 20px 40px;
        color: #646464;
        line-height: 26px
    }
    .self_evaluation h3{
        margin-top: 66px;
        padding: 15px 0;
        border-bottom: 1px solid #afafaf;
        color: beige;
    }
    .self_evaluation .weixin{
         width: 300px;
         height: 300px;
         margin: 10px auto;
        background: url('../../static/images/bg_img/weixin.png') no-repeat center/cover;
     }
    @media screen and (max-width: 960px) {
        .article_list_wrap .self_evaluation{
            margin: 15px 0 0 0;
        }
        .self_evaluation h3{
            display: none;
        }
        .self_evaluation .weixin{
            display: none;
        }
    }
</style>