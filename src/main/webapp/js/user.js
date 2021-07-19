new Vue({
    el: "#app",//去页面找 id app
    data: {
        user: {id: "", username: "", password: "", email: "", age: "", sex: ""},
        userList: []
    },
    methods: {
        findAll: function () {
            //在当前方法中定义一个变量表示是 vue对象
            var _this = this;//this 是指当前对象 , 如果下面直接用 , 就是 axios 的this
            axios.get('/eesy_vue/user/findAll.do')
                .then(function (response) {
                    _this.userList = response.data;//响应数据给 userlist 赋值
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        findById: function (userid) {

        },
        update: function (user) {

        }
    },
    created() {//在这个生命周期内要查询//刷新//当页面加载的时候
        this.findAll();
    }

});