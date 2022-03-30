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
        component: ()=>import("@/components/AllCategories")
    },
    {
        name:"AllCategoriesQuery",
        path:"/categories/:id",
        component: ()=>import("@/components/AllCategoriesQuery")
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
    },
    {
        name:"SearchElasticResults",
        path:"/elasticsearch/:query",
        component:()=>import("@/components/SearchElasticResults")
    },
    {
        name:"CategorySearch",
        path:"/categorysearch/:query",
        component:()=>import("@/components/CategorySearch")
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router;