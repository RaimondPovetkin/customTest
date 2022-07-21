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
                         {{ allCitiesState[cityIndex].address }}
                    </div>
                </div>
                <div class="phone">
                    <img src="./img/phone.svg" alt="">
                    <div class="footer-content__phone-inner">{{ allCitiesState[cityIndex].contacts }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    computed: mapGetters(["allCitiesState", "cityIndex"])
}
</script>

<style lang="scss">
@import "./src/assets/styles/style";
.footer{
  height: 46px;
  &-content{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: $padding-mobile-0;
    &__logo{
      margin: auto 0;
      display: flex;
      align-items: center;
    }
    &__address{
      display: none;
    }
    &__phone-inner{
      @include Montserrat600;
      font-size: 13.7722px;
      line-height: 17px;
      margin-left: 7px;
    }
    &__text-block{
      .phone{
        display: flex;
        align-items: center;
        img{
          width: 12px;
        }
      }
    }
  }
}
@media (min-width: 412px) {
  .footer{
    height: 80px;
    &-content{
      padding: $padding-mobile-412;

      &__phone-inner{
        @include Montserrat600;
        font-size: 15px;
        line-height: 18px;
        margin-left: 7px;
      }
      &__text-block{
        .phone{
          img{
            width: 12px;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) {
  .footer{
    height: 100px;
    display: flex;
    justify-content: center;
    &-content{
      width: $width768px;
      padding: 0;
      &__text-block{
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &__address{
        display:flex;
        img{
          width: 17px;
        }
      }
      &__address-inner{
        @include Montserrat400;
        font-size: 19px;
        line-height: 22px;
        margin:0px 30px 0px 9px;

      }
      &__phone-inner{
        @include Montserrat600;
        font-size: 19px;
        line-height: 22px;
        margin-left: 9px;
      }
      &__text-block{
        .phone{
          img{
            width: 17px;
          }
        }
      }
    }
  }
}
@media (min-width: 1024px) {
  .footer{
    height: 140px;
    &-content{
      width: $width1024px;
      &__address{
        img{
          width: 19px;
        }
      }
      &__address-inner{
        @include Montserrat400;
        font-size: 22px;
        line-height: 25px;
        margin:0px 40px 0px 9px;

      }
      &__phone-inner{
        font-size: 22px;
        line-height: 25px;
        margin-left: 9px;
      }
      &__text-block{
        .phone{
          img{
            width: 19px;
          }
        }
      }
    }
  }
}
@media (min-width: 1280px) {
  .footer{
    height: 187px;
    &-content{
      width: $width1280px;
      &__address{
        img{
          width: 21px;
        }
      }
      &__address-inner{
        @include Montserrat400;
        font-size: 22px;
        line-height: 25px;
        margin:0px 88px 0px 9px;

      }
      &__phone-inner{
        font-size: 24px;
        line-height: 29px;
        margin-left: 9px;
      }
      &__text-block{
        .phone{
          img{
            width: 21px;
          }
        }
      }
    }
  }
}
</style>