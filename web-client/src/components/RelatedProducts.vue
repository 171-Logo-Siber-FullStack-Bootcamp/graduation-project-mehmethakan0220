<template>

<!-- Related items section-->
        <section class="py-5 bg-light">
            <div class="container px-4 px-lg-5 mt-5">
                <h2 class="fw-bolder mb-4">Related products</h2>
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    

                    <Product :product="product" v-for="product in relatedProducts" :key="product.id" />
                    
                    {{listenCategoryId}}
                </div>
            </div>
        </section>

</template>



<script>
import Product from '@/components/Product.vue';
export default{
    props:["relatedProducts"],

    components:{
        Product,
    }
}
</script>


<style>
</style>