<template>
  <div v-if="!user" class="login">
    <div  class="jumbotron text-center">
  <h1> {{ user }} </h1> 
  </div>
  <div class="text-center">
  <div class="container">
      <div class="row" style="margin-top:20px">
    <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
		<form role="form" >
			<fieldset>
				<h2>Please Sign In or register a new account </h2>
				<hr class="colorgraph">
				<div class="form-group">
                    <input type="email" name="email" id="email" class="form-control input-lg" placeholder="Email Address" v-model="email">
				</div>
				<div class="form-group">
                    <input type="password" name="password" id="password" class="form-control input-lg" placeholder="Password" v-model="password">
				</div>
				<span class="button-checkbox">
				<label>
        </label>
					<a  href="#/forgot" class="btn btn-link pull-right">Forgot Password?</a>
				</span>
				<hr class="colorgraph">
				<div class="row">
					<div class="col-xs-6 col-sm-6 col-md-6">
                        <el-button type="submit"  @click="login" class="btn btn-lg btn-success btn-block">
                          Login
                        </el-button>
					</div>
					<div class="col-xs-6 col-sm-6 col-md-6">
						<a href="#/register" class="btn btn-lg btn-primary btn-block">Register</a>
					</div>
          <el-form-item v-if="errorFirebase">
            <el-button plain disabled incon="el-icon-error">
              {{ errorFirebase  }}
            </el-button> 
          </el-form-item>
				</div>
			</fieldset>
		</form>
	</div>
</div>
    </div>

  </div>
  </div>
</template>


<script>
// @ is an alias to /src

import { ref } from "vue";
import { firebaseAuthentication } from "@/firebase/database";
import { useRouter } from "vue-router";


export default {
  name: 'Login',
  emits: ["login-clicked"],

  setup(){
    const email = ref("");
    const password = ref("");
    const errorFirebase = ref(null);
    const user = ref(firebaseAuthentication.currentUser);

    const router = useRouter();

  

    function login(){
      const info = {
        email: email.value,
        password: password.value,
      };

      firebaseAuthentication
      .signInWithEmailAndPassword(info.email, info.password)
      .then(()=> {
        router.push("/");   
      }, error => {
        errorFirebase.value = error.message;
      });
    }

    firebaseAuthentication.onAuthStateChanged(user => {
      user.value = user;
    });

    return {user, email, password,errorFirebase, login};
    

  },


};


</script>



<style scoped>
  .jumbotron {
    background-color: #5f75f1;
    color: #fff;
    padding: 50px 25px;
    font-family: Montserrat, sans-serif;
  }

    .jumbotron3 {
    background-color: #121172;
    color: #fff;
    padding: 120px 25px;
    margin-top: -1rem;
    font-family: Montserrat, sans-serif;
  }

  .container{
    width:80%;
  }
  .h2{
    color: white !important;
  }

  .colorgraph {
  height: 5px;
  border-top: 0;
  background: #121172;
  border-radius: 5px;
  background-image: linear-gradient(to right,#6647d8 50%, #6647d8 62.5%, #4e29d4 62.5%, #4e29d4 75%,#669ae1 5%,#669ae1 15%,#669ae1 25%,#669ae1 35%,#669ae1 45%,#669ae1 55%,#669ae1 65%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
}

.button {
  background-color:#121172;
}

</style>
