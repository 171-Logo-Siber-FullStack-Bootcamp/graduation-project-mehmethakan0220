<template>
    <h6 class="collapse-header">Access Screens:</h6>
    <div class v-for="item in values" :key="item.name">
        <a class="collapse-item" target="_blank" href="{{item.link}}">{{ item.name }}</a>
    </div>
</template>

 <script>

import pages from '../assets/AccessPagesIterable.json';

export default {
    name: 'AccessScreens',
    values: [],
    created() {
        this.values = pages;
        console.log(this.values);
    }
}

</script>