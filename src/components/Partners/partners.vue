<template>
    <div id="partners" class="partners">
        <div class="title">
            <div class="title__inner">
                НАШИ ПАРТНЕРЫ
            </div> 
        </div>
        <div class="partners__content">

            <partner
                v-for="img in companiesImg" :key = img
                :img="img" 
            />

        </div>
    </div>
</template>

<script>
import partner from './partner.vue'
export default {
    components: { partner },
    data(){
        return{
            companiesImg:["sever","zavod","gf1"]
        }
    }
}
</script>

<style lang="scss">

</style>