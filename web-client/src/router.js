import { createRouter, createWebHistory } from "vue-router";


const routes =[
    {
        name:"HomePage",
        path:"/",
        component:()=>import('@/components/Home')
    },
    {
        name:"ProductDetails",
        path:"/product/details/:id",
        component:()=>import('@/components/ProductDetails'),
        props:true,
    },
    {
        name:"CardDetails",
        path:"/card/details",
        component: ()=>import('@/components/CardDetails')
    },
    {
        name:"AllProducts",
        path:"/products",
        component: ()=>import('@/components/ProductSection')
    },
    {
        name:"AllCategories",
        path:"/categories",
        component: ()=>import("@/components/CardDetails")
    },
    {
        name:"Popular",
        path:"/popular",
        component: ()=>import("@/components/ProductSection")
    },
    {
        name:"NewArrivals",
        path:"/new-arrivals",
        component: ()=>import("@/components/ProductSection")
    },
    {
        name:"LoginPage",
        path:"/login",
        component:()=>import("@/components/LoginPage")
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router;