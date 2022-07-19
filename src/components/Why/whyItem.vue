<template>
    <div class="why-box">
        <div class="why-box__img-box">
            <img class="why-box__img" :src=getPic(item.pic) alt="">
        </div>
        <div class="why-box__text">
            <div class="why-box__title">
                {{item.title}}
            </div>
            <div class="why-box__description">
                {{item.description}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        item:{
            type: Object,
            required: true
        }
    },
    methods: {
        getPic(pic) {
            return require('./img/'+pic+'.svg')
        }
    }
}
</script>

<style lang="scss">

</style>