<template>
    <div>
        <MapTitle/>
        <div class="map">
            <div id="map-test" class="map"></div>
        </div>
    </div>
</template>

<script>

import MapTitle from './mapTitle.vue'
import{mapState,mapGetters,mapMutations, mapActions} from 'vuex'
export default {
  components: { MapTitle },
data(){
    return{
        change:"dd",
            
    }
},
methods:{
    renderMap(){
    },
    ...mapActions({

    }),
    ...mapMutations({

    })
},
computed:{
      ...mapState({
          cities: state=>state.page.cities,
          index: state=>state.page.index
      }),
  },
watch:{
      index(){
          this.renderMap()
      }
  },
created(){

    let center = [55.75883410610894,37.61350993115235];

        let myTarget = JSON.parse(JSON.stringify(this.cities))

        let coord= myTarget[this.index].coords.slice(1,-1).split(',')
        let city= myTarget[this.index].city
        let phone=myTarget[this.index].contacts
        let address=myTarget[this.index].address

        center=coord

let map

function init() {
	 map = new ymaps.Map('map-test', {
		center: center,
		zoom: 10
	});


    let placemark = new ymaps.Placemark(center, {
		balloonContentHeader: city,
		balloonContentBody: address,
		balloonContentFooter: phone,
    }, {
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});

    map.geoObjects.add(placemark);
}

ymaps.ready(init);
}
    
}
</script>
