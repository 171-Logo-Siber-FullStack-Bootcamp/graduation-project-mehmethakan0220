<template>
    <div class="card mb-3" >
        <div class="row g-0">
            <div class="col-md-4">
                 <SimpleCarousel  :images="images" />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <p class="card-text">{{ product.descript }}</p>
                    <p class="card-text">
                        <small class="text-muted">{{product.quantity}} Adet</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SimpleCarousel from '@/components/SimpleCarousel.vue';
import Api from '@/api/apiClient';
export default{
    props:['product'],
    data(){
        return{
            images:[],
        }
    },
    components:{
        SimpleCarousel
    },
    mounted(){
        Api.getAllImagesByProductId(this.product.product_id).then(res=>{
            this.images = res;
    })}
}
</script>