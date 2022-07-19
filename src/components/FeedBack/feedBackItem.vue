<template>
    <div class="feedback-content__box">
        <div class="feedback-content__pic-box">
            <img class="feedback-content__pic" :src=getPic(comment.pic) alt="">
        </div>
        <div class="feedback-content__text">
            <div class="feedback-content__title">
                {{comment.title}}
            </div>
            <div class="feedback-content__description">
                {{comment.description}}
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    props:{
        comment:{
            type: Object,
            required: true
        }
    },
    methods: {
        getPic(pic) {
            return require('./img/'+pic+'.png')
        }
    }
}
</script>

<style lang="scss">

</style>