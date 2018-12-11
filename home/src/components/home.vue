<!-- 首页 -->
<template>
  <div>

    <!-- 导航条  start -->
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                    <router-link class="navbar-brand" to="/"><i class="iconfont icon-ntilde" @click="back"></i>TLPrince</router-link>
                    <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mynav" aria-expanded="false">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                    </button>
            </div>

            <div class="collapse navbar-collapse" id="mynav">
                    <ul class="nav navbar-nav nav-main">
                        <li><router-link to="/homes">首页</router-link></li>
                        <li><router-link to="/homes/comic">动漫</router-link></li>
                        <li><router-link to="/homes/gufeng">古风</router-link></li>
                        <li><router-link to="/homes/artwork">个人作品</router-link></li>
                        <li><router-link to="/homes/aboutme">关于我</router-link></li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                        <li v-if="flag">
                            <a class="dropdown">
                                <div class="dropdown-toggle" data-toggle="dropdown">
                                    登录
                                    <span class="caret"></span>
                                </div>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a  href="#" data-toggle="modal" data-target="#resgister">点击登录</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="#" data-toggle="modal" data-target="#login">点击注册</a>
                                    </li>
                                </ul>
                            </a>
                        </li>
                        <li v-if="!flag">
                            <a href="#">Hi~ 已登录</a>
                        </li>
                        <li v-if="flag">
                            <a href="#">小王子动漫</a>
                        </li>
                        <li v-if="!flag" >
                            <router-link to="/homes/publisharticle">发表文章</router-link>
                        </li>
                        <li v-if="!flag" @click="logout">
                            <a href="javascript:void(0)">退出</a>
                        </li>
                    </ul>
            </div>
        </div>
    </nav>
    <!-- 导航条  end -->
    <transition
        enter-active-class="zoomInLeft"
        leave-active-class="zoomOutLeft"
        :duration="{ enter: 800, leave: 800}">
        <router-view class="animated"></router-view>
    </transition>

    <!-- 底部  start -->
    <div class="footer">TlPrince By 贾浩的个人主页 备案号:陇ICP备18003194号-1</div>
    <!-- 底部  end -->
    
    <!-- 注册弹出框  start -->
    <div class="modal fade" id="resgister">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title">欢迎登陆</h4>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <label for="">用户名:</label>
                            <input type="" name="" class="form-control" ref="l_username">
                        </div>
                        <div class="form-group">
                            <label>密码:</label>
                            <input type="password" name="" class="form-control" ref="l_password">
                        </div>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="">记住密码
                            </label>
                            <label>
                                <a href="">忘记密码</a>
                            </label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-default pull-right" data-dismiss="modal">close</button>
                    <button class="btn btn-info pull-right" data-dismiss="modal" @click="login">登陆</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 注册弹出框  end -->

    <!-- 登录弹出框  start -->
    <div class="modal fade" id="login">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title">欢迎注册</h4>
                </div>
                <div class="modal-body">
                        <div class="form-group">
                            <label>用户名:</label>
                            <input type="text" name="username" class="form-control" ref="r_username">
                        </div>
                        <div class="form-group">
                            <label>密码:</label>
                            <input type="password" name="password" class="form-control" ref="r_password">
                        </div>
                        <div class="form-group">
                            <label>确认密码:</label>
                            <input type="password" name="repassword" class="form-control">
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="sex">男
                            </label>
                            <label>
                                <input type="radio" name="sex">女
                            </label>
                        </div>
                        
                </div>
                <div class="modal-footer">
                    <button class="btn btn-danger pull-right success" @click="reg" data-dismiss="modal">确认注册</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 登录弹出框  end -->

  </div>
</template>

<script>
import axios from "axios"
export default {
    data () {
        return {
            flag: true
        };
    },

    created(){
        if(this.getCookie('uid')){
            console.log('ok')
            this.flag = !this.flag
        }
    },
    mounted(){
        console.log(document.cookie)
    },
    methods: {
        // 注册验证
        reg(){
            const username = this.$refs.r_username.value
            const password = this.$refs.r_password.value
            axios({
                method: 'post',
                url: '/reg',
                responseType: 'json',
                data: {
                    "username": username,
                    "password": password,
                },
            })
            .then( res => {
                alert(res.data.msg)
            })
        },
        // 登录验证
        login(){
            const username = this.$refs.l_username.value
            const password = this.$refs.l_password.value
              axios({
                method: "post",
                url: "/login",
                data: {
                    username: username, //这里需要改成自己的appid
                    password: password,  //这里需要改成自己的应用的密钥secret
                },
                responseType: 'json'
            }).then( res => {
                alert(res.data.msg)
                if(res.data.status == 1){
                    this.flag = !res.data.session.flag
                }
            })
        },
        // 退出验证
        logout(){
            axios.get('/logout').then((res) => {
                const con = confirm("确定退出吗")
                if(con == true){
                    location.href = "http://localhost:8080/"
                    this.flag = res.data.flag
                }
            })
        },
        // 返回
        back(){
            history.go(-1)
        },
        getCookie(c_name){
            if (document.cookie.length>0){
                let c_start=document.cookie.indexOf(c_name + "=")
                if (c_start!=-1)
                    { 
                    c_start=c_start + c_name.length+1 
                    let c_end=document.cookie.indexOf(";",c_start)
                    if (c_end==-1) c_end=document.cookie.length
                    return unescape(document.cookie.substring(c_start,c_end))
                } 
            }
            return ""
        }
    }
}

</script>
<style scoped>
    .footer{
        float: left;
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        background: #000000;
    }
    .navbar .icon-ntilde{
        display: none;
        margin-right: 15px;
    }
    .navbar{
        font-size: 14px;
    }
    @media screen and (max-width: 400px) {
    .page_logo{
        display: none !important;
    }
    .navbar{
        margin: 0
    }
    .navbar .icon-ntilde{
        display: inline;
    }
}
    .animated{
        padding-top: 25px
    }
</style>