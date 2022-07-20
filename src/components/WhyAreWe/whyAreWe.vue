<template>
    <div class="why">
        <div class="title">
            <div class="title__inner">
                {{ allReasons.title }}
            </div>
        </div>
        <div class="why-content">
            <whyItem
                v-for="item in allReasons.reasons" :key = item
                :item="item"
            />
        </div>
    </div>    
</template>

<script>
import whyItem from './whyItem.vue'
export default {
  components: { whyItem },
  computed: {
    allReasons() {
      return this.$store.getters.allReasons
    }
  }
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