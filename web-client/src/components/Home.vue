<template>

    <CategoryNav></CategoryNav>
    <ProductSection></ProductSection>

</template>

<script>

import CategoryNav from '../components/CategoryNav.vue';
import ProductSection from '../components/ProductSection.vue';



export default {
    name: 'HomePage',
    components: {

        CategoryNav,
        ProductSection,

    }
}
</script>