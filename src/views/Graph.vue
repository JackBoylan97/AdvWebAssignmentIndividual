<template>
  <div class="graph">
    <div class="jumbotron text-left">
  <h1>About Cardiomyopathy </h1> 
  <br>

  <UploadList />

  </div>

   </div>

</template>
<script>
// @ is an alias to /src
import UploadList from '@/components/UploadList'
export default {
  data() {
      return{
        show: true,
        userSubmissions:[{
          title: '',
          details: '',
          graph: '',
          tags: ''

        }],
      }
  },
  components: {
    UploadList
     
    },
  methods: {
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
