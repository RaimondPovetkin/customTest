<template>
  <div>
    <header id="header"
            class="header"
            :class="{'header-move': scrollShow}"
    >
      <div class="header__content">
        <a href="#banner" class="header__logo" @click.prevent="goToBlock">
          <img href="#banner" class="logo" :src=getPic(imagesPage.logoImg.name,imagesPage.logoImg.ext,imagesPage.dir)
               alt="">
        </a>
        <input id="header__hidden-check" type="checkbox"/>
        <label class='header__menu-button' for="header__hidden-check">
          <div class='menu-button'>
            <img :src=getPic(imagesPage.burgerImg.name,imagesPage.burgerImg.ext,imagesPage.dir) alt="">
          </div>
        </label>
        <div class="header__naw">
          <a href="#catalog" class="header__link" @click.prevent="goToBlock">Каталог</a>
          <a href="#form" class="header__link" @click.prevent="goToBlock">Расчёт стоимости</a>
          <a href="#partners" class="header__link" @click.prevent="goToBlock">Партнёры</a>
          <a href="#feedback" class="header__link" @click.prevent="goToBlock">Отзывы</a>
        </div>
        <div class="header__contacts">
          <div class="select-block">
            <img class="select-block__logo" :src=getPic(imagesPage.mapImg.name,imagesPage.mapImg.ext,imagesPage.dir)
                 alt="map-marker">
            <a href="#map" class="select-block__link" @click.prevent="goToBlock">{{ getCity }}</a>
            <a href="#" class="select-block__row" @click.prevent="openPopap">Все города</a>
          </div>
          <div class="select-block">
            <img class="select-block__logo" :src=getPic(imagesPage.phoneImg.name,imagesPage.phoneImg.ext,imagesPage.dir)
                 alt="phone">
            <a href="#form" class="select-block__link" @click.prevent="goToBlock">{{ getContactNumber }}</a>
            <a href="#form" class="select-block__row" @click.prevent="goToBlock">Заказать звонок</a>
          </div>
        </div>
        <div v-if="openPop" id="popup" class="popup">
          <a href="#header" class="popup__area" @click.self="closePopap"></a>
          <div class="popup__body">
            <div class="popup__content">
              <a href="#header" class="popup__close" @click.prevent="closePopap">
                <img :src=getPic(imagesPage.closeCrossImg.name,imagesPage.closeCrossImg.ext,imagesPage.dir) alt="">
              </a>
              <div class="popup__title">Выберите город</div>
              <div class="popup__text" @click='closePopap'>
                <span v-for="(item, index) in allCitiesState" @click="indexCity=index" :key="item">
                  {{ item.city }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";

export default {
  props: {
    scrollShow: Boolean
  },
  data() {
    return {
      openPop: false,
      indexCity: 0
    };
  },
  methods: {
    ...mapMutations(["changeIndex"]),
    openPopap() {
      this.openPop = true;
      document.body.style.overflow = "hidden";
    },
    closePopap() {
      this.changeIndex(this.indexCity);
      this.openPop = false;
      document.body.style.overflow = "";
    },
    goToBlock(e) {
      document.querySelector(e.target.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  },
  computed: {
    ...mapGetters(["allCitiesState", "cityIndex", "imagesPage"]),
    getCity() {
      return this.allCitiesState[this.cityIndex].city;
    },
    getContactNumber() {
      return this.allCitiesState[this.cityIndex].addresses[0].contacts;
    }
  },
  inject: ["getPic"],
};
</script>

<style lang="scss">
@import "./src/assets/styles/style";

.header {
  @include Montserrat400;
  position: static;
  width: 100%;
  top: -97px;
  left: 0;
  z-index: 10;
  background-color: rgb(255, 255, 255);
  height: 46px;

  &-move {
    transition: top 0.5s;
    position: fixed;
    top: 0;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: $color-black;
    height: 46px;
    padding: $padding-mobile-0;
  }

  #header__hidden-check {
    display: none;
  }

  &__menu-button {
    display: flex;
  }

  &__naw {
    position: absolute;
    top: -4px;
    margin-top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  #header__hidden-check ~ .header__naw a {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  #header__hidden-check:checked ~ .header__naw a {
    height: 2.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 1;
    text-decoration: none;
  }

  &__naw > a {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: $color-black;
    background-color: rgb(255, 255, 255);
    opacity: 0;
  }

  &__naw > a:not(:last-child) {
    border-bottom: 1px solid #444;
  }

  &__contacts {
    display: none;
  }

  .popup {
    position: fixed;
    color: aliceblue;
    width: 100%;
    height: 100%;
    background-color: rgba($color: $color-black, $alpha: 0.5);
    top: 0;
    left: 0;

    &:target {
      opacity: 1;
    }

    &__body {
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px 10px;
    }

    &__content {
      background-color: aliceblue;
      border-radius: 3px;
      color: $color-black;
      width: 500px;
      max-width: 800px;
      padding: 30px;
      position: relative;
    }

    &__title {
      text-align: center;
      margin-bottom: 20px;
    }

    &__text {
      text-align: center;
      display: flex;
      flex-direction: column;

      span {
        padding: 5%;
        color: $color-green;

        &:hover {
          color: #6cc247;
          transform: scale(1.1);
          cursor: pointer;
        }
      }
    }

    &__close {
      position: absolute;
      right: 18px;
      top: 15px;
    }

    &__area {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
}

@media (min-width: 412px) {
  .header {
    &__content {
      padding: $padding-mobile-412;
    }
  }
}

@media (min-width: 768px) {
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 116px;

    &__content {
      width: $width768px;
      height: auto;
      display: grid;
      grid-template-columns: 140px 3fr 1.5fr;
      grid-template-areas: "header__logo header__naw header__contacts";
      align-items: center;
      grid-column-gap: 30px;
      padding: 0;
    }

    &__logo {
      grid-area: header__logo;
      padding: 0;
      justify-self: center;

    }

    #header__hidden-check ~ .header__naw a {
      height: auto;
      margin: 0;
    }

    &__menu-button {
      display: none;
    }

    &__naw {
      grid-area: header__naw;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      list-style-type: none;
      margin: 0;
      padding: 0;

      & > a {
        display: inline;
        margin: auto;
        width: auto;
        color: $color-black;
        background-color: rgba(156, 22, 181, 0);;
        opacity: 1;
      }
    }

    &__link {
      @include Montserrat400;
      margin-right: 10px;
      color: $color-black;
      font-size: 12px;
      text-decoration: none;

      &:hover {
        text-decoration: underline 1px;
        transform: scale(1.05);
      }

      &:active {
        text-decoration: none;
        font-size: 12px;
        color: #6C6C6C;
      }

      &:last-child {
        margin-right: 0px;
      }
    }

    &__contacts {
      display: flex;
      grid-area: header__contacts;
    }

    .select-block {
      display: grid;
      grid-template-columns: 1fr 8fr;
      grid-template-areas:". ." "select-block__logo select-block__link" ". select-block__row";
      grid-template-rows: 1fr 1fr 1fr;
      grid-column-gap: 8px;
      align-items: center;

      &__logo {
        grid-area: select-block__logo;
        width: 8px;
        margin-top: -5px;
      }

      &__link {
        @include Montserrat600;
        grid-area: select-block__link;
        text-decoration: none;
        color: $color-black;
        font-size: 10px;
        line-height: 24px;
        margin-top: -5px;
      }

      &__row {
        @include Montserrat400;
        grid-area: select-block__row;
        text-decoration: none;
        color: $color-green;
        font-size: 9px;
        line-height: 17px;

        &:hover {
          text-decoration: underline;
        }

        &:active {
          color: #298601;
          text-decoration: none;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .header {
    &__content {
      width: $width1024px;
      grid-template-columns: 220px 2.2fr 1.3fr;
      grid-column-gap: 45px;
    }

    &__logo {
      justify-self: center;
    }

    &__naw {
      justify-self: center;
    }

    &__link {
      @include Montserrat400;
      margin-right: 20px;
      font-size: 18px;
      text-decoration: none;

      &:active {
        text-decoration: none;
        font-size: 18px;
      }
    }

    &__contacts {
      justify-content: space-between;
    }

    .select-block {
      &__logo {
        width: auto;
      }

      &__link {
        font-size: 14px;
        line-height: 24px;
      }

      &__row {
        font-size: 12px;
        line-height: 17px;
      }
    }
  }
}

@media (min-width: 1280px) {
  .header {
    &__content {
      width: $width1280px;
      grid-template-columns: 220px 2.3fr 1.3fr;
      grid-column-gap: 50px;
    }

    &__logo {
      justify-self: center;
    }

    &__naw {
      justify-self: center;
      padding-right: 36px;
    }

    &__link {
      @include Montserrat400;
      margin-right: 44px;
      text-decoration: none;

      &:active {
        text-decoration: none;
        font-size: 20px;
      }
    }

    &__contacts {
      .select-block {
        grid-column-gap: 8px;

        &__link {
          @include Montserrat600;
        }

        &__row {
          font-size: 14px;
          line-height: 17px;
        }
      }
    }
  }
}
</style>