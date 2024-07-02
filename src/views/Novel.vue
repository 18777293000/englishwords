<template>
    <div class="news">
        <!-- <banner title="小说集合" /> -->
        <div class="news-container">
            <el-row :gutter="20">
                <el-col :span="24" style="border: 1px solid red">
                    <div class="news-item">
                        <iframe id="inlineFrameExample" title="Inline Frame Example" width="600" height="600"
                            src="http://m.boqugew.com/shu/60969/20301729.html">
                        </iframe>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
    name: "novel",
    components: {
        Banner
    },
    data() {
        return {
            loading: false,
            newstype: 1
        };
    },
    methods: {
        loadData() {
            this.loading = true;
        },
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

.news-container {
    padding: 0 1rem;
}

.news-item {}
</style>