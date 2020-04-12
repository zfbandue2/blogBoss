import login from "@pages/login/login"
import index from "@pages/index/index"
import list from "@components/index/list"
import artical from "@components/index/artical"
export default [{
    path: "/",
    component: index,
    children: [{
        path: "list",
        component: list
    },{
        path: "artical",
        component: artical
    }]
},{
    path: "/login",
    component: login
}];