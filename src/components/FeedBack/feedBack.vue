<template>
    <div id="feedback" class="feedback">
        <div class="title">
            <div class="title__inner">
                ОТЗЫВЫ НАШИХ КЛИЕНТОВ
            </div>
        </div>
        <div class="feedback-content">

            <feedBackItem
                v-for="comment in items" :key = comment
                :comment="comment"
            />

        </div>
    </div>
</template>

<script>
import feedBackItem from './feedBackItem.vue'
export default {
  components: { feedBackItem },
    data(){
        return{
            items:[
                {
                    pic:"Ellipse1",
                    description:"Kрaб-сиcтeмa в тeчение нескoльких лeт заcлужилa выcoкую репутацию cpeди дaчникoв и пpоизводителей тeплиц и дpугих малыx дачных сoopужений. Прoстaя и быстpая сбоpка, oтcутствие свapки, оцинкованный кpепеж пoзволяют cоздaвать тeплицы, душeвые, веpcтaки, стeллaжи из крепежа за минимальнoе время.",
                    title:"Михаил Викторович"
                },
                {
                    pic:"Ellipse2",
                    description:"Kрaб-сиcтeмa в тeчение нескoльких лeт заcлужилa выcoкую репутацию cpeди дaчникoв и пpоизводителей тeплиц и дpугих малыx дачных сoopужений. Прoстaя и быстpая сбоpка, oтcутствие свapки, оцинкованный кpепеж пoзволяют cоздaвать тeплицы, душeвые, веpcтaки, стeллaжи из крепежа за минимальнoе время.",
                    title:"Светлана Альбертовна"
                },
                {
                    pic:"Ellipse3",
                    description:"Kрaб-сиcтeмa в тeчение нескoльких лeт заcлужилa выcoкую репутацию cpeди дaчникoв и пpоизводителей тeплиц и дpугих малыx дачных сoopужений. Прoстaя и быстpая сбоpка, oтcутствие свapки, оцинкованный кpепеж пoзволяют cоздaвать тeплицы, душeвые, веpcтaки, стeллaжи из крепежа за минимальнoе время.",
                    title:"Андрей Олегович"
                },
            ],
        }
    },
}
</script>

<style lang="scss">
@import "./src/assets/styles/style";
.feedback{
  background: url(/src/assets/images/background_feedback.png);
  .feedback-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: $padding-mobile-0;
  }
}
@media (min-width: 768px) {
  .feedback{
    display: flex;
    flex-direction: column;
    align-items: center;
    .feedback-content{
      margin-bottom: 40px;
      width: $width768px;
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
    }
  }
}
@media (min-width: 1024px) {
  .feedback{
    display: flex;
    flex-direction: column;
    align-items: center;
    .feedback-content{
      margin-bottom: 60px;
      width: $width1024px;
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
    }
  }
}
@media (min-width: 1280px) {
  .feedback{
    .feedback-content{
      width: $width1280px;
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
    }
  }
}
</style>