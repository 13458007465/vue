import Vue from 'vue'
import '../static/css/index.css'


new Vue({
    el:'#app',
    data:{
        time:new Date().toLocaleString(),
        address:'四川省成都市',
        weather:'多云 24℃~30℃',
        htmlStr:'<h3>黑暗之魂3-折磨之魂</h3>',
        imgLink:'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=89a7ab4a4aa98226b8c12c21b2b9de3c/9a504fc2d562853587befb1e99ef76c6a7ef63b6.jpg',
        imgTitle:'折磨之魂',
        isHidden:false
    }
});