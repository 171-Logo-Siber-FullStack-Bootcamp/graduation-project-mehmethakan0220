<template>
 

  <div id="page-top">
    <div id="wrapper">
 <!-- side-bar -->
  <SideBar />
  <!-- content-area -->
  <ContentWrapper/>
  </div>
  </div>
  <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>
    
</template>

<script>

import SideBar from './components/SideBar.vue'
import ContentWrapper from './components/ContentWrapper.vue'

export default {
  name: 'App',
  components: {
    SideBar,
    ContentWrapper
}
}
</script>

<style>

</style>
