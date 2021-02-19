<template>
  <div class="graph">
    <div class="jumbotron text-left">
  <h1>About Cardiomyopathy </h1> 
  <br>
  <button @click="doSomething()"></button>
{{userSubmissions}}
   </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { getAllSubmissions } from "../firebase/database.js"
export default {
  data() {
      return{
        userSubmissions:[{
          title: '',
          details: '',
          graph: '',
          tags: ''

        }],
      }
  },
  components: {
     
    },
  methods: {
      async doSomething(){
      const userSubmissions = await getAllSubmissions()

        this.userSubmissions = userSubmissions
        
      },
      graphCreator(){

      }
  }
}
</script>





<style scoped>
  .jumbotron {
    background-color: #5f75f1;
    color: #fff;
    padding: 100px 25px;
    font-family: Montserrat, sans-serif;
  }
</style>
