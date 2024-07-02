<template>
    <div class="news">

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