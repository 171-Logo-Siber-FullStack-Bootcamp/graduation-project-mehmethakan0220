<template>
    <!-- Header-->
    <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-3">
            <div class="col-8 mx-auto text-center text-white">
                <div class="input-group">
                    <input  @keypress.enter="redirectToElasticResult"
                        type="text"
                        class="form-control"
                        placeholder="Find with ElasticSearch"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                        <button  class="btn btn-outline-info" type="button"><i class="fa-brands fa-searchengin fa-2xl"></i></button>
                    </div>
                </div>
               
            </div>
        </div>
    </header>
</template>

<script>


export default{
    data(){
        return{
            products:[],
            
        }
    },
    methods:{
        redirectToElasticResult(event){
            this.$router.push({name:"SearchElasticResults", params: { query: event.target.value }})
        }
    },

}

</script>