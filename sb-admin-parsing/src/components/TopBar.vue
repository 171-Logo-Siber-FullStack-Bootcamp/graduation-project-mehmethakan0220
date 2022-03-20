<template>
<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                    <TopSearch />

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">

                        <TopSearchXs/>

                        <AlertCenter/>

                        <MessageCenter/>

                        <div class="topbar-divider d-none d-sm-block"></div>

                        <UserInformation />

                    </ul>

                </nav>
                <!-- End of Topbar -->
                </template>

<script>
import TopSearch from "./TopSearch.vue"
import AlertCenter from "./AlertCenter.vue"
import MessageCenter from "./MessageCenter.vue"
import UserInformation from "./UserInformation.vue"
import TopSearchXs from "./TopSearchXs.vue"
export default{
    name:'TopBar',
    components:{
    TopSearch,
    AlertCenter,
    MessageCenter,
    UserInformation,
    TopSearchXs
}
}
</script>