<template>
  <div class="product">
    <banner img="../assets/img/bgtop.jpg" title="单词闯关" />
    <div class="product-container">
      <el-row type="flex" justify="center" align="center">
        <el-col :span="10">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>第{{ currentIndex }}关</span>
              <el-button @click="onNextRound()" style="float: right; padding: 3px 0" type="text">下一关</el-button>
            </div>
            <el-row type="flex" align="center" justify="center" style="flex-direction: column;">
              <el-col :span="24" v-for="(item, index) in currentWordsList" :key="index"
                style="margin-bottom: 10px">
                <el-button round @click="onClick(index)" style="width: 100%;font-size: x-large;">
                  {{ item.english }}<span v-show="currentShow === index">{{ "&emsp;&emsp;" + item.chinese }}</span>
                </el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" align="center">
        <el-col :span="4" style="">
          <el-button-group style="display: flex;justify-content: space-between">
            <el-button type="primary" @click="beforePage()" icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary" @click="nextPage()" :disabled="wordsList.length > 6 ? false : true">下一页<i
                class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-button-group>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  data() {
    return {
      loading: true,
      currentWordsList: [],
      wordsList: [],
      currentIndex: 0,
      currentShow: 99,
    };
  },
  components: {
    Banner
  },
  created() {
    // this.$http
    //   .get(
    //     "DataDictionary/GetDataDictionaryAll?key=%E4%BA%A7%E5%93%81%E8%A7%86%E9%A2%91%E9%93%BE%E6%8E%A5"
    //   )
    //   .then(response => {
    //     this.loading = false;
    //   })
    //   .catch(function (error) {
    //     window.console.log(error);
    //   });
    this.currentIndex = this.$route.query.index ? this.$route.query.index : 0;
    this.wordsList = this.$store.getters.getWordsList[this.currentIndex];
    this.currentWordsList = this.wordsList.slice(0, 6);
  },
  methods: {
    beforePage() {
      this.currentWordsList = this.wordsList.slice(0, 6);
      this.currentShow = 99;
    },
    nextPage() {
      this.currentWordsList = this.wordsList.slice(6, 12);
      this.currentShow = 99;
    },
    onClick(index) {
      this.currentShow = index;
    },
    onNextRound() {
      this.currentIndex = this.currentIndex+1;
      this.wordsList = this.$store.getters.getWordsList[this.currentIndex];
      this.currentWordsList = this.wordsList.slice(0, 6);
      this.currentShow = 99;
    }
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