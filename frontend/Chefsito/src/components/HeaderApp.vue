<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/menu" class="navbar-brand">
        Chefsito
      </router-link>
    
    <div class="d-flex justify-content-end">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul  class="navbar-nav me-auto ml-2 mb-lg-0 gap-4">
            <li class="nav-item">
              <button type="button" class="btn btn-dark"  @click="()=>changePato(1)">Login</button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-dark" @click="()=>changePato(2)">Register</button>
            </li>
          </ul>
      </div>
    </div>
  </div>
</nav>

</template>

<script>
  export default {
    name: "HeaderApp",
    
    props: {
      patricio: Number
    },

    
    methods: {
      changePato(n) {
        this.$emit('changeLucas',n);
      }
    },
  }
</script>

<style scoped>


  a {
    padding-left: 10px;
  }

  .navbar-brand {
    font-family: "Queesha";
    font-size: 230%;
    color: black;
  }
 
</style>