import Detail from "../component/detail/detail"
import Explore from "../component/explore/explore"
import Home from "../component/home/home"
import Login from "../component/login/login"
import Message from "../component/message/message"
import Reels from "../component/reels/reels"


const privateRoutes = [
    { path: '/', component: Home},
    { path: '/home', component: Home },
    {path:'/detail',component:Detail},
    {path:'/reels',component:Reels},
    {path:'/explore',component:Explore},
    {path:'/message',component:Message},
    {path:'/detail/:name',component:Detail}
]
const publicRoutes = [

    { path: '/', component: Login },
    { path: '/home', component: Login},
    {path:'/detail',component:Login},
    {path:'/reels',component:Login},
    {path:'/explore',component:Login},
    {path:'/message',component:Login},
    {path:'/detail/:name',component:Login},
    {path:'/login',component:Login}

]
export { privateRoutes, publicRoutes } 