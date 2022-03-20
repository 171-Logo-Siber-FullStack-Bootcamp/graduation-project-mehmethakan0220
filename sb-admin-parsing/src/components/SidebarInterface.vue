<template>
<!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Interface</div>

        <!-- sidebar component segment -->
        <ComponentCollapse />

        <!-- sidebar utilities segment -->
        <UtilitiesCollapse />
</template>

<script>

import ComponentCollapse from "./ComponentCollapse.vue";
import UtilitiesCollapse from "./UtilitiesCollapse.vue";

export default{
    name:'SidebarInterface',
    components:{
        ComponentCollapse,
        UtilitiesCollapse
    }
}
</script>