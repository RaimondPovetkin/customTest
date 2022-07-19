<template>
    <div id="form" class="form">
        <div class="form__wrap">
            <div class="form__bg"></div>
            <div class="form__content">
                <div class="form__title-box">
                    <div class="form__title">ОСТАВИТЬ ЗАЯВКУ</div>
                    <div class="form__description">НА РАСЧЁТ СТОИМОСТИ</div>
                </div>
                <form class="form-inner" action="/login" method="post">
                    <div class="text-field">
                        <div class="text-field__icon">
                            <input class="text-field__input phone" type="text" placeholder="Номер телефона">
                        </div>
                    </div>
                    <div class="text-field">
                        <div class="text-field__icon">
                            <input class="text-field__input mail" type="email" placeholder="E-mail">
                        </div>
                    </div>
                    <div class="form-inner__submit">
                        <a  href="#">Заказать расчёт цены</a>
                    </div>
                    <div class="form-inner__checkbox">
                        <label class="form-inner__custom-checkbox">
                        <input type="checkbox" name="color-1" value="indigo">
                        <span>Соглашаюсь с &ensp; <a href="#"> условиями передачи данных</a> </span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import "./src/assets/styles/style";
.form {
  position: relative;
  width: 100%;
  height: 392px;
  &__content,.form__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
  &__content {
    z-index: 100;
    margin: 49px auto;
    width: 235px;
    height: 294px;
    background-color: rgb(255, 255, 255);
    border-radius: 2.46369px;
    display: flex;
    flex-direction: column;
  }
  &__title-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
  }
  &__title {
    @include OpenSans700;
    font-size: 21.4392px;
    line-height: 29px;
    color: $color-grey;
    letter-spacing: -0.02em;
    margin-bottom: 6px;
  }
  &__description {
    @include NotoSans400;
    color: $color-grey;
    font-size: 9.64762px;
    line-height: 13px;
    letter-spacing: 0.02em;
  }
  &-inner {
    display: flex;
    flex-direction: column;
    margin: 0 10%;
    .text-field {
      margin-bottom: 1rem;
      width: 100%;
      &__input {
        @include Montserrat400;
        display: block;
        width: 100px;
        height: 3rem;
        padding: 0.375rem 0.75rem;
        font-size: 8.57567px;
        line-height: 160%;
        color: $color-darkGrey;
        background-color: #fff;
        border: 1px solid #bdbdbd;
        border-radius: 0.25rem;

        background-repeat: no-repeat;
        background-position:  8% 50%;
        width: 100%;
        &::placeholder {
          color: $color-darkGrey;
          opacity: 0.4;
        }
        &:focus {
          color: $color-darkGrey;
          background-color: #fff;
          outline: 0;
          background-image: none;
        }

      }
      .phone{
        background-image: url("/src/assets/images/phone-form.svg");
      }
      .mail{
        background-image: url("/src/assets/images/mail-form.svg");
      }
      &__icon input {
        padding-left: 2rem;
        width: 100%;
      }
    }
    &__submit{
      @include GreenButton;
      @include OpenSans700;
      font-size: 13.1397px;
      line-height: 18px;
      margin-top: 6px;
      a{
        padding: 7px 22px;
      }
    }
    &__checkbox{
      margin-top: 2%;
    }
    &__custom-checkbox>input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    &__custom-checkbox>span {
      display: inline-flex;
      @include Montserrat400;
      font-size: 5.89577px;
      line-height: 130%;
      align-items: center;
      user-select: none;
      color:#7E868E;
      a{
        @include Montserrat400;
        color: inherit;
        font-size: 5.89577px;
        line-height: 130%;
        border-bottom: 1px solid #7E868E;
      }
    }
    &__custom-checkbox>span::before {
      content: '';
      display: inline-block;
      width: 1em;
      height: 1em;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #91ca79;
      border-radius: 0.25em;
      margin-right: 0.5em;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
    &__custom-checkbox>input:checked+span::before {
      background-color: $color-green;
      background-image: url("/src/assets/images/check.svg");
    }
  }
  .form__bg {
    z-index: -1;
    background-image: url(/src/assets/images/background_form.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position:right top;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    filter: blur(2px);
  }
}
@media (min-width: 768px) {
  .form {
    height: 420px;
    display: flex;
    justify-content: center;
    background-image: url(/src/assets/images/background_form.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position:right top;
    &__wrap{
      width: $width768px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    &__content,.form__bg {
      position: relative;
    }
    .form__bg {
      display: none;
    }
    &__content {
      z-index: 0;
      margin: 0;
      width: 255px;
      height: 310px;
    }
    &__title-box {
      margin: 25px auto;
    }
    &__title {
      font-size: 23px;
      line-height: 20px;
    }
    &__description {
      font-size: 11px;
      line-height: 15px;
    }
    &-inner {
      .text-field {
        &__icon input {
          padding-left: 15%;
        }
        &__input {
          font-size: 10px;
          /* background-position:  8% 50%; */
        }
      }
      &__submit{
        font-size: 15px;
        line-height: 17px;
        margin-top: 10px;
        a{
          padding: 9px 20px;
        }
      }
      &__custom-checkbox>span {
        font-size: 8px;
        margin-top: 10px;
        a{
          color: inherit;
          font-size: inherit;
          line-height: inherit;
          border-bottom: 1px solid #7E868E;
        }
      }
    }
  }
}
@media (min-width: 1024px) {
  .form {
    height: 460px;
    display: flex;
    &__wrap{
      width: $width1024px;
    }
    &__content {
      width: 315px;
      height: 370px;
    }
    &__title-box {
      margin: 30px auto;
    }
    &__title {
      font-size: 32px;
      line-height: 40px;
    }
    &__description {
      font-size: 15px;
      line-height: 20px;
    }
    &-inner {
      .text-field {
        &__icon input {
          padding-left: 17%;
        }
        &__input {
          font-size: 14px;
          height: 3.5rem;
        }
        .phone{
          background-size: 6%;
        }
        .mail{
          background-size: 6%;
        }
      }
      &__submit{
        font-size: 18px;
        line-height: 22px;
        height: 2.5rem;
        margin-top: 8px;
        a{
          padding: 8px 27px;
        }
      }
      &__custom-checkbox>span {
        margin-top: -25px;
        font-size: 8px;
      }
    }
  }
}
@media (min-width: 1280px) {
  .form {
    &__wrap{
      margin: 0 auto;
      width: $width1280px;
    }
    height: 794px;
    &__content {
      width: 452px;
      height: 528px;
    }
    &__title-box {
      margin: 42px auto;
    }
    &__title {
      @include OpenSans700;
    }
    &__description {
      @include NotoSans400;
    }
    &-inner {
      height: 320px;
      justify-content: space-between;
      .text-field {
        &__icon input {
          padding-left: 17%;
        }
        &__input {
          font-size: 14px;
          height: 5rem;
          /* background-position:  8% 50%; */
        }
        .phone{
          background-size: 6%;
        }
        .mail{
          background-size: 6%;
        }
      }
      &__submit{
        font-size: 21px;
        line-height: 26px;
        height: 4rem;
        margin-top: 20px;
        a{
          padding: 18px 66px;
        }
      }
      &__custom-checkbox>span {
        font-size: 11px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>