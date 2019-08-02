new Vue({
    el: '#vue-app',//需要获取的元素，一定是html中的根元素容器
    data: {//用于数据的存储
        name: 'starbroken',
        job:"web开发",
        website:"https://starbrokenone.github.io/",
        websiteTag:'<a href="https://starbrokenone.github.io/">blog</a>'
    },
    methods:{
    	greet:function (time) {
    		// body...
    		return "Good "+time+" "+this.name+"!";
    	}
    }
});