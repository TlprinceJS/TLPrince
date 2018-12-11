<!-- 文章详情页面 -->
<template>
  <div>
      <!-- 文章详情页 start -->
      <div class="articleDetial_wrap row">
         
          <!-- 头部  start -->
          <div class="detial_header col-md-12">
              <div class="kind f_left">{{articleDetialData.kind}}</div>
              <div class="localtion f_right">
                  <span>您现在的位置是：</span> >
                  <span class="font_color_g">首页</span> >
                  <span class="font_color_g">文章详情</span> >
                  <span class="font_color_g">{{articleDetialData.kind}}</span>
              </div>
          </div>
          <!-- 头部 end -->

          <!-- 内容详情  start -->
          <div class="detial_content col-md-7 col-xs-12 col-sm-8">
              <h3>{{articleDetialData.title}}</h3>
              <div>
                  <span><i class="iconfont icon-zuozhe" style="color:pink"></i>{{articleDetialData.author}}</span>
                  <span><i class="iconfont icon-rili" style="color:skyblue"></i>{{articleDetialData.created}}</span>
                  <span>浏览量：{{clickNum}}</span>
              </div>
              <div class="content" v-html="articleDetialData.content"></div>

              <h4 class="page-header">热 门 评 论</h4>
              <ul class="comment_list">
                  <li class="comment" v-for="item in commentData" :key="item.index">
                      <p >
                          <span class="f_left">{{item.from}}</span>
                          <span class="f_right">{{item.created}}</span>
                      </p>
                      <p >{{item.content}}</p>
                  </li>
              </ul>
              <textarea class="layui-textarea" style="height: 200px;margin: 15px 0" ref="content">  
              </textarea>
              <button class="btn btn-info f_right" @click="publishComment">提 交</button>
          </div>
          <!-- 内容详情 end -->
          <div class="myself col-md-4 col-sm-3 col-xs-12 f_left">
              <h3>关于我</h3>
              <div class="avatar"></div>
              <p>网名：TLPrince | 小王子</p>
              <p>职业：WEB前端工程师</p>
              <p>邮箱：870195748@qq.com</p>
              <p>QQ：870195748</p>
          </div>
      </div>
      <!-- 文章详情  end -->
  </div>
</template>

<script>
import axios from 'axios'
import '../../static/iconfont/iconfont.css'
export default {
  data () {
    return {
        articleDetialData:[],
        commentData: [],
        clickNum:0
    };
  },

  created(){
      this.getArticleDetial()
      this.getCommentData()
  },

  methods: {
    // 请求文章详情的数据
    // title content author kind time
    getArticleDetial(){
      const id = this.$route.params.id
      axios.get(`/home/article/${id}`).then( res => {
          this.articleDetialData = res.data
          this.clickNum++
      })
    },
    // 发表评论
    publishComment(){
        const content = this.$refs.content.value
        const article = this.$route.params.id
        axios.post('/comment',{content, article}).then( res => {
            if(!res.data.flag){
                alert('评论成功')
                history.go(0)
            } else {
                alert("评论失败")
            }
            
        })
    },
    // 请求评论数据
    // author content time
    getCommentData(){
        const id = this.$route.params.id
        axios.get('/commentList',{params: {id}}).then( res => {
            this.commentData = res.data.data
        })
    }
   },
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
        color: #00cc66;
    }
    .articleDetial_wrap{
        padding: 10px 50px;
        background: #fff;
        color: #777;
    }
    .articleDetial_wrap .detial_header{
        margin: 15px 0 0 0;
        height: 35px;
        font-size: 14px;
        border-bottom: 1px solid #808080
    }
    .articleDetial_wrap .kind{
        width: 70px;
        height: 35px;
        line-height: 35px;
        background: orange;
        text-align: center;
    }
     .articleDetial_wrap .detial_header .localtion{
         line-height: 35px;
     }
     .articleDetial_wrap .detial_content{
         margin-top: 15px;
         padding: 0 40px;
     }
     .articleDetial_wrap .detial_content h3{
         padding: 20px 0;
     }
     .articleDetial_wrap .detial_content span{
         margin-right: 15px;
     }
     .articleDetial_wrap .detial_content i{
         margin-right: 10px;
     }
     .articleDetial_wrap .detial_content .content{
         margin-top: 25px;
         background: #f4f4f4;
         font-size: 14px;
         padding: 15px;
         text-align: justify;
         line-height: 32px;
         text-indent: 2em;
     }
     .articleDetial_wrap .comment_list p{
         height: 30px;
         line-height: 30px;
     }
     .articleDetial_wrap .comment_list .comment{
         border-bottom: 1px solid #afafaf;
         padding: 0 15px;
     }
     .myself{
         height: 400px;
         text-align: center;
     }
     .myself h3{
         padding: 15px 0;
         border-bottom: 1px solid #afafaf;
     }
     .myself .avatar{
         width: 100px;
         height: 100px;
         border-radius: 50%;
         margin: 15px auto;
         background: url('../../static/images/bg_img/avatar.jpg') no-repeat center/cover;
     }
     .myself p {
         width: 250px;
         margin: 10px auto;
         padding: 10px;
         text-align-last: left;
         font-size: 16px;
         background: #f0f0f0;
         border-radius: 8px;
     }
     @media screen and (max-width: 768px) {
        .articleDetial_wrap{
            padding: 10px 15px;
        }
        .articleDetial_wrap .detial_content .content{
            margin-bottom: 20px;
        }
        .articleDetial_wrap .detial_content{
            padding: 0 15px;
        }
    }
</style>