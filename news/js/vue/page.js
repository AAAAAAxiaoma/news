let vm = new Vue({
    el:".main",
    data:{
        huandengpianUrl:"",
        neirongUrl:"http://localhost/news",
        jinriyaowenUrl:"",
        fenleiUrl:"",

        huandengpian:[],
        neirong:[],
        jinriyaowen:[],
        fenlei:[]
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            var url = this.neirongUrl;
            axios.get(url).then(res=>{
                this.neirong = res.data.content;
                this.jinriyaowen = (this.neirong).filter(item=>item.impnews=="1");
                this.fenlei = (this.neirong).filter(item=>item.category);
            });
        }
    }
})