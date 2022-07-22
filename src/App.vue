<template>
  <header-block></header-block>
  <banner-block></banner-block>
  <advantages-block></advantages-block>
  <catalog-block></catalog-block>
  <why-are-we></why-are-we>
  <manufacture-block></manufacture-block>
  <form-block></form-block>
  <partners-block></partners-block>
  <feed-back></feed-back>
  <map-block></map-block>
  <footer-block></footer-block>

</template>

<script>
import HeaderBlock from "@/components/Header/headerBlock";
import BannerBlock from "@/components/Banner/banner-block";
import AdvantagesBlock from "@/components/Advantages/advantagesBlock";
import CatalogBlock from "@/components/Catalog/catalogBlock";
import WhyAreWe from "@/components/WhyAreWe/whyAreWe";
import ManufactureBlock from "@/components/Manufacture/manufactureBlock";
import FormBlock from "@/components/Form/formBlock";
import PartnersBlock from "@/components/Partners/partnersBlock";
import FeedBack from "@/components/FeedBack/feedBack";
import FooterBlock from "@/components/Footer/footerBlock";
import MapBlock from "@/components/Map/mapBlock";

export default {
  name: "App",
  components: {
    HeaderBlock,
    BannerBlock,
    AdvantagesBlock,
    CatalogBlock,
    WhyAreWe,
    ManufactureBlock,
    FormBlock,
    PartnersBlock,
    FeedBack,
    FooterBlock,
    MapBlock
  },
  methods: {
    getPic(pic, ext, dir) {
      let folder = dir ? dir + "/" : "";
      return require("/src/assets/images/" + folder + pic + "." + ext);
    }
  },
  provide() {
    return {
      teseTest: this.teseTest,
      getPic: this.getPic,
    };
  },
};
</script>

<style lang="scss">
@import "./src/assets/styles/style";
</style>

