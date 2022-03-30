<template>
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
            <a class="btn btn-outline-dark mt-auto" @click="addToCard(productInfo)" href="#">Sepete Ekle</a>
        </div>
    </div>
</template>


<script>
import Api from "@/api/apiClient";
export default {
    props: ['productInfo'],
    methods: {
        addToCard(productInfo) {
            const product = {
                card_owner:this.$store.state.user.id,
                product_id:productInfo.id,
                title:productInfo.title,
                descript:productInfo.descript,
                price:Number(productInfo.price),
                quantity:1,
                discount_id:null
            }
            console.log(product);
            Api.addToUsersCard(product).then(res=>{
                console.log("eklendi cevap:",res)
                this.$router.push({name:"CardDetails"})
            })
        }
    },

}

</script>


<style>
</style>