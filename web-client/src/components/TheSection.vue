<template>
    <!-- Section-->
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div
                class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
             >
              <TheProduct :product="product" v-for="product in products" :key="product.id" />
            </div>
        </div>
    </section>
</template>


<script>
import Api from '../api/apiClient';
import TheProduct from './TheProduct.vue';

export default {
    data() {
        return {
            products:[]
        };
    },
    mounted() {
        Api.getProducts().then(res => {
            this.products = res;
        });
    
    },
    components: { TheProduct }
}
</script>