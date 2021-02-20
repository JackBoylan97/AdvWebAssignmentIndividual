<template>
    <div class="jumbotron text-left">
      <div v-for="value in userSubmissions" :key="value">
        {{value}}
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
        console.log(this.userSubmissions)
        

      },
      beforeCreate() {
        this.doSomething()
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
