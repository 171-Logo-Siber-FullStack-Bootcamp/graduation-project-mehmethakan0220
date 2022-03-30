<template>
    <!-- Section-->
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5" id="cardDetailsMinheight">
            <div class="row">
                <div class="col col-8">
                    <!--  -->

                    <CardObject  v-for="product in products" :key="product.id" :product="product" />

                    <!--  -->
                </div>
            </div>
        </div>
    </section>
</template>


<script>
// import Product from '@/components/Product.vue';
import CardObject from '@/components/CardObject.vue';
import Api from '@/api/apiClient';
export default {
    name: "CardDetails",
    data() {
        return {
            products: [],
        }
    },
    components: {
        CardObject,
    },
    created() {
        const user_id = this.$store.state.user.id;
        Api.getCardItemsByUserId({ card_owner: user_id }).then(res => {
            this.products = res;
        })
    }
}
</script>


<style>
#cardDetailsMinheight{
    min-height: 600px;
}
</style>