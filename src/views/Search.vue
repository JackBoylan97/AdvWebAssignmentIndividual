<template>
  <div class="jumbotron text-left">
    <h1>Search</h1>
    <div class="input-container">
      <select v-model="selected">
        <option disabled value="">Please select one </option>
        <option>TNNT</option>
        <option>MYH</option>
        <option>MYBPC3</option>
        <option>TPM1</option>
      </select>
      <span>Selected: {{selected}}</span>
      <button @click="populateDiseaseList()">SEARCH </button>
    </div>

   <SearchList v-if="somethingEntered" v-bind:results="results"/>
   </div>
</template>

<script>
import SearchList from '../components/SearchList'
export default {

  components: {
    SearchList
  },
  data() {
    return{
      results: '',
      selected: '',
      somethingEntered: false,
      geneType: '',
      diseaseList: '',
      disease_base_url: "https://hpo.jax.org/api/hpo/disease",
      error: ''
    }
  },
  methods: {
   async populateDiseaseList() {
      if (this.selected === 'TNNT') {
      this.geneType = 'OMIM:601494';
      }
      else if (this.selected === 'MYH') {
      this.geneType = 'OMIM:192600';
      }
      else if (this.selected === 'MYBPC3'){
       this.geneType = 'OMIM:115197';
      }
      else{
        this.geneType ='OMIM:115196'
      }

      const disease_list_url = this.disease_base_url + "/" +this.geneType

      try {
        let disease_data = await fetch(disease_list_url);
        if (!disease_data.ok) {
          throw Error("unable kiddo");
        }

        this.diseaseList = await disease_data.json();
        this.results = this.diseaseList
        console.log(this.results)
      this.somethingEntered=true
        console.log("it didnt catch");
      } catch (error) {
        console.log("it caught");
      }
    }
  }
};
</script>

<style scoped>
.input-container {
	border-radius: 5px;
	background: #677482;
	padding: 10px;
}
.input-container input {
	border: none;
  font-style: black;
	background: transparent;
	color: white;
	padding: 6px 15px;
	font-size: 18px;
}

.jumbotron {
  background-color: #5f75f1;
  color: #fff;
  padding: 100px 25px;
  font-family: Montserrat, sans-serif;
}
</style>
