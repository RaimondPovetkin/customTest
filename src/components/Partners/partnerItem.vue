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

<style lang="scss">
@import "./src/assets/styles/style";
.partners{
  &__item{
    display: flex;
    justify-content: flex-start;
    margin-bottom: 40px;
  }
}
@media (min-width: 1024px) {
  .partners{
    &__item{
      width: 29%;
      display: flex;
      align-items: center;
      justify-content:center;
      margin-bottom: 60px;
      .img{
        transform: scale(1.2);
      }
    }
  }
}
@media (min-width: 1280px) {
  .partners{
    &__item{
      width: 33%;
      display: flex;
      align-items: center;
      justify-content:center;
      margin-bottom: 80px;
      .img{
        transform: scale(1.7);
      }
    }
  }
}
</style>