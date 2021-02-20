<template>
    <div class="jumbotron text-left">
      <table style="width:100%" >
  <tr>
    <th>Title</th>
    <th>Details</th>
    <th>Tags</th>
    <th> Graph</th>
  </tr>
  <tr v-for="subs in userSubmissions" :key="subs" >
    <td>{{subs.uploadTitle}}</td>
    <td> {{subs.uploadDetails}}</td>
    <td> {{subs.tags}}</td>
    <td v-if="load"> <graph-creator v-bind:userSubmissions="userSubmissions"/></td>
  </tr>
</table>
  </div>
<button  @click="doSomething">Do it</button>
</template>
<script>
// @ is an alias to /src
import GraphCreator from '../components/GraphCreator'
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
        load: false
      }
  },
  components: {
     GraphCreator
    },
  methods: {
      async doSomething(){
      const userSubmissions = await getAllSubmissions()

        this.userSubmissions = userSubmissions
        console.log(this.userSubmissions)
        this.load = true
        
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
