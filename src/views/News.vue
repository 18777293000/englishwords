<template>
  <div class="news">
    <banner title="关卡集合" />
    <div class="news-container">
      <el-row :gutter="20">
        <el-col v-for="(items, index) in newsList" :key="index" :span="6">
          <div class="news-item">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span style="color: red;">关卡{{ index }}</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="onStart(index)">开始</el-button>
              </div>
              <div v-for="(o, o_index) in items" :key="o_index" class="text item">
                {{ o_index + ' ' + o.english }}
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  name: "news",
  components: {
    Banner
  },
  data() {
    return {
      loading: false,
      newsList: this.$store.getters.getWordsList,
      newstype: 1
    };
  },
  methods: {
    loadData() {
      this.loading = true;
    },
    onStart(index){
      this.$router.push({
        name: 'product',
        query: {
          index: index,
        }
      })
    }
  },
  mounted() {
    this.loadData();
  },
  watch: {

  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.news {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .text-decoration {
    text-decoration: none;
  }
}
.news-container{
  padding: 0 1rem;
}
.news-item{
  margin-top: 10px;
}
</style>