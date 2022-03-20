<template>
    <NavBar></NavBar>
    <Header></Header>
    <CategoryNav></CategoryNav>
    <Section></Section>
    <Footer></Footer>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Header from '../components/TheHeader.vue';
import CategoryNav from '../components/CategoryNav.vue';
import Section from '../components/TheSection.vue';
import Footer from '../components/TheFooter.vue';


export default {
    name: 'HomePage',
    components: {
        NavBar,
        Header,
        CategoryNav,
        Section,
        Footer
    }
}
</script>