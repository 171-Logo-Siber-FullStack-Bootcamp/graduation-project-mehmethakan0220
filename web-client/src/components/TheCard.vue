<template>
    <div class="d-flex">
        <button class="btn btn-outline-dark" type="submit">
            <i class="bi-cart-fill me-1"></i>
            Sepetim
            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
        </button>
    </div>
</template>


<script>

import Api from '../api/apiClient';


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

}

</script>


