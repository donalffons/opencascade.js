<template>
  <div id="oc">
    <img
      class="logo"
      src="https://github.com/donalffons/opencascade.js/raw/master/images/logo.svg"
      alt="Ocjs Logo"
    />
    <div v-if="loading" id="loading">loading OC.js <span>(this can take up to 30s!)</span></div>
    <viewer id="viewer" :url="modelUrlBlob"></viewer>
  </div>
</template>

<script>

import opencascade from 'opencascade.js/dist/opencascade.full.js'
import opencascadeWasm from "opencascade.js/dist/opencascade.full.wasm?url";

import shapeToUrl from "./shapeToUrl.js";
import Viewer from "./Viewer.vue";

// Just a basic Component to get started quickly with OC in Vue/Nuxt

export default {
  name: "OcApp",
  components: {
    Viewer,
  },
  data: () => {
    return {
      loading : true,
      modelUrlBlob: null,
    };
  },

  props: {},

  computed: {},

  mounted()
  {
      this.initOc().then(this.makeModel)
  },

  watch: {},

  methods: {
    async initOc()
    {
        // Simplified pattern found in Replicad: https://github.com/sgenoud/replicad
        console.log('Loading OpenCascade.js...')

        const oc = await opencascade({
            locateFile: () => opencascadeWasm,
        });

        console.log('OpenCascade.js loaded!')
        this.loading = false;
        
        return Promise.resolve(oc);
    },

    makeModel(oc)
    {
        const sphere = new oc.BRepPrimAPI_MakeSphere_1(1);
        // Take shape and subtract a translated and scaled sphere from it
        const makeCut = (shape, translation, scale) => {
            const tf = new oc.gp_Trsf_1();
            tf.SetTranslation_1(
            new oc.gp_Vec_4(translation[0], translation[1], translation[2])
            );
            tf.SetScaleFactor(scale);
            const loc = new oc.TopLoc_Location_2(tf);
            const cut = new oc.BRepAlgoAPI_Cut_3(
            shape,
            sphere.Shape().Moved(loc, false),
            new oc.Message_ProgressRange_1()
            );
            cut.Build(new oc.Message_ProgressRange_1());
            return cut.Shape();
        };
        // Let's make some cuts
        const cut1 = makeCut(sphere.Shape(), [0, 0, 0.7], 1);
        const cut2 = makeCut(cut1, [0, 0, -0.7], 1);
        const cut3 = makeCut(cut2, [0, 0.25, 1.75], 1.825);
        const cut4 = makeCut(cut3, [4.8, 0, 0], 5);
        // Rotate around the Z axis
        const makeRotation = (rotation) => {
            const tf = new oc.gp_Trsf_1();
            tf.SetRotation_1(
            new oc.gp_Ax1_2(new oc.gp_Pnt_1(), new oc.gp_Dir_4(0, 0, 1)),
            rotation
            );
            const loc = new oc.TopLoc_Location_2(tf);
            return loc;
        };
        // Combine the result
        const fuse = new oc.BRepAlgoAPI_Fuse_3(
            cut4,
            cut4.Moved(makeRotation(Math.PI), false),
            new oc.Message_ProgressRange_1()
        );
        fuse.Build(new oc.Message_ProgressRange_1());
        const result = fuse
            .Shape()
            .Moved(makeRotation((-30 * Math.PI) / 180), false);
        this.modelUrlBlob = shapeToUrl(oc, result);
    }
  }
};
</script>

<style>
.logo {
  display: block;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
}

#loading {
    display: block;
    text-align:center;
    font-size: 0.8em;
}

#loading span 
{
    color: silver;
}

#viewer {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  height: 600px;
}
</style>