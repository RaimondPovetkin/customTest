<template>
    <div class="partners__item">
        <img :src=getPic(img) alt="" class="img">
    </div>
</template>

<script>
export default {
    props:{
        img:{
            type: String,
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