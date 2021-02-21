<template>
  <div class="jumbotron text-left">
    <table v-if="load" style="width:100%">
      <tr>
        <th>Title</th>
        <th>Details</th>
        <th>Tags</th>
        <th>Graph</th>
      </tr>
      <tr v-for="subs in userSubmissions" :key="subs">
        <td>{{ subs.uploadTitle }}</td>
        <td>{{ subs.uploadDetails }}</td>
        <td>{{ subs.tags }}</td>
        <td><graph-creator v-bind:userSubmissions="subs" /></td>
        <td><button @click="deleteSelected(subs)"></button></td>
      </tr>
    </table>
  </div>
</template>
<script>
// @ is an alias to /src
import GraphCreator from "../components/GraphCreator";
import { getAllSubmissions, deleteUserSubmission} from "../firebase/database.js";
export default {
  data() {
    return {
      userSubmissions: [],
      load: false,
    };
  },
  components: {
    GraphCreator,
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      const userSubmissions = await getAllSubmissions();

      this.userSubmissions = userSubmissions;
      this.load = true;
    },
      deleteSelected(e) {
        const selectedDoc = e.tags
        console.log(selectedDoc)
        deleteUserSubmission(selectedDoc)
        return;
      }
  },
};
</script>

<style scoped>
.jumbotron {
  background-color: #5f75f1;
  color: #fff;
  padding: 100px 25px;
  font-family: Montserrat, sans-serif;
}
</style>
