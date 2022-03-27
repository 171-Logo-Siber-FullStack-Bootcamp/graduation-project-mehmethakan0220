<template>
    <!-- Section-->
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">

              <div class="row">
                  <div class="col col-8">
                      <!--  -->
                <div class="card mb-3" v-for="product in products" :key="product.id" >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="@/assets/kopek.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{product.title}}</h5>
                                <p
                                    class="card-text"
                                >{{product.descript}}</p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--  -->
                  </div>
              </div>
        </div>
    </section>
</template>


<script>
// import Product from '@/components/Product.vue';
import Api from '@/api/apiClient';
export default {
    name: "CardDetails",
    data() {
        return {
            products: [],
        }
    },
    components: {
        // Product,
    },
    created() {
        Api.getCardItemsByUserId({card_owner:"12cac576-b517-4b5c-bed6-04b27456496a"}).then(res=>{
            console.log("Card details responsumuz;",res);
            this.products = res;
        })
    }
}
</script>


<style>
</style>