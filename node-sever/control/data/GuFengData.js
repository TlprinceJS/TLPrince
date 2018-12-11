const request = require('superagent')
const cheerio = require('cheerio')

const GufengData = async (ctx) => {
  const imgDataArr = []
  const sentenceDataArr = []
  const nameDataArr = []
  const comicDataArr = []
  const articleDataArr = []
  const hotDataArr = []
  
  const promise1 = await new Promise((resolve, reject) => {
    const url = 'https://www.zhongguofeng.com/gufengtupian'
    request
    .post(url)
    .end((err, res) => {
      if(err){
        reject("请求失败")
      }
      // Calling the end function will send the request
      const result = res.text
      const $ = cheerio.load(result)

      //图片榜单
      $('.product-c li').each((index, value) => {
          const $r = $(value);
          const imgDataObj = {
              url: 'https://www.zhongguofeng.com'+$r.find('a').prop('href'),
              img_src: $r.find('.product-border img').prop('src'),
              time: $r.find(' a .product-txt').eq(1).text(),
              title: $r.find(' a .product-tt').text(),
              populition: $r.find(' a .product-b span').eq(1).text()
          }
          imgDataArr.push(imgDataObj);
      })
       if(imgDataArr.length>0){
         return resolve("成功")
      }
    })
  })

  const promise2 = await new Promise((resolve, reject) => {
    const url = 'https://www.zhongguofeng.com/gufengjuzi/'
    request
    .post(url)
    .end((err, res) => {
      if(err){
        reject("请求失败")
      }
      // Calling the end function will send the request
      const result = res.text
      const $ = cheerio.load(result)

      //古风句子
      $('.product-c li').each((index, value) => {
          const $r = $(value);
          const sentenceDataObj = {
              url: 'https://www.zhongguofeng.com'+$r.find('a').prop('href'),
              img_src: $r.find('.product-border img').prop('src'),
              time: $r.find(' a .product-txt').eq(1).text(),
              title: $r.find(' a .product-tt').text(),
              populition: $r.find(' a .product-b span').eq(1).text()
          }
          sentenceDataArr.push(sentenceDataObj);
      })
       if(sentenceDataArr.length>0){
         return resolve("成功")
      }
    })
  })

  const promise3 = await new Promise((resolve, reject) => {
    const url = 'https://www.zhongguofeng.com/gufengwangming/'
    request
    .post(url)
    .end((err, res) => {
      if(err){
        reject("请求失败")
      }
      // Calling the end function will send the request
      const result = res.text
      const $ = cheerio.load(result)

      //古风网名
      $('.product-c li').each((index, value) => {
          const $r = $(value);
          const nameDataObj = {
              url: 'https://www.zhongguofeng.com'+$r.find('a').prop('href'),
              img_src: $r.find('.product-border img').prop('src'),
              time: $r.find(' a .product-txt').eq(1).text(),
              title: $r.find(' a .product-tt').text(),
              populition: $r.find(' a .product-b span').eq(1).text()
          }
          nameDataArr.push(nameDataObj);
      })
       if(nameDataArr.length>0){
         return resolve("成功")
      }
    })
  })

  const promise4 = await new Promise((resolve, reject) => {
    request
      .get('https://wenxue.ruogoo.cn')
      .end((err, res) => {
        if(err){
          reject("请求失败")
        }
      const result = res.text
      const $ = cheerio.load(result)
      //精品文章
      $('.nice-section .col-group').children().slice(0,6).each((index, value) => {
        const $r = $(value)
        const articleDataObj ={
          url: $r.find('.nicewithpic-item .nice-cover').prop('href'),
          img_src: $r.find('.nicewithpic-item .nice-cover img').prop('data-original'),
          title: $r.find('.nicewithpic-item .title a').text(),
          description: $r.find('.nicewithpic-item .text').text(),
          author: $r.find('.nicewithpic-item .author a').text(),
        }
        articleDataArr.push(articleDataObj)
      })
      if(articleDataArr.length>0){
        resolve("请求成功")
      }
    })
  })

  const promise5 = await new Promise((resolve, reject) => {
    const url = 'https://www.zhongguofeng.com/dongman/'
    request
    .post(url)
    .end((err, res) => {
      if(err){
        reject("请求失败")
      }
      // Calling the end function will send the request
      const result = res.text
      const $ = cheerio.load(result)

      //古风动漫
      $('.product-c li').each((index, value) => {
          const $r = $(value);
          const comicDataObj = {
              url: 'https://www.zhongguofeng.com'+$r.find('a').prop('href'),
              img_src: $r.find('.product-border img').prop('src'),
              time: $r.find('.product-txt').eq(1).text(),
              title: $r.find(' a .product-tt').text(),
              populition: $r.find(' a .product-b span').eq(1).text(),
              from: $r.find('.product-txt').eq(0).find('a').eq(1).text()
          }
          comicDataArr.push(comicDataObj);
      })
       if(comicDataArr.length>0){
         return resolve("成功")
      }
    })
  })

  const promise6 = await new Promise((resolve, reject) => {
    const url = 'https://www.zhongguofeng.com/gufeng/'
    request
    .post(url)
    .end((err, res) => {
      if(err){
        reject("请求失败")
      }
      // Calling the end function will send the request
      const result = res.text
      const $ = cheerio.load(result)

      //古风动漫
      $('.list-b li').each((index, value) => {
          const $r = $(value);
          const hotDataObj = {
              url: 'https://www.zhongguofeng.com'+$r.find('a').prop('href'),
              img_src: $r.find('a .list-img img').prop('src'),
              title: $r.find(' a .list-b-txt').text(),
          }
          hotDataArr.push(hotDataObj);
      })
       if(hotDataArr.length>0){
         return resolve("成功")
      }
    })
  })
  

  await Promise.all([promise1, promise2, promise3, promise4, promise5, promise6])
  .then( async (data) =>{
    ctx.body = {
      status: 1,
      msg: '请求成功',
      result: {
        imgDataArr,
        sentenceDataArr,
        nameDataArr,
        articleDataArr,
        comicDataArr,
        hotDataArr
      }
    }
  })
}


  module.exports = GufengData