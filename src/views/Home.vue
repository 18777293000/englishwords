<template>
  <div class="home" v-loading="loading">
    <div class="home-containe">
      <div class="file-upload">
        <el-upload class="upload-demo" drag action="/" :auto-upload="false" :on-change="importExcel" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip"><em>只能上传excel</em></div>
        </el-upload>
      </div>
      <el-divider content-position="left">文件预览</el-divider>
      <div class="file-show">
        <el-table :data="$store.getters.getWords" style="width: 100%" height="450">
          <el-table-column fixed prop="index" label="序号" width="150">
          </el-table-column>
          <el-table-column prop="english" label="英文">
          </el-table-column>
          <el-table-column prop="chinese" label="中文">
          </el-table-column>
        </el-table>
      </div>
    </div>
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
      caseList: [],
      newsList: [],
    };
  },
  created() { },
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    tableData() {
      return this.$store.getters.getWords;
    },
  },
  mounted() {
  },
  methods: {
    importExcel(file) {
      const types = file.name.split(".")[1];
      const fileType = ["xlsx", "xlc", "xlm", "xls", "xlt"].some(item => item === types);
      if (!fileType) {
        alert("格式错误");
        return;
      }
      this.file2Xce(file).then(tableJson => {
        if (tableJson && tableJson.length > 0) {
          const that = this;
          let groups = [];
          for (let i = 0; i < tableJson[0].sheet.length; i += 12) {
            groups.push(tableJson[0].sheet.slice(i, i + 12));
          }
          that.$store.commit("SET_WORDS", tableJson[0].sheet);
          that.$store.commit("SET_WRODS_LIST", groups);
        }
      })
    },
    file2Xce(file) {
      return new Promise(function (resolve) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const arrayBuffer = e.target ? (e.target.result) : null;
          if (!arrayBuffer) { return };
          const data = new Uint8Array(arrayBuffer);
          this.workbook = XLSX.read(data, {
            type: "array"
          });
          const result = [];
          this.workbook.SheetNames.forEach(SheetName => {
            result.push({
              SheetName: SheetName,
              sheet: XLSX.utils.sheet_to_json(this.workbook.Sheets[SheetName])
            });
          });
          resolve(result);
        };
        reader.readAsArrayBuffer(file.raw);
      });
    }
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