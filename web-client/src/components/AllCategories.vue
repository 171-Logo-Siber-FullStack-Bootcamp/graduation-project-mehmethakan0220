<template>
    <div id="categoriesMinheight">
        <div class="container" id="allCategoriesMargin">
            <div class="row">
                <div class="col col-3" v-for="(category, index) in allCategories" :key="index" @click="redirector(category)" >
                    <span :class="`badge bg-primary ${modular(index%7)}`">{{ category.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Api from '@/api/apiClient';
export default {
    data() {
        return {
            allCategories: [],
            products:[],
        }
    },

    created() {
        Api.getCategoriesTree().then(res => {
            this.allCategories = res
        })
    },
    methods: {
        modular(index) {
            switch (index) {
                case 0:
                    return "bg-primary";
                case 1:
                    return "bg-secondary";
                case 2:
                    return "bg-success";
                case 3:
                    return "bg-danger";
                case 4:
                    return "bg-warning";
                case 5:
                    return "bg-info";
                case 6:
                    return "bg-success";
                case 7:
                    return "bg-dark";
                default:
                    return "bg-danger";
            }
        },
    redirector(category){
        this.$router.push({ name: "AllCategoriesQuery", params: { id: category.path } })
    }
    }
}


</script>


<style>
#categoriesMinheight {
    min-height: 600px;
}
#allCategoriesMargin {
    margin: 7rem;
}
</style>