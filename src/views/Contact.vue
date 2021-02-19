<template>
  <div class="contact">
    <div class="jumbotron text-left">
        
<!--Create a form for user input -->
<div class="container">
    <h3>Contact Form</h3>
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">United Kingdom</option>
      <option value="canada">canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>


  </div>
</div>

</template>




<script>
// @ is an alias to /src
export default {
  name: 'Contact',
  components: {
    
  }
}


</script>





<style scoped>
  .jumbotron {
    background-color: #ffffff;
    color: #fff;
    padding: 100px 25px;
    font-family: Montserrat, sans-serif;
  }

  body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #5f75f1;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #160d4d;
}

.container {
  width: 500px;
  border-radius: 5px;
  color: black;
  background-color: #e2ebfd;
  padding: 20px;
}
</style>
