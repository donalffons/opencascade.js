<template>
  <iframe
    style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: calc(100vh - 3.6rem);
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
