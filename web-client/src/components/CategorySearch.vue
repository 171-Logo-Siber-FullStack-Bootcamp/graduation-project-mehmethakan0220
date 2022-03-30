<template>
    <!-- Section-->
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div
                class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            >
                <Product :product="product" v-for="product in products" :key="product.id" />
            </div>
        </div>
    </section>
</template>


<script>
import Product from '@/components/Product.vue';
import Api from '@/api/apiClient';

export default {
    data() {
        return {
            products: [],
            searchQuery: null,
        }
    },
    components: {
        Product,
    },
    updated() {
        this.searchQuery = this.$route.params.query
    },
    mounted() {
        Api.getProductsByCategoryPath(this.$route.params.query).then(res => {
            console.log(this.$route.params.query)
            console.log("categorysaerch response:",res);
            this.products = res;
        })
    },
}
</script>