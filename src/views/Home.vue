<template>
  <div class="home_page">
  <div class="jumbotron text-left"> 
  <h1> Welcome to Homepage </h1>
  <h2 v-if="user">Hi, {{user.displayName}}, please enter data</h2> 
<h2 v-if="user"> <user-upload-data/> </h2>
    
  <p>Input your expermntal data</p> 
    
</div>  
  <div class="jumbotron2 text-center">
  <h1>Saerch keywords </h1> 
  <p>Please select one keyword to search</p> 
  <div class= "drop">
  <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Open this select menu</option>
  <option value="1">Dilated cardiomyopathy</option>
  <option value="2">Hypertrophic cardiomyopathy</option>
  <option value="3">Restrictive cardiomyopathy</option>
</select>
  </div>

</div>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from "vue";
import { firebaseFireStore, firebaseAuthentication } from "@/firebase/database";
import UserUploadData from '../components/UserUploadData'





export default {
  name: 'Home',
  components: {
    UserUploadData
  },

  setup(){

    const user = ref(firebaseAuthentication.currentUser);
   

    firebaseFireStore
    .collection("users")
    .doc("jlPv0nW8LxObHkzg7Gug")
    .get()
    .then((snapshot) => {
      console.log(snapshot.data().name);
    });
    
  
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
    padding: 60px 25px;
    font-family: Montserrat, sans-serif;
  }

    .jumbotron2 {
    background-color: #121172;
    color: #fff;
    padding: 100px 25px;
    font-family: Montserrat, sans-serif;
  }

  .drop
  {
    background-color: #121172;
    color: rgb(0, 0, 0);
    padding: 20px 25px;
    font-family: Montserrat, sans-serif;
    font-size: 20px;
  }


</style>
