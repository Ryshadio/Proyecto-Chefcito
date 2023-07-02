<template>
  <div class="container-fluid">
    <div class="abs-center">
      
      <form @submit="register">
        <h1>Registrarse</h1>
        <div class="mb-1">
          <label for="name" class="form-label">Nombre</label>
          <input type="name" class="form-control" id="name" required v-model="name">
        </div>
        <div class="mb-1">
          <label for="lastname" class="form-label">Apellido</label>
          <input type="lastname" class="form-control" id="lastname" required v-model="lastname">
        </div>
        <div class="mb-1">
          <label for="age" class="form-label">Edad</label>
          <input type="age" class="form-control" id="age" required v-model="age">
        </div>
        <div class="mb-1">
          <label for="email" class="form-label">Correo</label>
          <input type="email" class="form-control" id="email" required v-model="email">
        </div>
        <div class="mb-4">
          <label for="pass" class="form-label">Contraseña</label>
          <input type="pass" class="form-control" id="pass" required v-model="pass">
          
        </div>
        <button type="submit" class="btn btn-light mb-3">Registrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../api/api_config'
export default {
  data() {
    return {
      name: '',
      lastname: '',
      age: '',
      email: '',
      pass: ''

    };
  },
  methods: {
    async register() {
        
        await api.post('register',{
        name:this.name,
        lastname:this.lastname,
        age:this.age,
        email:this.email,
        pass:this.pass
      },{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .catch(function (error) { 
        console.log(error.toJSON());
      });
    
    },
  }
};
</script>


<style scoped>
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

h1 {
  font-family: "Queesha";
  color:#ccc;
  font-size:330%;
  text-align: center;
}

label{
  color: #ccc;
  font-size: 80%;
  font-weight: 600;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}

div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  font-size: 120%;
  font-weight: 600;
}

button:hover {
  background-color: #5c5c5c;
}

button:disabled {
  background-color: #686868;
  cursor: not-allowed;
}

.abs-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 20%;
}
</style>