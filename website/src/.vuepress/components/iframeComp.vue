<template>
  <iframe
    style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      border: none;
    "
    :src="ihtml"
  ></iframe>
</template>

<script>
export default {
  props: {
    ihtml: {
      type: String,
    },
  },
};
</script>
