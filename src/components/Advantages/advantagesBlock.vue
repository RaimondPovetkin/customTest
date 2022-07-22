<template>
    <div class="advantages">
        <div class="title">
            <div class="title__inner">
                {{ titleAdvantage }}
            </div> 
        </div>
        <div class="advantages-content">
            <advantagesItem
                v-for="advantage in allAdvantages" :key = advantage
                :advantage="advantage"
                :img="imagesAdvantage"
            />
        </div>
    </div>   
</template>

<script>
import advantagesItem from './advantagesItem.vue'
import {mapGetters} from "vuex";
export default {
  components: { advantagesItem },
  computed: mapGetters(["allAdvantages","titleAdvantage","imagesAdvantage"])
}
</script>

<style lang="scss">
@import "./src/assets/styles/style";
.advantages{
  padding: $padding-mobile-0;
  margin-bottom: 35px;
  .advantages-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    grid-row-gap:25px;
  }
}
@media (min-width: 412px) {
  .advantages{
    padding: $padding-mobile-412;
    margin-bottom: 42px;
    .advantages-content {
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
      grid-row-gap:30px;
    }
  }
}
@media (min-width: 768px) {
  .advantages{
    margin: 0 auto;
    width: $width768px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-bottom: 49px;
    .advantages-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap:30px;
    }
  }
}
@media (min-width: 1024px) {
  .advantages{
    width: $width1024px;
    margin-bottom: 65px;
    .advantages-content {
      grid-row-gap:25px;
    }
  }
}
@media (min-width: 1280px) {
  .advantages{
    width: $width1280px;
    margin-bottom: 79px;
    .advantages-content {
      grid-row-gap:56px;
    }
  }
}
</style>