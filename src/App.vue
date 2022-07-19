<template>
  <header-block></header-block>
  <banner-block></banner-block>
</template>

<script>
import HeaderBlock from "@/components/Header/headerBlock";
import BannerBlock from "@/components/Banner/banner-block";

export default {
  name: 'App',
  components: {
    HeaderBlock, BannerBlock
  }
}
</script>

<style lang="scss">
 @import "./src/style.module";
</style>
