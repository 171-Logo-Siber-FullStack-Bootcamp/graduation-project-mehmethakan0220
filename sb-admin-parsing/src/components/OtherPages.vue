<template>
    <div class="collapse-divider"></div>
    <h6 class="collapse-header">Other Pages:</h6>
    <div class v-for="item in values" :key="item.name">
        <a class="collapse-item" href="{{item.link}}">{{ item.name }}</a>
    </div>
</template>

<script>
import pages from '../assets/OtherPagesIterable.json'
export default {
    name: 'OtherPages',
    values: [],
    created() {
        this.values = pages;
        console.log(this.values);
    }
}
</script>