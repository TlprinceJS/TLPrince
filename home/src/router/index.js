import Vue from 'vue'
import Router from 'vue-router'
import TLPrince from '../components/tlprince.vue'
import Comic from '../components/comic.vue'
import Home from '../components/home.vue'
import ArtWork from '../components/artWork.vue'
import GuFeng from '../components/gufeng.vue'
import Main from '../components/main.vue'
import PublishArticle from '../components/publishArticle.vue'
import ArticleList from '../components/articleList.vue'
import ArticleDetial from '../components/articleDetial.vue'
import AboutMe from '../components/aboutme.vue'
import Err from "../components/404.vue";
import Picture from '../components/gufengDetial/picture.vue'
import Sentence from '../components/gufengDetial/sentence.vue'
import WebName from '../components/gufengDetial/webname.vue'
import Gfcomic from '../components/gufengDetial/comic.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tlprince',
      component: TLPrince
    },
    {
      path: '/homes',
      redirect: '/homes/main/page/1'
    },
    {
      path: '/homes/gufeng',
      redirect: '/homes/gufeng/picture'
    },
    {
      path: '/homes',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'main',
          component: Main,
          children: [
            {
              path: 'page/:id',
              name: 'ArticleList',
              component: ArticleList,
            },
          ]
        },
        {
          path: 'comic',
          component: Comic
        },
        {
          path: 'gufeng',
          component: GuFeng,
          children: [
            {
              path: 'picture',
              name: 'Picture',
              component: Picture
            },
            {
              path: 'sentence',
              name: 'Sentence',
              component: Sentence
            },
            {
              path: 'webname',
              name: 'WebName',
              component: WebName
            },
            {
              path: 'gfcomic',
              name: 'Gfcomic',
              component: Gfcomic
            }
          ]
        },
        {
          path: 'artwork',
          component: ArtWork,
        },
        {
          path: 'publisharticle',
          component: PublishArticle,
        },
        {
          path: 'article/:id',
          name: 'articleDetial',
          component: ArticleDetial,
        },
        {
          path: 'aboutme',
          component: AboutMe,
        }
      ]
    },
    {
      path: '/*',
      component: Err,
    }
  ]
})
