<!--  -->
<template>
  <div>
      <div class="err_wrap">
          <img src="../../static/images/main_img/err.gif" alt="" width="300" height="300">
          <span>你访问的页面不存在</span>
      </div>
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
    .err_wrap{
        width: 600px;
        margin: 120px auto
    }
    .err_wrap span{
        font-size: 20px;
        font-weight: 700;
    }
</style>