<template>
    <div>
        <div class="padding">
            <!-- 首页 start -->
            <div class="start">
                
                <!-- 背景轮播 start -->
                <div class="cover_bg">
                    <img src="../../static/images/bg_img/bg2.jpg" alt="" width="100%" height="100%">
                    <img class="opacity" src="../../static/images/bg_img/bg1.jpg" alt="" width="100%" height="100%">
                    <img class="opacity" src="../../static/images/bg_img/bg3.jpg" alt="" width="100%" height="100%">
                    <img class="opacity" src="../../static/images/bg_img/bg4.jpg" alt="" width="100%" height="100%">
                    <img class="opacity" src="../../static/images/bg_img/bg5.jpg" alt="" width="100%" height="100%">
                </div>
                <!-- 背景轮播 end -->
                
                <!-- 头像边框 start -->
                <div class="head_portraits_border1">
                    <div class="head_portraits_border2">
                        <div class="head_portraits_border3">
                                <div class="head_portraits_border4">
                                </div>
                        </div>
                    </div>
                    <div class="github"><a href="https://github.com/TlprinceJS/TLPrince"><i class="iconfont icon-github"></i><span>GitHub</span></a></div>
                    <div class='blogs'><a href="/homes/aboutme"><i class="iconfont icon-boke3"></i><span>博客</span></a></div>
                    <div class='qq'><a href="/homes/aboutme"><i class="iconfont icon-qq"></i><span>QQ</span></a></div>   
                </div>
                <!-- 头像边框 end -->
                
                <!-- 头像 start -->
                <div class="head_portraits_wrap">
                    <router-link to="/homes"></router-link>     
                </div>
                <!-- 头像 end -->
                
                <!-- 侧边导航 start -->
                <div class="about_me">
                    <div class="head_bg"></div>
                    <ul class="about_nav">
                        <li>
                            <router-link to="/homes/aboutme">关于我</router-link>
                            <p>ABOUT ME</p>
                        </li>
                        <li>
                            <router-link to="/homes">进入笨站</router-link>
                            <p>PULL IN</p>
                        </li>
                        <li>
                            <a href="https://github.com/TlprinceJS/TLPrince">GitHub</a>
                            <p>GitHub</p>
                        </li>
                        <li>
                            <router-link to="/homes/aboutme">QQ</router-link>
                            <p>CONNECTION</p>
                        </li>
                        <li>
                            <a href="">联系笨站长</a>
                            <p>LOVE ME</p>
                        </li>
                    </ul>
                    <span class="fold_l"><i class="iconfont icon-ntilde"></i></span>
                    <span class="fold_r"><i class="iconfont icon-you-copy"></i></span>
                </div>
                <!-- 侧边导航 end -->
                
                <!-- 主页描述 start -->
                <div class="brief_wrap col-md-6 col-md-offset-3">
                    <h1 class="brief_title page-header">小王子<small>TLPrince</small></h1>
                    <p class="biref_des">盛夏青春，愿不倾城，不倾国，只倾我所有</p>
                </div>
                <!-- 主页描述 end -->

            </div>
            <!-- 首页 end -->
        </div>
    </div>
</template>

<script>
import axios from "axios"
import '../../static/css/home_page/start.css'
import '../../static/css/media/media_home.css'
export default {
    data () {
        return {
            flag: Boolean,
            msg: ''
        }
    },
    mounted(){
        //this.getScreenHeight();
        this.background()
        this.navflod()    
    },
    methods:{
        background(){
            // 背景轮播
            let sum = 0;
            let timer = setInterval(function(){
            $('.cover_bg img').eq(sum).animate({
                opacity: 0,
            },5000)
            sum++;
            if(sum>4){
                sum=0;
                $('.cover_bg img').eq(sum).animate({
                    opacity: 1,

                },5000)
            }
            $('.cover_bg img').eq(sum).animate({
                opacity: 1,
                },5000)
            },10000)
        },

        navflod(){
            // 侧边栏折叠
                //左折叠
            $('.start .fold_l').on({
                click: function(){
                    $('.start .about_me').css({
                        'transform': 'translate('+(-$('.start .about_me').width())+'px,0px)',
                        'transition': '1s',
                    })
                    $('.start .about_me .fold_r').css({
                        'display' : 'block',
                        'left' : $('.start .about_me').width()+'px'
                    })
                }
            })
                //右折叠
            $('.start .about_me .fold_r').on({
                click: function(){
                    $('.start .about_me').css({
                        'transform': 'translate(0px,0px)',
                        'transition': '1s',
                    })
                    $('.start .about_me .fold_r').css({'display' : 'none'})
                }
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
