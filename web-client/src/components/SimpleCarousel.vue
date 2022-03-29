<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" :style="{ height: height }" v-for="image in images" :key="image.id">
                <img
                    v-bind:src="'data:image/jpeg;base64,' + image.byte_data"
                    class="d-block w-100"
                    :alt="image.name"
                    id="carousel-image"
                />
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>

export default {
    props: ['images','height']
}
</script>


<style>
.carousel-item {
    justify-content: center;
    align-items: center;
    width: 100% !important;
    height: 200px;
    object-fit: fill !important;
}
</style>