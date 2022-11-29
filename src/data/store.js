import {reactive} from "vue";

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?',
    api_key: '536daae941780d6fa4cb0422f9de1814',
    query: '',
    }
})