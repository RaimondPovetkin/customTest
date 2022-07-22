<template>
  <div class="content" :class="{'content__padding': scrollShow==true}">
    <header-block
        :scroll-show="this.scrollShow"
    ></header-block>
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
  </div>

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
  data() {
    return {
      scrollShow: false,
      deviceWidth: window.innerWidth,
    };
  },
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
    },
    onScroll() {
      let header = document.querySelector("header");
      this.scrollShow = window.scrollY > header.offsetHeight;
    }
  },
  provide() {
    return {
      teseTest: this.teseTest,
      getPic: this.getPic,
    };
  },
  beforeUnmount() {
    window.removeEventListener("scroll")
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  }
};
</script>

<style lang="scss">
@import "./src/assets/styles/style";
</style>

