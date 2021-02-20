<template>
  <div class="graph">
    <div class="jumbotron text-left">
  <h1> Uploads </h1>
  <div v-if="user"> 
    <UploadList /> 

  </div>

  </div>

   </div>

</template>
<script>
// @ is an alias to /src
import {ref} from "vue";
import {firebaseAuthentication } from "@/firebase/database";
import UploadList from '../components/UploadList'
export default {
  name: 'Home',
  components: {
    UploadList
  },

  setup(){

    const user = ref(firebaseAuthentication.currentUser);
   

  
    firebaseAuthentication.onAuthStateChanged(user => {
      user.value = user;
    });


    return {user};
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
