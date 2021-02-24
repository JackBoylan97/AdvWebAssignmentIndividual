<template>
  <h1>{{ results.disease.diseaseName }}</h1>
  <div>
    <h2 v-on:click="isHidden = !isHidden">Symptoms</h2>
  </div>
  <div v-if="isHidden">
    <div v-for="item in results.catTermsMap" :key="item" class="#this">
      <h4>{{ item.catLabel }}</h4>

      <div v-for="detail in item.terms" :key="detail">
        <h5>{{ detail.name }}</h5>
        <h6>{{ detail.definition }}</h6>
      </div>
    </div>
  </div>
  <div v-for="result in internalResults" :key="result">
    <p>{{ result.uploadTitle }}</p>
    <p>{{ result.uploadDetails }}</p>
    <p><graph-creation-search v-bind:searchResult="result" /></p>
  </div>
</template>
<script>
import GraphCreationSearch from "../components/GraphCreationSearch";
export default {
  props: ["results", "internalResults"],
  data() {
    return {
      isHidden: false,
      subHidden: false,
    };
  },
  components: {
    GraphCreationSearch,
  },
  methods: {},
};
</script>
