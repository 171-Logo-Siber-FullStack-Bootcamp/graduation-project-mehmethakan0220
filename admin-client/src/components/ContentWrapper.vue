<template>

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <TopBar />

                <MainContent/>

            </div>
            <!-- End of Main Content -->

            <FooterComp />

        </div>
</template>




<script>
import TopBar from "./TopBar.vue";
import FooterComp from "./FooterComp.vue";
import MainContent from "./MainContent.vue";

export default{
    name:'ContentWrapper',
    components:{
    TopBar,
    FooterComp,
    MainContent
}

}




</script>



<style>










</style>



