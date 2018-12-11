<!--  -->
<template>
  <div>
      <!-- 文章详情页 start -->
      <div class="articleDetial_wrap row">
         
          <!-- 头部  start -->
          <div class="detial_header col-md-12">
              <div class="kind f_left">关于我</div>
              <div class="localtion f_right">
                  <span>盛夏青春，一场盛世的繁华，愿不倾城，不倾国，只倾我所有</span>
              </div>
          </div>
          <!-- 头部 end -->

          <!-- 内容详情  start -->
          <div class="detial_content col-md-7 col-xs-12 col-sm-8">
              <h3>为什么选择小王子</h3>
              <div>
                  <span><i class="iconfont icon-zuozhe" style="color:pink"></i>TLPrince</span>
                  <span><i class="iconfont icon-rili" style="color:skyblue"></i>2018/11/15</span>
                  <span>浏览量：66</span>
              </div>
              <div class="content">
                  <div>
                        贾浩，男，一个90后的无名小站长，接触前端的时间不久，但对于前端的技术十分热衷，
                        之所以没有做技术类的网站是因为太喜欢古风和动漫吧，之后如果有时间说不定会做一个
                        技术博客，敬请期待吧。
                  </div>
                  <div>
                        《小王子》是我接触到的第一本有意义的书，其中很多道理也映射着我自己的人生信条，
                        所以把它一直当做自己的头像，其中小王子与玫瑰的感情很微妙，每个人都有自己不同的理解
                        如果感兴趣，可以把自己的看法发表出来哦，
                  </div>
                  <div>
                        作为一个入行前端不久的我来说，之后的道路还会很长，但正如我网站开篇讲的，只愿倾我所有。
                  </div>
                  
                  <div>
                        本站建于2018年11月15日，采用bootstrap+vue(vue-router+vue-axios)+node.js(koa2)的
                        技术栈，对其中的知识理解不够深刻，之后本站会继续完善。
                  </div>
                  
                  <div>
                        如果有和我讨论技术的小伙伴可以
                        加我QQ：870195748，页面右端也有我微信，当然不止是技术，讨论下古风和动漫的是也是可以的
                        ，对了笨站长还是个单身狗，欢迎广大小姐姐前来哦。
                  </div>
                  

              </div>
          </div>
          <div class="myself col-md-4 col-sm-3 col-xs-12 f_left">
              <h3>关于我</h3>
              <div class="avatar"></div>
              <p>网名：TLPrince | 小王子</p>
              <p>职业：WEB前端工程师</p>
              <p>邮箱：870195748@qq.com</p>
              <p>QQ：870195748</p>
          </div>
          <!-- 内容详情 end -->


      </div>
      <!-- 文章详情  end -->
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
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
         line-height: 20px;
         text-indent: 2em;
     }
     .articleDetial_wrap .detial_content .content > div{
         margin-bottom: 15px;
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