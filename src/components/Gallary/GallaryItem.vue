<template>
  <div class="GallaryItem col col-md-4 mb-5">
    <a
      href
      class="GallaryItem-remove d-block text-right mb-2"
      @click.prevent="handleRemoveItem"
    >- remove</a>
    <img class="GallaryItem-image" :src="content" :alt="name">
  </div>
</template>

<script>
export default {
  name: "GallaryItem",

  props: {
    name: {
      type: String,
      required: true
    },

    content: {
      type: String,
      required: true
    },

    id: {
      type: String,
      required: true
    }
  },

  methods: {
    handleRemoveItem() {
      this.$emit("on-remove-item", this.id);
    }
  }
};
</script>

<style scoped>
.GallaryItem-remove {
  color: red;
}

.GallaryItem-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
