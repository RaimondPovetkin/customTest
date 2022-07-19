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

</style>