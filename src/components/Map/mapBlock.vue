<template>
  <div>
    <div class="title">
      <div class="title__inner">
        МЫ НА КАРТЕ
      </div>
    </div>
    <div class="map">
      <div id="map-test" class="map"></div>
    </div>
  </div>
</template>

<script>


import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {

  data() {
    return {
      change: "dd",

    };
  },
  methods: {
    renderMap() {

      let y = document.querySelector("ymaps");
      if (y) {
        y.remove();
      }

      let myTarget = JSON.parse(JSON.stringify(this.cities));

      this.change = myTarget;

      let coord = myTarget[this.index].coords.slice(1, -1).split(",");
      let city = myTarget[this.index].city;
      let phone = myTarget[this.index].contacts;
      let address = myTarget[this.index].address;

      let center = coord;

      let map;

      function init() {
        map = new window.ymaps.Map("map-test", {
          center: center,
          zoom: 10
        });


        let placemark = new window.ymaps.Placemark(center, {
          balloonContentHeader: city,
          balloonContentBody: address,
          balloonContentFooter: phone,
        }, {
          iconImageSize: [40, 40],
          iconImageOffset: [-19, -44]
        });

        map.geoObjects.add(placemark);
      }

      window.ymaps.ready(init);

    },
    ...mapActions({}),
    ...mapMutations({}),
    ...mapGetters({})
  },
  computed: {
    ...mapState({
      cities: state => state.page.cities,
      index: state => state.page.index
    }),
  },
  watch: {
    index() {
      this.renderMap();
    }
  },
  created() {

    this.renderMap();
  }

};
</script>

<style lang="scss">
@import "./src/assets/styles/style";

.map {
  width: 100%;
  height: 203px;
}

@media (min-width: 412px) {
  .map {
    width: 100%;
    height: 303px;
  }
}

@media (min-width: 768px) {
  .map {
    width: 100%;
    height: 403px;
  }
}

@media (min-width: 1024px) {
  .map {
    width: 100%;
    height: 503px;
  }
}

@media (min-width: 1280px) {
  .map {
    width: 100%;
    height: 576px;
  }
}
</style>