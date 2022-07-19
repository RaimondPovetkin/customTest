<template>
    <div class="manufacture">
        <div class="manufacture__title">
            <div class="manufacture__title-inner">
                НАШЕ ПРОИЗВОДСТВО
            </div>
        </div>
        <div class="manufacture__content">
            <div class="video" @click="setVideo">
            </div>
        </div>
        <div class="hide"></div>
    </div>
</template>


<script>
export default {
    methods: {
        setVideo(e) {
            e.target.insertAdjacentHTML('afterbegin','<iframe src="https://www.youtube.com/embed/_Gvcrme1WIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
        }
    }
}
</script>

<style lang="scss">

</style>