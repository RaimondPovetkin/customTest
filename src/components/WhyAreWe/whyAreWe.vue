<template>
    <div class="why">
        <div class="title">
            <div class="title__inner">
                ПОЧЕМУ МЫ?
            </div>
        </div>
        <div class="why-content">
            <whyItem
                v-for="item in cards" :key = item
                :item="item"
            />
        </div>
    </div>    
</template>

<script>
import whyItem from './whyItem.vue'
export default {
  components: { whyItem },
        data(){
        return{
            cards:[
                {
                    pic:"factory",
                    title:"Собственное производство", 
                    description:"Мы изготавливаем элементы краб-системы на собственном производстве в Вологде, уделяя особое внимание качеству."
                },
                {
                    pic:"truck",
                    title:"Доставка по всей России", 
                    description:"Мы осуществляем доставку нашей продукции по всей России."
                },
                {
                    pic:"rub",
                    title:"Доступные цены", 
                    description:"Так как мы являемся производителем, мы предлагаем нашу продукцию без лишних наценок."
                },
                {
                    pic:"like",
                    title:"Гарантия качества", 
                    description:"Мы уделяем особое внимание качеству нашей продукции и дорожим нашими клиентами."
                },
            ],
        }
    },
}
</script>

<style lang="scss">
@import "./src/assets/styles/style";
.why-content{
  padding: $padding-mobile-0;
}
@media (min-width: 412px) {
  .why-content{
    padding: $padding-mobile-412;
  }
}
@media (min-width: 768px) {
  .why-content{
    margin: 0 auto 50px auto;
    padding: 0;
    width: $width768px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px 20px;
  }
}
@media (min-width: 1024px) {
  .why-content{
    margin: 0 auto 70px auto;
    padding: 0;
    width: $width1024px;
    display: flex;
    justify-content: space-between;
  }
}
@media (min-width: 1280px) {
  .why-content{
    margin: 0 auto 90px auto;
    width: $width1280px;
  }
}
</style>