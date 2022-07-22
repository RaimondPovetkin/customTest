<template>
  <div class="catalog-card">
    <div class="catalog-card__img-box">
      <img class="catalog-card__img" :src=getPic(crab.pic,img.ext,img.dir) @click="showPre" alt="">
    </div>
    <div class="catalog-card__description-block">
      <div class="catalog-card__name">
        {{ crab.title }}
      </div>
      <div class="catalog-card__package">
        <div class="catalog-card__price">
          {{ crab.price }}
        </div>
        <div class="catalog-card__compl-block">
          <div class="catalog-card__count">
            <input type="number" v-model="count">
          </div>
          <div class="catalog-card__compl">
            комп.
          </div>
        </div>
      </div>
      <div class="catalog-card__order">
        <div class="catalog-card__button">
          <a href="#" @click.prevent="changeInner">
            <span v-if="!order">Заказать</span>
            <span v-else>Отменить</span>
          </a>
        </div>
      </div>
    </div>
    <div>
      <div v-if="openModal" id="myModal" class="modal" @click.self="closePre">
        <span class="close" @click="closePre">×</span>
        <img :src=getPic(crab.pic,img.ext,img.dir) class="modal-content" id="img01">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    crab: {
      type: Object,
      required: true
    },
    img: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      count: 0,
      order: false,
      openModal: false
    };
  },
  methods: {
    changeInner() {
      this.order = !this.order;
    },
    showPre() {
      document.body.style.overflow = "hidden";
      this.openModal = true;
    },
    closePre() {
      this.openModal = false;
      document.body.style.overflow = "";
    }
  },
  inject: ["getPic"],
};
</script>

<style lang="scss">
@import "./src/assets/styles/style";

.close {
  position: absolute;
  top: 10%;
  right: 10%;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

.catalog {
  &-card {
    width: 290px;
    height: 316px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0px 4.90486px 11.0359px rgba(0, 0, 0, 0.15);

    &__img-box {
      position: relative;
    }

    &__img {
      border-radius: 3px 3px 0 0;
    }

    &__name {
      @include NotoSans400;
      font-size: 12.115px;
      line-height: 17px;
    }

    &__description-block {
      padding: 8px 18px 18px 18px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__package {
      display: flex;
      justify-content: space-between;
    }

    &__compl-block {
      @include NotoSans400;
      display: flex;
      align-items: center;
      font-size: 12.1254px;
      line-height: 17px;
    }

    &__price {
      @include Montserrat700;
      font-size: 16px;
      line-height: 20px;
    }

    &__count {
      /*             text-decoration: none;
                  padding: 0px 16px;
                  border: 1px solid rgb(182, 182, 182);
                  border-radius: 2px;
                  margin-right: 3px; */
      input {
        border: 1px solid rgb(182, 182, 182);
        width: 50px;
        padding: 0px 6px;
        border-radius: 2px;
        margin-right: 3px;
        text-align: center;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    &__button {
      @include OpenSans400;
      font-size: 12px;
      line-height: 17px;
      display: flex;
      justify-content: flex-end;

      & a {
        padding: 8px 20px;
        border: 1px solid rgb(83, 83, 83);
        border-radius: 2px;
        margin-right: -3px;

        &:hover {
          background-color: #F0F0F0;
        }
      }

    }
  }
}

.modal {
  display: block;
  position: fixed;
  z-index: 20;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);

  &-content {
    margin: 30% auto;
    width: 100%;
    display: block;
    max-width: 500px;
  }
}

.modal-content {
  margin: 30% auto;
  width: 100%;
  display: block;
  max-width: 500px;
}

@media (min-width: 768px) {
  .catalog {
    &-card {
      margin: 0 auto;
      border-radius: 3px;
    }
  }
  .modal-content {
    margin: 10% auto;
    width: 80%;
  }
  @media (min-width: 1280px) {
    &-card {
      width: 302px;
      height: 376px;
      margin: 0 auto;
      border-radius: 3px;

      &__img {
        width: 302px;
      }

      &__name {
        @include NotoSans400;
      }

      &__compl-block {
        font-size: 14px;
        line-height: 19px;
      }

      &__price {
        @include Montserrat700;
      }

      &__button {
        font-size: 18px;
        line-height: 25px;
      }
    }
  }
}
</style>