<template>
    <div class="banner banner__block">
        <div class="banner-content">
            <div class="banner-content__title">
              {{ titleBanner }}
            </div>
            <div class="banner-content__description">
              {{ descriptionBanner }}
            </div>
            <div>
              <button class="banner-content__button">
                {{ buttonTextBanner }}
              </button>
            </div>
        </div>
    </div> 
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed: mapGetters(["titleBanner","descriptionBanner","buttonTextBanner"])
}
</script>

<style lang="scss">
@import "./src/assets/styles/style";
.banner{
  height: 153px;
  width: 100%;
  display: flex;
  background-image: url(/src/assets/images/banner.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  &__block{
    margin-top: 46px;
  }
  .banner-content{
    margin: auto;
    width: 100%;
    height: 99px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    padding: $padding-mobile-0;
    &__title{
      @include OpenSans700;
      font-weight: 700;
      font-size: 20px;
      line-height: 27px;
    }
    &__description{
      @include OpenSans400;
      font-size: 9.41009px;
      line-height: 13px;
      width: 160px;
      margin-bottom: 10px;
    }
    &__button{
      @include GreenButton;
    }
  }
}
@media (min-width: 412px) {
  .banner{
    height: 220px;
    .banner-content{
      padding: $padding-mobile-412;
    }
  }
}
@media (min-width: 768px) {
  .banner{
    height: 330px;
    &__block{
      margin-top: 116px;
    }
    .banner-content{
      width: $width768px;
      height: 150px;
      display: flex;
      padding: 0;
      &__title{
        font-size: 33px;
      }
      &__description{
        font-size: 13px;
        line-height: 20px;
        width: 160px;
      }
    }
  }
}
@media (min-width: 1024px) {
  .banner{
    height: 430px;

    .banner-content{
      width: $width1024px;
      height: 180px;
      &__title{
        font-size: 44px;
      }
      &__description{
        font-size: 22px;
        line-height: 30px;
        width: 260px;
      }
    }
  }
}
@media (min-width: 1280px) {
  .banner{
    height: 565px;
    .banner-content{
      width: $width1280px;
      height: 290px;
      &__title{
        font-size: 72px;
        line-height: 98px;
      }
      &__description{
        line-height: 30px;
        width: 460px;
        padding-bottom: 30px;
      }
    }
  }
}
</style>