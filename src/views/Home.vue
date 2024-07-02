<template>
  <div class="home" v-loading="loading">

  </div>
</template>

<script>
import * as XLSX from 'xlsx';
export default {
  name: "HelloWorld",
  components: {

  },
  data() {
    return {
      loading: false,

    };
  },
  created() { },
  computed: {

  },
  mounted() {
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>

.file-upload {
  display: flex;
  justify-content: center;
}

.file-show {
  display: flex;
  justify-content: center;
  padding: 0 2rem;
}

</style>