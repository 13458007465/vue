//1,引入vue
import Vue from 'vue'
import $ from 'jquery'
import { create } from 'domain';


//2,定义Mobel
let model = {
        message:'hello,vue!',
        name:'',
        info:{}
};
//3,创建vue实例
let vm = new Vue({
    //挂载元素
    el:'#app',
    //挂载Model
    data:model,
    //生命周期 :实例创建
    created(){
        console.log('vue 实例已被创建');

        let _this = this;
        $.ajax({
            url:'http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php',
            type:'GET',
            dataType:'json',
            success(response) {
                _this.info = response['banner'][0];
            }
        });
    },
    //生命周期:$el 挂载 进行DOM操作
    mounted() {

    }
});

//修改Model层
//vm.$data === mobel
vm.$data.message = 'hello,Girl!';
vm.$data.name = '睿峰';

//打印html
console.log(vm.$el);