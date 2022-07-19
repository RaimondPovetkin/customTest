<template>
    <div id="partners" class="partners">
        <div class="title">
            <div class="title__inner">
                НАШИ ПАРТНЕРЫ
            </div> 
        </div>
        <div class="partners__content">

            <partner-item
                v-for="img in companiesImg" :key = img
                :img="img" 
            />

        </div>
    </div>
</template>

<script>
import PartnerItem from './partnerItem.vue'
export default {
    components: { PartnerItem },
    data(){
        return{
            companiesImg:["severst","zavod","gf1"]
        }
    }
}
</script>

<style lang="scss">
@import "./src/assets/styles/style";
.partners{
  width: 100%;
  display: flex;
  flex-direction: column;
  &__content{
    padding: $padding-mobile-0;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
}
@media (min-width: 412px) {
  .partners{
    width: 100%;
    &__content{
      padding: $padding-mobile-412;
    }
  }
}
@media (min-width: 768px) {
  .partners{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &__content{
      padding: 0;
      width: $width768px;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
@media (min-width: 1024px) {
  .partners{
    &__content{
      padding: 0;
      width: $width1024px;
    }
  }
}
@media (min-width: 1280px) {
  .partners{
    &__content{
      padding: 0;
      width: $width1280px;
    }

  }
}
</style>