import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 100,
        words: [{
            index: '1',
            english: 'hello',
            chinese: '你好',
        }],
        wordsList: [
            [{
                index: '1',
                english: 'hello',
                chinese: '你好',
            }]
        ]
    },
    getters: {
        getWords(state) {
            return state.words;
        },
        getWordsList(state){
            return state.wordsList;
        }
    },
    mutations: {
        SET_WORDS(state, words) {
            state.words = words;
        },
        SET_WRODS_LIST(state, wordsList){
            state.wordsList = wordsList;
        }
    }
});

export default store;