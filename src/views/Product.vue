<template>
  <div class="product">

  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,

    };
  },
  components: {
    Banner
  },
  created() {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.product {
  width: 100%;
  height: 100%;
}

.product-content {
  margin: 0 auto;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  margin-top: 10px;
}
</style>