<template>
    <div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div
                class="badge bg-dark text-white position-absolute"
                style="top: 0.5rem; right: 0.5rem"
            >Sale</div>
            <!-- Product image-->
            <!-- <img
                class="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
            /> -->

            <SimpleCarousel :images="images" />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->

                    <h5
                        @click="redirectProductDetails(product)"
                        class="fw-bolder"
                    >{{ product.title }}</h5>

                    <!-- Product reviews-->
                    <div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                    </div>
                    <!-- Product price-->
                    {{ product.price }} TL
                </div>
            </div>

            <!-- Product actions-->
            <AddToCard :productInfo="product" />
        </div>
    </div>
</template>

<script>
import AddToCard from '@/components/AddToCard.vue';
import SimpleCarousel from '@/components/SimpleCarousel.vue';
import Api from '@/api/apiClient';
export default {
    name: "ProductComponent",
    props: ["product"],
    data(){
        return{
            images:[]
        }
    },
    methods: {
        redirectProductDetails(product) {
            this.$router.push({ name: "ProductDetails", params: { id: product.id } })
        },

    },
    components: {
        AddToCard,
        SimpleCarousel
    },
    created(){
        Api.getAllImagesByProductId(this.product.id).then(res=>{
            this.images = res;
        })
    }
}
</script>