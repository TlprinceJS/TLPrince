<!-- 文章发表页面 -->
<template>
    <div>
        <div class="row">
            <!-- 文章发表表单  start -->
            <form action="/publish" method="post">
                <!-- 文章分类  start -->
                <div class="form-group col-md-6 col-xs-12">
                    <label>文章分类：</label>
                    <select class="form-control" name="kind" ref="kind">
                        <option>动漫</option>
                        <option>古风</option>
                        <option>二次元</option>
                        <option>cosplay</option>
                        <option>综合</option>
                    </select>
                </div>
                <!-- 文章分类  end -->

                <!-- 文章标题  start -->
                <div class="form-group col-md-6 col-xs-12">
                    <label for="">文章标题：</label>
                    <input class="form-control" type="text" placeholder="title" name="title" ref="title">
                </div>
                <!-- 文章标题  end -->

                <!-- 文章封面  start -->
                <div class="layui-upload">
                    <button type="button" class="layui-btn" id="upload">上传图片</button>
                    <div class="layui-upload-list">
                        <img class="layui-upload-img" id="demo1">
                        <p id="demoText"></p>
                    </div>
                </div>   
                <!-- 文章封面  end -->

                <!-- 文章内容  start -->
                <textarea class="layui-textarea" id="articleArea" style="display: none" placeholder="content..." name="content" ref="content">  
                </textarea>
                <!-- 文章内容  end -->

                <button class="btn btn-info" type="submit">发表</button>
            </form>
            <!-- 文章发表表单  end -->
        </div>
    </div>
  
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
        };
    },
    
    mounted(){
        this.textareaConfig()
        this.uploadConfig()
    },

    methods: {
        // layui富文本编辑器配置
        textareaConfig(){
            layui.use('layedit', function(){
                let layedit = layui.layedit
                    $ = layui.jquery;
                //构建一个默认的编辑器
                var index = layedit.build('articleArea',{
                    height:300,
                    float: "left"
                });
            })
        },
        // layui图片上传按钮配置
        uploadConfig(){
            layui.use(["upload", "layer"], () => {
                const $ = layui.$
                const upload = layui.upload
                const layer = layui.layer

                //设定文件大小限制
                upload.render({
                    elem: '#upload'
                    ,url: '/upload'
                    ,size: 1024*3 //限制文件大小，单位 KB
                    ,done(res){
                    layer.alert(res.message)
                    }
                });
            })
        },
    }
}

</script>
<style scoped>
    .row{
        padding: 50px 30px;
    }
    form label{
        margin-top: 15px;
    }
    button{
        margin: 15px 0;
    }
    .layui-layedit{
        float: left !important;
    }
</style>