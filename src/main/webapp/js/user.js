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
            var _this = this;//this 是指当前对象 , 如果下面直接用 , 就是 axios 的this
            axios.get('/eesy_vue/user/findById.do',{params:{id:userid}})
                .then(function (response) {
                    _this.user = response.data;//响应数据给 userlist 赋值
                    $("#myModal").modal("show");
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        update: function (user) {
            var _this = this;                        //这里的user是一个json,上面的json所以在controller中要改变,窗口中使用了 v-model
            axios.post("/eesy_vue/user/updateUser.do",_this.user).then(function (response) {
                _this.findAll();
            }).catch(function (err) {
            });
        }
    },
    created() {//在这个生命周期内要查询//刷新//当页面加载的时候
        this.findAll();
    }

});