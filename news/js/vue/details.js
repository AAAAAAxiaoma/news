function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}
let id = getQueryVariable("id");

let vm = new Vue({
    el:".main",
    data:{
        url:"http://localhost",
        details:{},
        user:{}
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            let url = this.url+"/"+id+"/news";
            axios.get(url).then(res=>{
                this.details = res.data;
                this.user = this.details.user;
            })
        }
    }
})
