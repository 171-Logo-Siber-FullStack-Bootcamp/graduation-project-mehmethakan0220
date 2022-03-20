<template>
<!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">

                        <!-- Login register and forgot passowrd pages -->
                        <AccessScreens/>

                        <!-- 404 not found page and blank pages -->
                        <OtherPages/>

                    </div>
                </div>
            </li>
</template>

<script>
import AccessScreens from "./AccessScreens.vue";
import OtherPages from "./OtherPages.vue";

export default{
    name:'PagesCollapse',
    components:{
    AccessScreens,
    OtherPages
}
}

</script>