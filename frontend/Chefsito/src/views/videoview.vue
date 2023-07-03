<template>
    <header><HeaderComp /></header>
    <body>
        <div>
            <div class="row">
                    <div class="col">
                        <LeftBar />
                    </div>
                    <div class="col">
                        <addvideo />
                    </div>
                    <div class="col">
                        <RightBar />
                    </div>
                </div>
        </div>
    </body>
</template>
  
  <script setup>
    import HeaderComp from '../components/HeaderComp.vue';
    import LeftBar from '../components/LeftBar.vue'
    import RightBar from '../components/RightBar.vue'
    import addvideo from '../components/addvideo.vue'
  </script>
  
  <style scoped>
  h1 {
    color: blue;
  }
  button {
    margin-top: 10px;
  }
  </style>
  