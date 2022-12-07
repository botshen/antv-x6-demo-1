<template>
  <div id="app">
    <div ref="treeWrapper"></div>
  </div>
</template>

<script>
import { Graph } from "@antv/x6";
import { http } from "./shared/Http";


export default {
  name: "App",
  async mounted() {
    const response = await http
      .post(
        "/treeData",
        {},
        {
          params: { _mock: "treeData" },
        }
      )
      .catch();
    console.log(response.data);
    const graph = new Graph({
      container: this.$refs.treeWrapper,
      width: 800,
      height: 600,
    });
    graph.fromJSON(response.data.data);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
