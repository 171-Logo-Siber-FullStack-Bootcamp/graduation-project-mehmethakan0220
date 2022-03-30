<template>
        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block" />

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        <SidebarMessage />
</template>

<script>
import SidebarMessage from "./SidebarMessage.vue";
export default{
    name:'SidebarFooter',
    components:{
        SidebarMessage,
    }
}
</script>