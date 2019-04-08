<template>
  <div class="GalleryItem col col-md-4 mb-5">
    <div class="card">
      <img class="GalleryItem-image card-img-top" :src="content" :alt="name">
      <div class="card-body">
        <button class="GalleryItem-remove btn btn-danger" @click.prevent="handleRemoveItem">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryItem",

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
.GalleryItem-image {
  height: 300px;
  object-fit: cover;
}
</style>
