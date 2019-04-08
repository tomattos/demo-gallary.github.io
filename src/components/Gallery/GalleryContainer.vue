<template>
  <transition-group class="GalleryContainer row mt-5" name="list" tag="div">
    <Gallery-item
      v-for="(image, i) in images"
      :key="i"
      :name="image.name"
      :content="image.content"
      :id="image.id"
      @on-remove-item="handleRemoveItem"
    />
  </transition-group>
</template>

<script>
import GalleryItem from "./GalleryItem";

export default {
  name: "GalleryContainer",

  components: {
    GalleryItem
  },

  data() {
    return {
      images: []
    };
  },

  methods: {
    handleRemoveItem(id) {
      let index = this.images.findIndex(image => image.id === id);

      this.images.splice(index, 1);
    }
  },

  beforeMount() {
    this.$root.$on("pushImage", file => {
      this.images.push(file);
    });
  }
};
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: scale(0.7);
}
</style>
