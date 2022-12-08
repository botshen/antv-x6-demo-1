<template>
  <treeMap class="wrapper" :options="options"></treeMap>
</template>

<script>
import TreeMap from "@/components/TreeMap.vue";
import {http} from "@/shared/Http";

export default {
  name: "TreeMapPages",
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
                params: {_mock: "treeData"},
              }
          )
          .catch((e) => {
            console.error(e);
          });
      this.options = res.data.data;
    },
  },
  async mounted() {
    await this.fetchTreeData();
  },
}
</script>

<style scoped>
.wrapper {
  width: 1400px;
  height: 600px;
}
</style>
