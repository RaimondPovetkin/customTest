<template>
  <div id="map">
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
import {mapGetters} from "vuex";
export default {
  methods: {
    renderMap() {
      const y = document.querySelector("ymaps");
      if (y) {
        y.remove();
      }
      const center = this.allCitiesState[this.cityIndex].coords.slice(1, -1).split(",");
      const city = this.allCitiesState[this.cityIndex].city;
      const phone = this.allCitiesState[this.cityIndex].contacts;
      const address = this.allCitiesState[this.cityIndex].address;

      function init() {
        let map = new window.ymaps.Map("map-test", {
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
  },
  computed: mapGetters(["allCitiesState","cityIndex"]),
  watch: {
    cityIndex() {
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