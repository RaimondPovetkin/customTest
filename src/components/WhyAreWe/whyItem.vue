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
@import "./src/assets/styles/style";
.why-box{
  display: flex;
  margin-bottom: 24px;
  &__text{
    display: flex;
    flex-direction: column;
    margin-left: 12px;
  }
  &__title{
    @include OpenSans700;
    font-weight: 700;
    font-size: 13.36px;
    line-height: 18px;
  }
  &__description{
    @include NotoSans400;
    font-weight: 400;
    font-size: 9.27px;
    line-height: 13px;
  }
}
@media (min-width: 412px) {
  .why-box{
    margin-bottom: 29px;
    &__img{
      width: 60px;
    }
    &__title{
      @include OpenSans700;
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 5px;
    }
    &__description{
      @include NotoSans400;
      font-size: 13px;
      line-height: 17px;
    }
  }
}
@media (min-width: 768px) {
  .why-box{
    margin: 0;
    &__text{
      margin-left: 12px;
    }
    &__img{
      width: 80px;
    }
    &__title{
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 6px;
    }
    &__description{
      font-size: 14px;
      line-height: 17px;
    }
  }
}
@media (min-width: 1024px) {
  .why-box{
    width: 25%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__text{
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    &__img{
      width: 100px;
    }
    &__title{
      font-size: 19px;
      line-height: 27px;
      margin-bottom: 7px;
      width: 60%;
    }
    &__description{
      font-size: 15px;
      line-height: 22px;
    }
  }
}
@media (min-width: 1280px) {
  .why-box{
    width: 302px;
    &__img-box{
      margin-bottom: 24px;
    }
    &__img{
      width: 120px;
    }
    &__title{
      font-size: 24px;
      line-height: 33px;
      margin-bottom: 8px;
    }
    &__description{
      @include NotoSans400;
    }
  }
}

</style>