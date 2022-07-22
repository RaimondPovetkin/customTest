<template>
  <div id="catalog" class="catalog">
    <div class="title">
      <div class="title__inner">
        {{ titleCatalog }}
      </div>
    </div>
    <div class="catalog-content">
      <catalogItem
          v-for="crab in crabsCatalog" :key=crab
          :crab="crab"
          :img="imagesCatalog"
      />
    </div>
  </div>
</template>

<script>
import catalogItem from "./catalogItem.vue";
import {mapGetters} from "vuex";

export default {
  components: {catalogItem},
  computed: mapGetters(["crabsCatalog", "titleCatalog", "imagesCatalog"])
};
</script>

<style lang="scss">
@import "./src/assets/styles/style";

.catalog {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F2EFED;

  &-content {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    margin-bottom: 30px;
  }
}

@media (min-width: 412px) {
  .catalog {
    &-content {
      margin-bottom: 50px;
    }
  }
}

@media (min-width: 768px) {
  .catalog {
    &-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px 0px;
      width: $width768px;
      margin-bottom: 70px;
    }
  }
}

@media (min-width: 1024px) {
  .catalog {
    &-content {
      width: $width1024px;
      margin-bottom: 90px;
    }
  }
}

@media (min-width: 1280px) {
  .catalog {
    &-content {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 20px 0px;
      width: $width1280px;
    }
  }
}
</style>