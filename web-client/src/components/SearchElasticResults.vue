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
        Api.getProductsByElasticSearch(this.$route.params.query).then(res => {
            console.log(this.$route.params.query)
            console.log("elasticsearch reaponse:", res.hits.hits);
            const filtered = res.hits.hits.map(item => {
                return item._source;
            })
            this.products = filtered;
        })
    },
    watch: {

        searchQuery(newQuestion, oldQuestion) {
            console.log(oldQuestion, ">>", newQuestion)
            this.forceUpdate();
        }
    },
    methods:{
        forceUpdate(){
            Api.getProductsByElasticSearch(this.$route.params.query).then(res => {
            console.log(this.$route.params.query)
            console.log("elasticsearch reaponse:", res.hits.hits);
            const filtered = res.hits.hits.map(item => {
                return item._source;
            })
            this.products = filtered;
        })
        }
    }
}

</script>