<template>
  <div class="cart mt-4">
    <table class="table m-0">
    <thead>
      <h1> My uploads</h1>
      <tr> 
        <th scope="col">Title</th>
        <th scope="col">Details</th>
        <th scope="col">Graph</th>
        <th scope="col">Tags</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{userId,uploadTitle, uploadDetails, tags, timestamp} in uploads" :key="userId">
      <td> {{uploadTitle}}</td>
      <td> {{uploadDetails}}</td>
      <td> {{tags}}</td>
      <td>{{timestamp}}</td>
      <td>
        <button class= "btn btn-danger btn-sm">
          Delete
        </button>
      </td>
      </tr>
      </tbody> 
      </table>
        </div>
</template>
<script>
import {getAllSubmissions} from '../firebase/database.js'
export default {
  setup(){
    const uploads = getAllSubmissions()
    return {uploads}

}
}
</script>