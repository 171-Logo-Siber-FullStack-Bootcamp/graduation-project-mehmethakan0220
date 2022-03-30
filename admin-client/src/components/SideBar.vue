<template>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <SidebarBrand />

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <a class="nav-link" href="index.html">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
        </li>

        <SidebarInterface />

        <SidebarAddons />

        <SidebarFooter />
    </ul>
    <!-- End of Sidebar -->
</template>


<script>
import SidebarBrand from "./SidebarBrand.vue";
import SidebarAddons from "./SidebarAddons.vue";
import SidebarInterface from "./SidebarInterface.vue";
import SidebarFooter from "./SidebarFooter.vue";

export default {
    name: 'SideBar',
    components: {
    SidebarBrand,
    SidebarAddons,
    SidebarInterface,
    SidebarFooter
}
}

</script>





<style>
</style>