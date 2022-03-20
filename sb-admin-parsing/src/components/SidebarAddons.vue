<template>
<!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Addons</div>

        <!-- consist other pages and Access pages -->
        <PagesCollapse />

        
        <ChartsHtml />

        <TablesHtml />
</template>

<script>
import TablesHtml from "./TablesHtml.vue";
import ChartsHtml from "./ChartsHtml.vue";
import PagesCollapse from "./PagesCollapse.vue";
export default{
    name:'SidebarAddons',
    components:{
        ChartsHtml,
        TablesHtml,
        PagesCollapse
    }
}
</script>