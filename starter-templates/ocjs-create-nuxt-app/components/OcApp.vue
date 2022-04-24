<template>
  <div id="oc">
      <img class="logo" src="https://github.com/donalffons/opencascade.js/raw/master/images/logo.svg" alt="Ocjs Logo"/>
      <viewer id="viewer" :url="modelUrlBlob"></viewer>
  </div>
</template>

<script>

import initOpenCascade from "opencascade.js";

import shapeToUrl from "./shapeToUrl.js"
import Viewer from "./Viewer.vue"; 


// Just a basic Component to get started quickly with OC in Vue/Nuxt

export default
{
    name: "OcApp",
    components: {
      Viewer
    },
    data: () => {
    return {
            modelUrlBlob: null,
        }
    },

    props: {

    },

    computed:
    {

    },

    mounted()
    {
        initOpenCascade().then(oc =>
        {
          console.log('---- Oc.js Loaded! ----')

          let box = new oc.BRepPrimAPI_MakeBox_2( 100, 100, 100).Shape();
          this.modelUrlBlob = shapeToUrl(oc, box);

        });
    },

    watch : {

    },

    methods:
    {

    }
}

</script>

<style>

.logo {
  display: block;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
}

#viewer {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  height: 600px;
}

</style>
