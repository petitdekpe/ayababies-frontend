<template>
  <div>
    <header class=" img-fluid he2">
      <!-- Background image -->
      <div class="d-flex justify-content-center align-items-center h-75">
        <img src="@/assets/images/page-concours.png" class="img-fluid" alt="Responsive image">
          <div class="text-center">
          <h3 class="violet">Concours</h3>
        </div>
      </div>
      <!-- Background image -->
    </header>

    <div class="text-introductif d-flex">
      <div class="col-6 text-center" @click="show1 = false" style="cursor: pointer">
        <h4 class="titre">Nos Concours</h4>
      </div>
      <div class="col-6 text-center" @click="show1 = true" style="cursor: pointer">
        <h4 class="titre">Les Gagnants</h4>
      </div>
    </div>

    <Gagnants v-if="show1 == true" />
    <NosConcours v-if="show1 == false" />
  </div>
</template>

<script>
import Gagnants from "@/components/Gagnants.vue";
import NosConcours from "@/components/NosConcours.vue";
import { HTTP } from './http-common';

export default {
  components: {
    Gagnants,
    NosConcours,
  },
  data() {
    return {
      show1: false,
      show2: false,
      concours:[],
        errors:[]
    };
  },
  created(){
    HTTP.get('endpoint')
    .then(response=> {
      this.concours = response.data
    })
    .catch(e =>{
      this.errors.push(e)
    })
  }
};
 

</script>

<style scoped>

header   img {
    width: 100%;
     height: 40em;
    
}

.btn-inscription,
.btn-inscription:hover,
.btn-inscription:active,
.btn-inscription:visited {
  background-color: #cf5c95;
  border-color: #cf5c95;
}

.btn-connexion,
.btn-connexion:active,
.btn-connexion:visited {
  color: #3c64b1;
  border-color: #3c64b1;
}

.btn-connexion:hover {
  color: #ffffff;
  background-color: #3c64b1;
}

.navbar-bg-color {
  background-color: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
}
.violet {
  font-style: normal;
  font-weight: 600;
  font-size: 68px;
  position: absolute;
  /* display: flex; */
  right: 5em;
  align-items: center;
  text-align: center;
  color: #cf5c95;
  box-sizing: border-box;
}

.text-introductif {
  margin-top: 50px;
  align-items: center;
}

.content-titre {
  width: fit-content;
  background: #cf5c95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 70px;
  text-align: center;
  color: #ffffff;
  padding: 0.5em 5em;
}

.card-concours {
  position: absolute;
  width: 344px;
  height: 304px;
  left: 134px;
  border-radius: 10px;
}
.card-message {
  height: 82px;
  background: #cf5c95;
  border-radius: 9px;
  position: absolute;
  /* top: 0; */
  right: 0;
  bottom: 0;
  left: 0;
  padding: 4rem;
}

.card-vote {
  text-align: center;
  margin-bottom: 1em;
}

.card-tem {
  text-align: center;
  background-color: #cf5c95;
  color: #ffffff;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 2em;
  font-size: 0.6em;
  align-items: center;
}

.img-tem {
  border-radius: 10em;
  height: 9em;
  width: 9em;
}

button {
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: center;
  /* align-items: center;
text-align: center; */
  background-color: #ffffff;
  color: #3c64b1;
  border: 0em;
  border-radius: 5px;
}

/* .page-concours {
  border-radius: 0.55rem;
  max-height: 300px;
  min-height: 300px;
  background-image: url("@/assets/images/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
} */
.justify-content-center {
  display: flex;
}
.col-6 h4{
  color: #cf5c95;
  text-decoration-line: none;
  cursor: pointer;
}
.titre:focus {
  color: #5772b7;
  text-decoration-line: solid;
}

.card-text1 {
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
}
.card-text2 {
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  line-height: 10px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
}


@media screen and (max-width:990px){
header   img {
    width: 100%;
     height: auto;
    
}
}

@media screen and (max-width:714px){
.violet {
  font-weight: 600;
  font-size: 2em;
  
}
  
}
</style>