<template>
  <div id="app" class="container-fluid">
    <transition
	    enter-active-class="fadeIntLeftBig"
      leave-active-class="fadeOutLeftBig"
      :duration="{ enter: 800, leave: 800}">
  	  <router-view class="animated full"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .container-fluid{
    padding: 0
  }
</style>
