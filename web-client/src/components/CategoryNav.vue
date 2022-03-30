<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li alt="hello" class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#!"></a>
                    </li>

                    <li
                        class="nav-item dropdown"
                        v-for="item in categories"
                        :key="item.id"
                        @click="onClickListSubCategories(item)"
                    >
                        <a
                            class="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >{{ item.title }}</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <CategoryNavSubItem :subCategoryCache="subCategoryCache" />
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import Api from '../api/apiClient';
import CategoryNavSubItem from './CategoryNavSubItem.vue';

export default {
    data() {
        return {
            categories: [],
            subCategories: [],
            subCategoryCache: []
        }
    },
    components: {
        CategoryNavSubItem,
    },

    mounted() {


        Api.getCategories().then(res => {
            this.categories = res;
            this.categories.map(e => {
                Api.getCategoriesByPath(e.path).then(res => {
                    this.subCategories.push(res)
                });

            })
        });



    },
    methods: {
        onClickListSubCategories(item) {
            this.subCategories.forEach(i => {
                i.forEach(j => {
                    if (item.id == j.id) {
                        this.subCategoryCache = i;
                    }
                })
            });

        }
    }


}
</script>


<style>
</style>