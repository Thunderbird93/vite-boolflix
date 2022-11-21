import {reactive} from "vue";
import axios from "axios";

export const store = reactive({
    api_key: "536daae941780d6fa4cb0422f9de1814",
    api_url: "https://api.themoviedb.org/3/search/movie?api_key=536daae941780d6fa4cb0422f9de1814&query=",
    error: null,
    loading: true,
    searchText: "",
    results: null,
    callApi: (url) => {
        axios.get(url);
        .then (response => {
            store.loading = false
            console.log(response);
            console.log(response.data.results);
        })
        .catch(error => {
            error = error.message
        })
    }
})