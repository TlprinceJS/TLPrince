<!-- 动漫页面 -->
<template>
	<div>
		<div class="padding">

            <!-- 轮播图  start -->
            <section class="carousel_wrap col-md-12">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="8000">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src="../../static/images/carousel_img/1.jpg" alt="...">
                            <div class="carousel-caption">
                            </div>
                        </div>
                        <div class="item">
                            <img src="../../static/images/carousel_img/11.jpg" alt="..." >
                            <div class="carousel-caption">
                            </div>
                        </div>
                        <div class="item">
                            <img src="../../static/images/carousel_img/10.png" alt="...">
                            <div class="carousel-caption">
                            </div>
                        </div>
                        <div class="item">
                            <img src="../../static/images/carousel_img/4.jpg" alt="...">
                            <div class="carousel-caption">
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

            <!-- 动漫资讯  start -->
            <section class="comicInfo_wrap row">
                <h3 class="page-header">最新資訊</h3>
                <div class="col-md-3 col-sm-4" v-for="index in viewComicInfo" :key="index.index">
                    <div class="thumbnail">
                        <img :src="index.cover" alt="" width="100%" height="100%">
                        <div class="caption">
                            <h3>{{index.title}}</h3>
                            <p class="content">{{index.content}}</p>
                            <p class="detial">
                                <a :href="index.url" class="btn btn-success">了解詳情</a>
                                <span>{{index.time}}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary btn-block" style="float:left;margin-bottom: 15px" @click="getAllComicInfoData">{{msg}}</button>
            </section>  
            <!-- 动漫资讯  end -->

		</div>
	</div>
</template>

<script>
import axios from 'axios'
import '../../static/css/main/main.css'
export default {
    data () {
        return {
            msg: "还有哦",
            allComicInfo: [],
            viewComicInfo: [],
            viewComicInfoNum: 8,
            startNum : 0
        };
    },

    created(){
        //请求动漫资讯数据
        this.getAllComicInfoData()
    },

    methods: {
        lunbo () {
            if($(window).width()>600){
                var chip_num = 35;
            }else{
                var chip_num = 15;
            }
            let carousel_w = $('.carousel_wrap').width();
            let chip_w = carousel_w/chip_num;
            let chip_h = $('.carousel_wrap').height();
            let sum = 1;
            let num = 0;



            $(window).resize(function(){
                carousel_w = $('.carousel_wrap').width();
                chip_w = carousel_w/chip_num;
                chip_h = $('.carousel_wrap').height();



            $('.carousel_chip').css({
                'width': chip_w+'px',
                'height': chip_h+'px'
            })       
            carousel_set();
            console.log(1)
            })

            create_chip();
            $('.carousel_chip').css({
                'width': chip_w+'px',
                'height': chip_h+'px'
            })       
            carousel_set();
                    
            function create_chip(){
                for (let i = 0; i < chip_num; i++) {
                    var $carousel = $('<ul></ul>').addClass('carousel');
                    let $carousel_chip = $('<div></div>').addClass('carousel_chip').append($carousel);
                    $('.carousel_wrap').append($carousel_chip);
                }
                for (let j = 0; j < 4; j++) {
                    var $carousel_img = $('<li></li>').addClass('carousel_img');
                    $('.carousel').append($carousel_img);
                }
            }
                    
            function carousel_set(){
                $.each($('.carousel_chip'),function(index,value){
                    $(value).css({
                        'left': $('.carousel_chip').width()*index+'px',
                    })
                    for (let i = 0; i < 4; i++) {
                        $(value).find('.carousel_img').eq(i).css({
                            'background': 'url('+'../../static/images/carousel_img/'+(i+1)+'.jpg'+') no-repeat center/cover',
                            'backgroundPosition': -$(value).width()*index+'px 0px',
                        })
                        $(value).find('.carousel_img').eq(i).css('background-size',carousel_w+'px '+chip_h+'px' )
                    }
                })
            }

            function rotate3d(deg,num){
                if(num>0){
                    sum++;
                }else {
                    sum--
                }
                $.each($('.carousel_chip'),function(index,value){
                    $(value).find('.carousel').css({
                        'transition': '0.8s '+index*0.05+'s',
                        'transform': 'rotateX('+deg*sum+'deg)'
                    })
                })
            }

            function indicator_style(){
                let $indecator = $('.carousel_wrap .indicator_wrap .indicator');
                $indecator.eq(num).addClass('border');
                $indecator.not($indecator.eq(num)).removeClass('border');
            }

            $('.carousel_wrap .next').css('left',carousel_w-$('.carousel_wrap .next').width()+'px');
            $('.carousel_wrap .next').on({
                click: function(){
                rotate3d(90,1);
                num++;
                if( num > 3){
                    num = 0;
                }
                indicator_style();
                }
            })
            $('.carousel_wrap .prev').on({
                click: function(){
                rotate3d(90,-1)
                num--;
                if( num < 0){
                    num = 3;
                }
                indicator_style();
                }
            })

            $('.carousel_wrap .indicator_wrap .indicator').each(function(index,value){
                $(value).on({
                    click: function(){
                    if(index>num){
                        sum = sum + (index-num-1);
                        rotate3d(90,1);
                        
                    } else{
                        sum = sum - (num-index-1);
                        rotate3d(90,-1);
                    }
                    num = index;
                    indicator_style();
                    }
                })
            })
            let timer = setInterval(function(){           
                rotate3d(90,1);
                num++;
                if( num > 3){
                    num = 0;
                }
                indicator_style();
            },10000)
        },
        getAllComicInfoData(){
            // axios({
            //     method: "post",
            //     url: "http://route.showapi.com/1061-1",
            //     data: {
            //         showapi_appid: 66204, //这里需要改成自己的appid
            //         showapi_sign: 'd7e2ed2988574372b446400febcd0be4',  //这里需要改成自己的应用的密钥secret
            //     },
            //     responseType: 'json'
            // }).then( res => {
            //     this.ComicInfo = res.data
            // })

            $.ajax({
                type: 'post',
                url: 'http://route.showapi.com/1061-1',
                dataType: 'json',
                data: {
                    "showapi_appid": '66204', //这里需要改成自己的appid
                    "showapi_sign": 'd7e2ed2988574372b446400febcd0be4',  //这里需要改成自己的应用的密钥secret
                },
                success: (res)=>{
                    
                }
            }).then(res => {
                this.allComicInfo = res.showapi_res_body.result
                this.getViewComicInfoData()
                
            })
        },
        getViewComicInfoData(){
            this.viewComicInfo = this.allComicInfo.slice(this.startNum,this.viewComicInfoNum)
            if(this.viewComicInfoNum>this.allComicInfo.length){
                this.msg = "没有了"
            }
            this.viewComicInfoNum += this.viewComicInfoNum
            
        }
    }
}

</script>
<style scoped>

    
</style>