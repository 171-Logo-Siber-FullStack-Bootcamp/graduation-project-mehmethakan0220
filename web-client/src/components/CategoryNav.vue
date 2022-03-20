<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li alt="hello" class="nav-item" v-for="item in categories" :key="item.id" @mouseover="onHoverCategory(item)" @mouseleave="hoverText='Hepsi Şurada her zaman yanında...'" ><a class="nav-link active" aria-current="page" href="#!">{{item.title}}</a></li>
                        
                        
                    </ul>
                    
                </div>
                
            </div>
            
        </nav>
        <div class="hovertext"> {{hoverText}}</div>
</template>

<script>
import Api from '../api/apiClient';

export default {
    data() {
        return {
            categories: [],
            hoverText:"Hepsi Şurada her zaman yanında..."
        }
    },

    mounted() {


        Api.getCategories().then(res => {
            this.categories = res;
        })

    },
    methods:{
        onHoverCategory(e){
            this.hoverText= e.descript;
            console.log(this.hoverText)
        }
    }


}
</script>


<style>

</style>