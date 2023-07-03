<template>
    <div class="column">
            <div v-for="(video, index) in videos" :key="index" v-show="index===selector">
                <iframe width="410" height="760" :src="'https://www.youtube.com/embed/' + video" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>    

            
            
    </div>

    <div class="d-flex justify-content-between">

        <div @click="() => prevSlide()" class="toggle-page left">
            <img src="../assets/icons/chevron-left-solid.svg" />
        </div>


        <div @click="() => nextSlide()" class="toggle-page ">
            <img src="../assets/icons/chevron-right-solid.svg" height="10" width="10" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../api/api_config';
const selector = ref(0);
const videos = ref([]);
const raw = ref([]);

onMounted(async ()=>{
    await api.get('/get-videos')
        .then(async (response)=> {
            raw.value = response.data
            videos.value = raw.value.map((direccion) => direccion.link);
            console.log(videos.value);
        })
        .catch(function (error) { 
        console.log(error.toJSON());
      });

    
})



//next slide
const nextSlide = () => {
    
    if(selector.value === (videos.value.length - 1)){
        selector.value = 0;
        
    }else{
        selector.value++;
    }
    
}

//prev slide
const prevSlide = () => {
    if(selector.value == 0){
        selector.value = videos.value.length - 1;
    }else{
        selector.value--;
    }
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);


.left {
    justify-content: flex-end;
    padding-right: 30px;
}

body {
    font-family: 'Open Sans', sans-serif;
    color: #666;
}

.navigate {
    padding: 0 16px;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* STRUCTURE */
.toggle-page {
    display: flex;
    flex: 1;
}

img {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: rgb(255, 145, 43);
}

.wrapper {
    padding: 5px;
    max-width: 960px;
    width: 95%;
    margin: 20px auto;
}

header {
    padding: 0 15px;
}

.columns {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 5px 0;
}

.column {
    flex: 1;

    margin: 2px;
    padding: 10px;

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }

}



@media screen and (max-width: 980px) {
    .columns .column {
        margin-bottom: 5px;
        flex-basis: 40%;

        &:nth-last-child(2) {
            margin-right: 0;
        }

        &:last-child {
            flex-basis: 100%;
            margin: 0;
        }
    }
}

@media screen and (max-width: 680px) {
    .columns .column {
        flex-basis: 100%;
        margin: 0 0 5px 0;
    }
}
</style>