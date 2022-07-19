<template>
    <div>
        <header id="header" class="header">
            <div class="header__content">
                <a href="#" class="header__logo">
                    <img class="logo" src="./img/logo.svg" alt="">
                </a>
                <input id="header__hidden-check" type="checkbox" />
                <label class='header__menu-button' for="header__hidden-check">
                    <div class='menu-button'>
                        <img src="./img/b.svg" alt="">
                    </div>
                </label>
                <naw class="header__naw">
                    <a href="#catalog" class="header__link" @click="goToBlock">Каталог</a>
                    <a href="#form" class="header__link" @click="goToBlock">Расчёт стоимости</a>         
                    <a href="#partners" class="header__link" @click="goToBlock">Партнёры</a>
                    <a href="#feedback" class="header__link" @click="goToBlock">Отзывы</a>
                </naw>
                <div class="header__contacts">
                    <div class="select-block">
                        <img class="select-block__logo" src="./img/map-marker.svg" alt="map-marker">
                        <a class="select-block__link" href="#">{{ $store.state.page.cities[$store.state.page.index].city }}</a>
                        <a class="select-block__row" href="#popup">Все города</a>
                    </div>
                    <div class="select-block">
                        <img class="select-block__logo" src="./img/phone.svg" alt="phone">
                        <a class="select-block__link" href="#">{{$store.state.page.cities[$store.state.page.index].contacts}}</a>
                        <a class="select-block__row" href="#">Заказать звонок</a>
                    </div>
                </div>

                <div id="popup" class="popup">
                    <a href="#header" class="popup__area"></a>
                    <div class="popup__body">
                        <div class="popup__content">
                            <a href="#header" class="popup__close">
                                <img src="./img/close.svg" alt="">
                            </a>
                            <div class="popup__title">Выберите город</div>
                            <div class="popup__text">
                                <span @click="$store.commit('changeIndex',0)">Москва</span>
                                <span @click="$store.commit('changeIndex',1)">Сочи</span>
                                <span @click="$store.commit('changeIndex',2)">Вологда</span>
                                <span @click="$store.commit('changeIndex',3)">Череповец</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
        goToBlock(e){
            e.preventDefault()
            let item=e.target
            let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

            let scroller = setInterval(function() {
                let scrollBy = coordY / 20;
    
                if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                window.scrollBy(0, scrollBy);
                } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
                }
            }, 300 / 20);
        }
    }   
}
</script>

<style lang="scss">
 @import "./src/assets/styles/style";
</style>