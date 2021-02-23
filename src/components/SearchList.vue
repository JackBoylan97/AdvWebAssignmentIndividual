<template>
  <div>
    <div v-for="disease in results" :key="disease.diseaseName">
      <h1>{{ disease.diseaseName }}</h1>

      
      <div v-for="symptoms in disease" :key="symptoms">
        <div v-for="name in symptoms.terms" :key="name">
          <h4>{{ name.name }}</h4>
          <span>{{ name.definition }}</span>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["results"],
  data() {
    return {};
  },
  methods: {},
};