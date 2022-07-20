<template>
  <div class="advantages-box">
    <img class="advantages-box__img" :src=getPic(advantage.pic) alt="">
    <div class="advantages-box__explanation">
      <div class="advantages-box__title">
        {{ advantage.title }}
      </div>
      <div class="advantages-box__description">
        {{ advantage.description }}
        <div v-if="advantage.points">
          <ul v-for="item in advantage.points" :key=item>
            <li>{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    advantage: {
      type: Object,
      required: true
    }
  },
  methods: {
    getPic(pic) {
      return require("./img/" + pic + ".svg");
    }
  }
};
</script>

<style lang="scss">
@import "./src/assets/styles/style";
.advantages-box {
  display: flex;
  align-items: flex-start;

  &__explanation {
    @include NotoSans400;
    font-size: 9px;
    line-height: 13px;
    padding-left: 9px;
  }

  &__title {
    @include OpenSans700;
    font-size: 12.3636px;
    line-height: 17px;
    padding-bottom: 3px;
  }

  &__img {
    width: 50px;
  }
}
@media (min-width: 412px) {
  .advantages-box {
    &__explanation {
      @include NotoSans400;
      font-size: 12px;
      line-height: 15px;
      padding-left: 18px;
    }

    &__title {
      @include OpenSans700;
      font-size: 15px;
      line-height: 20px;
      padding-bottom: 3px;
    }

    &__img {
      width: 60px;
    }
  }
}
@media (min-width: 768px) {
  .advantages-box {
    display: flex;
    align-items: flex-start;

    &__explanation {
      font-size: 12px;
      line-height: 15px;
      padding-left: 18px;
      width: 70%;
    }

    &__title {
      font-size: 15px;
      line-height: 20px;
      padding-bottom: 3px;
    }

    &__img {
      width: 60px;
    }
  }
}
@media (min-width: 1024px) {
  .advantages-box {
    width: 100%;

    &__explanation {
      font-size: 15px;
      line-height: 18px;
      padding-left: 18px;
      width: 80%;
    }

    &__title {
      font-size: 17px;
      line-height: 22px;
      padding-bottom: 3px;
    }

    &__img {
      width: 70px;
    }
  }
}
@media (min-width: 1280px) {
  .advantages-box {
    width: 100%;

    &__explanation {
      width: 100%;
      padding-left: 24px;
    }

    &__title {
      font-size: 24px;
      line-height: 33px;
    }

    &__img {
      width: 98px;
    }
  }
}
</style>