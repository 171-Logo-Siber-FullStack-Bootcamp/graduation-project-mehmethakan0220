<template>
    <div class="d-flex">
        <button class="btn btn-outline-dark" @click="redirectToCard" type="submit">
            <i class="bi-cart-fill me-1"></i>
            Sepetim
        
        </button>
    </div>
</template>

<script>



export default {
    name:"CardComponent",

    methods:{
        redirectToCard(){
            this.$router.push({name:"CardDetails"})
        }
    }

}

</script>


