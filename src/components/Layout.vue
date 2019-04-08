<template>
  <div class="Layout container">
    <div class="row">
      <div class="col">
        <h2 class="text-center mt-4">Gallery app</h2>

        <gallery-add-form/>
        <gallery-container/>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryAddForm from "./Gallery/GalleryAddForm";
import GalleryContainer from "./Gallery/GalleryContainer";

export default {
  name: "Layout",

  components: {
    GalleryAddForm,
    GalleryContainer
  }
};
</script>

<style scoped>
</style>
