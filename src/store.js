import { createStore } from "vuex";
import { ref } from "vue";

const api = ref("http://localhost:8080");

const store = createStore({
  state: {
    LienAPI: api.value,
  },
});

export default store;
