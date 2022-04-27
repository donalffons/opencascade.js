<template>
  <div id="viewer">
    <model-viewer v-if="url" :src="url" camera-controls></model-viewer>
  </div>
</template>

<script>
import "@google/model-viewer/dist/model-viewer";

export default {
  name: "Viewer",
  components: {},
  data: () => {
    return {};
  },

  props: ["url"],

  mounted() {},

  computed: {},

  watch: {},

  methods: {},
};
</script>

<style>
model-viewer {
  width: 100% !important;
  height: 100% !important;
}
</style>
