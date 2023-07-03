
<template>
    <div>
      <form @submit.prevent="submitForm">
        <h1>Añadir Video</h1>
        <div class="mb-1">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="nombre" class="form-control" id="nombre" required v-model="nombre">
        </div>
        <div class="mb-4">
          <label for="url" class="form-label">Link Video</label>
          <input type="link" class="form-control" id="link" required v-model="link">
        </div>
        <button type="submit" class="btn btn-light mb-3">Subir</button>
        </form>
        <router-link to="/menu" class="btn btn-primary">Volver al inicio</router-link>
    </div>
 
  </template>
  
  <script>
 import axios from 'axios';

export default {


  methods: {
    
    async submitForm() {
    try {
      const data = {
        nombre: this.nombre,
        link: this.link,
      };
      const response = await axios.post('http://localhost:3000/guardar-video', data);
      console.log('Video guardado:', response.data);
    } catch (error) {
      console.error('Error al guardar el video:', error);
    }
  }
  },

};
  </script>
  
  <style scoped>
  </style>