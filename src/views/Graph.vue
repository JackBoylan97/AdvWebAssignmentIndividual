<template>
<div>
  <div class="jumbotron text-left">
    <h1> Uploads </h1>
  </div>

  

  <div class="graph">
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

  .graph{
    background-color:#9bacf5;
    color: #fff;
    font-family: Montserrat, sans-serif;
    width: 90%;
    display: inline-block;
    margin-left: 5%;
    border-radius: 25px;
    padding: 20px;
    width: 90%;
    border-style: solid;
  border-color: #121172;
  }
</style>
