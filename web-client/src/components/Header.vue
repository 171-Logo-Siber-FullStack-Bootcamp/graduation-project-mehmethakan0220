<template>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <router-link class="navbar-brand" to="/">Hepsi Şurada</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Ana Sayfa</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >Alışveriş</a>

                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <router-link
                                    class="dropdown-item"
                                    :to="{ name: 'AllProducts' }"
                                >Tüm Ürünler</router-link>
                            </li>

                            <li>
                                <router-link
                                    class="dropdown-item"
                                    :to="{ name: 'AllCategories' }"
                                >Tüm Kategoriler</router-link>
                            </li>

                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li>
                                <router-link
                                    class="dropdown-item"
                                    :to="{ name: 'Popular' }"
                                >Popüler Ürünler</router-link>
                            </li>
                            <li>
                                <router-link
                                    class="dropdown-item"
                                    :to="{ name: 'NewArrivals' }"
                                >Yeni Gelenler</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <TheCard />
                <ul v-if="$store.state.isLogin" class="navbar-nav mb-2 mb-lg-0 ms-lg-2">
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i class="fa-solid fa-user fa-lg"></i>
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item" href="#!">Hesap</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li>
                                <a class="dropdown-item" href="#!">Parola Değiştir</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#!">Hesap Bilgilerim</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div class="d-flex mx-3">
                    
                    <button v-if="!$store.state.isLogin"
                        class="btn btn-secondary btn-sm"
                        @click="$router.push('/login')"
                        type="submit"
                    >Giriş yap</button>
                    
                    <button v-else
                        class="btn btn-secondary btn-sm"
                        @click="exit"
                        type="submit"
                    >Çıkış yap</button>
                </div>
                
            </div>
        </div>
    </nav>
</template>

<script>
import Card from "./Card.vue";
export default {
    name: "HeaderComponent",
    components: { TheCard: Card },
    methods:{
        exit(){
            this.$store.commit("unSetUser");
        }
    }
}
</script>

<style>
</style>