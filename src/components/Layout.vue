<template>
  <div class="Layout container">
    <div class="row">
      <div class="col">
        <h2 class="text-center mt-4">Gallary app</h2>

        <gallary-add-form/>
        <gallary-container/>
      </div>
    </div>
  </div>
</template>

<script>
import GallaryAddForm from "./Gallary/GallaryAddForm";
import GallaryContainer from "./Gallary/GallaryContainer";

export default {
  name: "Layout",

  components: {
    GallaryAddForm,
    GallaryContainer
  }
};
</script>

<style scoped>
</style>
