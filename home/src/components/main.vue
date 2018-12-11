<!-- 首页页面 -->
<template>
  <div>

    <!-- 顶部图片(大屏)  start -->
    <section class="img_wrap hidden-xs">
        <div>
            <img src="http://img4.duitang.com/uploads/item/201502/20/20150220181440_SeMUr.thumb.700_0.jpeg" alt="" width="100%" height="100%">
            <div class="desc">
                <div class="title">罪恶王冠</div>
                <div class="statement">
                <p>樱花满地集于我心</p>
                <p>楪舞纷飞祈愿相随</p>
                </div>
            </div>
            <div class="line line_w1"></div>
            <div class="line line_w2"></div>
            <div class="line line_h1"></div>
            <div class="line line_h2"></div>
        </div>
        <div>
            <img src="http://imgsrc.baidu.com/forum/w=580/sign=bfb94989db09b3deebbfe460fcbd6cd3/918bae510fb30f24ab5002e2c295d143ac4b0308.jpg" alt="" width="100%" height="100%">
            <div class="desc">
                <div class="title">声之形</div>
                <div class="statement">
                <p>以声之色</p>
                <p>塑以花之形</p>
                </div>
            </div>
            <div class="line line_w1"></div>
            <div class="line line_w2"></div>
            <div class="line line_h1"></div>
            <div class="line line_h2"></div>
        </div>
        <div>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541326124425&di=79c1633ac90d7090262f81cef4aa3a8b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201405%2F12%2F20140512211439_yFeMV.jpeg" alt="" width="100%" height="100%">
            <div class="desc">
                <div class="title">全职高手</div>
                <div class="statement">
                <p>一身信仰为你荣光加冕</p>
                <p>你于荣耀巅峰永不落幕</p>
                </div>
            </div>
            <div class="line line_w1"></div>
            <div class="line line_w2"></div>
            <div class="line line_h1"></div>
            <div class="line line_h2"></div>
        </div>
        <div>
            <img src="https://imgsa.baidu.com/forum/w%3D580/sign=929b5f65067b02080cc93fe952dbf25f/280f399b033b5bb53577573e3ad3d539b700bc0d.jpg" alt="" width="100%" height="100%">
            <div class="desc">
                <div class="title">境之彼端</div>
                <div class="statement">
                <p>没有未来的未来</p>
                <p>不是我想要的未来</p>
                </div>
            </div>
            <div class="line line_w1"></div>
            <div class="line line_w2"></div>
            <div class="line line_h1"></div>
            <div class="line line_h2"></div>
        </div>
        <div>
            <img src="https://imgsa.baidu.com/forum/w%3D580/sign=f2d96ac81330e924cfa49c397c0a6e66/1a775c0fd9f9d72a958867ddd82a2834359bbb39.jpg" alt="" width="100%" height="100%">
            <div class="desc">
                <div class="title">从零开始的异世界</div>
                <div class="statement">
                <p>如果真爱有颜色</p>
                <p>那么一定是蓝色</p>
                </div>
            </div>
            <div class="line line_w1"></div>
            <div class="line line_w2"></div>
            <div class="line line_h1"></div>
            <div class="line line_h2"></div>
        </div>
    </section>
    <!-- 顶部图片  end -->

    <!-- 轮播图(小屏)  start -->
    <section class="carousel_wrap col-md-12 visible-xs">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="8000">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                <li data-target="#carousel-example-generic" data-slide-to="4"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src="../../static/images/carousel_img/3.jpg" alt="...">
                    <div class="carousel-caption">
                        樱花满地集于我心，蝶舞纷飞祈愿相随
                    </div>
                </div>
                <div class="item">
                    <img src="../../static/images/carousel_img/6.jpg" alt="..." >
                    <div class="carousel-caption">
                        以声之色，塑以花之形
                    </div>
                </div>
                <div class="item">
                    <img src="../../static/images/carousel_img/7.jpg" alt="...">
                    <div class="carousel-caption">
                        一生信仰为你荣光加冕，你于荣耀巅峰永不落幕
                    </div>
                </div>
                <div class="item">
                    <img src="../../static/images/carousel_img/8.jpg" alt="...">
                    <div class="carousel-caption">
                        没有未来的未来不是我想要的未来
                    </div>
                </div>
                <div class="item">
                    <img src="../../static/images/carousel_img/9.jpg" alt="...">
                    <div class="carousel-caption">
                        如果真爱有颜色，那么一点是蓝色
                    </div>
                </div>
            </div>

            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </section>
    <!-- 轮播图 end -->

    <transition
	    enter-active-class="bounceInLeft"
        leave-active-class="bounceInLeft"
        :duration="{ enter: 800, leave: 800}">
  	  <router-view class="animated"></router-view>
    </transition>

    <!-- 分页容器  start -->
    <nav>
        <ul class="pagination">
            <li><a href=""><span>&laquo;</span></a></li>
            <li v-for="index in pageNum" :key="index"><router-link :to="{name:'ArticleList', params: {id: index}}" >{{index}}</router-link></li>
            <li><a href=""><span>&raquo;</span></a></li>
        </ul>
    </nav>
    <!-- 分页容器  end -->
    
  </div>
  
</template>

<script>
import axios from "axios"
export default {
    data () {
        return {
            articleListData:[],
            pageNum : 0
        };
    },

    created(){
        this.getAllArticleList()
    },
    
    methods: {
        // 请求所有文章列表数据
        getAllArticleList(){
            axios({
                method: 'get',
                url: '/home/main'
            }).then(res => {
                this.pageNum = Math.ceil(res.data.count/5)
            })
        },
    },
}

</script>
<style scoped>
    .img_wrap{
        padding-top: 15px;
        box-sizing: border-box;
        width: 100%;
        height: 400px;
        background: #F7F7F7;
         overflow: hidden;
    }
    .img_wrap > div{
        float: left;
        
        position: relative;
        height: 100%;
        width: 20%;
        justify-content: center;
    }
    .img_wrap > div:hover .desc{
        transition: all 0.8s;
        opacity: 1;
    }
    .img_wrap > div .desc{
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
    }
    .img_wrap > div .line{
        position: absolute;
        top: 0;
    }
    .img_wrap > div .line_w1,div .line_w2{
        width: 0px;
        height: 2px;
        background: #fff;
    }
    .img_wrap > div:hover .line_w1,.img_wrap > div:hover .line_w2{
        transition: all 0.8s;
        width: 78%;
    }
    .img_wrap > div .line_h1,.img_wrap > div .line_h2{
        width: 2px;
        height: 0px;
        background: #fff;
    }
    .img_wrap > div:hover .line_h1,.img_wrap > div:hover .line_h2{
        transition: all 0.8s;
        height: 250px;
    }
    .img_wrap > div .line_w1{
        top: 15%;
        left: 10%;
    }
    .img_wrap > div .line_w2{
        top: 68%;
        left: 10%;
    }
    .img_wrap > div .line_h1{
        top: 10%;
        left: 17%;
    }
    .img_wrap > div .line_h2{
        top: 10%;
        left: 80%;
    }
    .img_wrap > div .desc .title{
        padding: 150px 20px;
    }
    .img_wrap > div .desc div{
        font-size: 16px;
        letter-spacing: 3px;
        color: azure;
        text-align: center;
        font-weight: bold;
    }
    .carousel_wrap{
        padding: 0;
    }
    .carousel_wrap {
    height: 220px;
    width: 100%;
    padding: 0;
    }
    .carousel_wrap .carousel {
    height: 100%;
    }
    .carousel_wrap .carousel .carousel-inner {
    height: 100%;
    }
    .carousel_wrap .carousel .carousel-inner img {
    width: 100%;
    height: 100%;
    }
    .pagination{
        float: right;
        margin-right: 50px;
    }


</style>