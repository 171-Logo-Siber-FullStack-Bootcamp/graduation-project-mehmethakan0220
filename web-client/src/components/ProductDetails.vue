<template>
    <!-- Product section-->
    <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6">
                    <!-- <img
                        class="card-img-top mb-5 mb-md-0"
                        src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                        alt="..."
                    /> -->
                    <SimpleCarousel :height="resize.height" :images="images" />
                </div>
                <div class="col-md-6">
                    <div class="small mb-1">SKU: BST-498</div>
                    <h1 class="display-5 fw-bolder">{{ product.title }}</h1>
                    <div class="fs-5 mb-5">
                        <span>{{ product.price }} TL</span>
                    </div>
                    <p class="lead">{{ product.descript }}</p>

                    <div class="d-flex">
                        <input
                            class="form-control text-center me-3"
                            id="inputQuantity"
                            type="num"
                            value="1"
                            style="max-width: 3rem"
                        />

                        <AddToCard :productInfo="product" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <RelatedProduct :relatedProducts="relatedProducts" />
</template>



<script>
import RelatedProduct from '@/components/RelatedProducts.vue';
import Api from '@/api/apiClient';
import SimpleCarousel from '@/components/SimpleCarousel.vue';
import AddToCard from '@/components/AddToCard.vue';
export default {
    data() {
        return {
            product: {
                title:"",
            },
            relatedProducts:[],
            images:[],
            resize:{
                height:"600px"
            }

        }
    },
    created() {

        Api.getProductById(this.$route.params.id).then(res => {
            this.product = res;

            Api.getProductsByCategoryId(this.product.category_id).then(res=>{
                this.relatedProducts = res;
        })
        Api.getAllImagesByProductId(this.product.id).then(res=>{
            this.images = res;
        })
        })
        

    },
    components: {
    RelatedProduct,
    SimpleCarousel,
    AddToCard
}
}
</script>



<style>
</style>