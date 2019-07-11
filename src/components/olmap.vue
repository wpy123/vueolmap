<template>
    <div id="map" ref="rootmap">

    <div v-on:click="nextpage" class="backcolor">
			下一页
		</div>
    </div>

</template>

<script>
import "ol/ol.css";
import { Map, View } from "ol";
import mapconfig from "cg/mapconfig"
export default {
  data() {
    return {
      map: null
    };
  },
  methods: {
			nextpage() {
				this.$router.push('/second')
			}
		},
  mounted() {
    var mapcontainer = this.$refs.rootmap;
    this.map = new Map({
      target: mapcontainer,
      layers: new mapconfig.streetmap(),
      view: new View({
        projection: "EPSG:4326",    //使用这个坐标系
        center: [mapconfig.x,mapconfig.y],  //深圳
        zoom: mapconfig.zoom
      })
    });
  }
};
</script>

<style>
#map{height:100%;}
/*隐藏ol的一些自带元素*/
.ol-attribution,.ol-zoom { display: none;}

</style>

<style scoped>
.backcolor {
  position: absolute;
  bottom: 50px;
  z-index: 999;
	background-color: lightblue;
		width: 60px;
	height: 25px;
	margin-left: 50%;
	transform: translateX(-50%);
}
</style>