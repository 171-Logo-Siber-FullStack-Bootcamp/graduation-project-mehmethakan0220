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
                card_owner:"12cac576-b517-4b5c-bed6-04b27456496a",
                product_id:productInfo.id,
                title:productInfo.title,
                descript:productInfo.descript,
                price:productInfo.price,
                discount_id:null
            }
            console.log(product);
            Api.addToUsersCard(product).then(res=>{
                console.log("eklendi cevap:",res)
            })
        }
    },

}

</script>


<style>
</style>