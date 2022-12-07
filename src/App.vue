<template>
  <div>
    <tree-map :options="options"></tree-map>
  </div>
</template>

<script>
import TreeMap from "./components/TreeMap.vue";
import { http } from "./shared/Http";

export default {
  name: "App",
  components: {
    TreeMap,
  },
  data() {
    return {
      options: null,
    };
  },
  methods: {
    async fetchTreeData() {
      const res = await http
        .post(
          "/treeData",
          {},
          {
            params: { _mock: "treeData" },
          }
        )
        .catch((e) => {
          console.error(e);
        });
      const data = res.data.data;
      this.options = data;
    },
  },
  async mounted() {
    await this.fetchTreeData();
  },
};
</script>


