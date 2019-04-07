<template>
  <form
    class="GallaryCreate form-inline justify-content-center mt-4"
    @submit.prevent="handleSubmit"
  >
    <div class="input-group flex-grow-1">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
      </div>

      <div class="custom-file">
        <input
          type="file"
          class="custom-file-input"
          id="inputGroupFile01"
          aria-describedby="inputGroupFileAddon01"
          ref="file"
          @change="handleSetFile"
        >

        <label class="custom-file-label" for="inputGroupFile01">{{ fileName || 'Choose file' }}</label>
      </div>
    </div>

    <button class="btn btn-primary ml-2" type="submit">Add photo</button>
  </form>
</template>

<script>
export default {
  name: "GallaryAddForm",

  data() {
    return {
      file: null
    };
  },

  computed: {
    fileName() {
      return this.file !== null ? this.file.name : null;
    }
  },

  methods: {
    handleSubmit() {
      if (!this.file) return;

      this.$root.$emit("pushImage", { ...this.file });

      this.cleanState();
    },

    handleSetFile(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        this.file = {
          content: reader.result,
          name: file.name,
          id: this.generateId()
        };
      };
    },

    generateId() {
      return `_${Math.random()
        .toString(36)
        .substr(2, 9)}`;
    },

    cleanState() {
      // this.file.content = "";
      // this.file.name = "";

      Object.assign(this.$data, this.$options.data());
      this.$refs.file.value = null;
    }
  }
};
</script>