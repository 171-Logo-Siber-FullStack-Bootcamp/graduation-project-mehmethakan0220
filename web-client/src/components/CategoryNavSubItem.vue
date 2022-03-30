<template>
    <li v-for="subItem in subCategoryCache" :key="subItem.id" @click="redirect(subItem.path)" >
        <span class="dropdown-item" >{{ subItem.title }}</span>
    </li>
</template>



<script>

export default{
    props:['subCategoryCache'],

    methods:{
        redirect(path){
            this.$router.push({name:"CategorySearch", params: { query: path }})
        }
    }
}


</script>