<template>
  <div class="feedback-content__box">
    <div class="feedback-content__pic-box">
      <img class="feedback-content__pic" :src=getPic(comment.pic) alt="">
    </div>
    <div class="feedback-content__text">
      <div class="feedback-content__title">
        {{ comment.title }}
      </div>
      <div class="feedback-content__description">
        {{ comment.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  methods: {
    getPic(pic) {
      return require("./img/" + pic + ".png");
    }
  }
};
</script>

<style lang="scss">
@import "./src/assets/styles/style";

.feedback-content {
  &__box {
    display: flex;
    justify-content: center;
    padding: 14px 5px 14px 14px;
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 16px;
  }

  &__pic {
    width: 70px;
  }

  &__text {
    margin-left: 14px;
  }

  &__title {
    @include OpenSans700;
    font-size: 13.36px;
    line-height: 18px;
  }

  &__description {
    @include NotoSans400;
    font-size: 11px;
    line-height: 15px;
  }
}

@media (min-width: 768px) {
  .feedback-content {
    &__box {
      flex-direction: column;
      align-items: center;
      padding: 8px 5px 8px 8px;
      border-radius: 5px;
      margin-bottom: 20px;
      width: 245px;
      margin: 5px;
    }

    &__pic {
      width: 90px;
    }

    &__text {
      margin: 0;
    }

    &__title {
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      margin-bottom: 5px;
    }

    &__description {
      font-size: 13px;
      line-height: 18px;
      text-align: left;
    }
  }
}

@media (min-width: 1024px) {
  .feedback-content {
    &__box {

      flex-direction: column;
      align-items: center;
      padding: 15px 10px;
      border-radius: 5px;
      margin-bottom: 20px;
      width: 320px;
    }

    &__pic {
      width: 90px;
    }

    &__text {
      margin: 0;
    }

    &__title {
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      margin-bottom: 5px;
    }

    &__description {
      font-size: 15px;
      line-height: 20px;
      text-align: left;
    }
  }
}

@media (min-width: 1280px) {
  .feedback-content {
    &__box {

      flex-direction: column;
      align-items: center;
      padding: 24px 32px;
      border-radius: 5px;
      margin-bottom: 30px;
      width: 411px;
    }

    &__pic {
      width: 134px;
    }

    &__text {
      margin: 0;
    }

    &__title {
      font-size: 24px;
      line-height: 33px;
      text-align: center;
      margin: 12px 0;
    }

    &__description {
      @include NotoSans400;
    }
  }
}
</style>