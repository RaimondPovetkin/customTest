<template>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-content__logo">
                <img class="logo" src="./img/logo.svg" alt="">
            </div>
            <div class="footer-content__text-block">
                <div class="footer-content__address">
                    <img src="./img/map-marker.svg" alt="">
                    <div class="footer-content__address-inner">
                         
                         {{ $store.state.page.cities[$store.state.page.index].address }}
                    </div>
                </div>
                <div class="phone">
                    <img src="./img/phone.svg" alt="">
                    <div class="footer-content__phone-inner">{{ $store.state.page.cities[$store.state.page.index].contacts }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

</style>