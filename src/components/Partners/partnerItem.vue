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
    width: 80%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 50px;
    img{
      width: 100%;
      height: auto;
    }
  }
}
@media (min-width: 412px) {
  .partners {
    &__item {
      width: 60%;
      margin-bottom: 70px;
    }
  }
}
@media (min-width: 768px) {
  .partners {
    &__item {
      width: 29%;
    }
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
    }
  }
}
@media (min-width: 1280px) {
  .partners{
    &__item{
      width: 23%;
      display: flex;
      align-items: center;
      justify-content:center;
      margin-bottom: 80px;
    }
  }
}
</style>