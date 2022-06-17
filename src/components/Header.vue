

<template>
  <div>
    <header class="img-fluid he1 ">
      <!--NavBar-->
      <!-- <NavBar /> -->
      <!-- Background image -->
      <img src="../assets/images/background.png" class="img-fluid" alt="Responsive image">
        <!-- <img src="../assets/images/background.png" alt=""> -->
        <div class="text-center">
          <h1 class="violet">Votez pour le plus beau bébé</h1>
          <h4 class="bleu">de l’Afrique de l’ouest</h4>
        </div>

      <!-- Background image -->
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* header {
  height: 50vh;
  width: 100%;
  background-image: url(../assets/images/background.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
} */

header   img {
    width: 100%;
     height: 40em;
    
}

header > div {
  position: absolute;
  left: 5em;
  top: 25em;
  
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
  font-size: 3em;
  display: flex;
  /* align-items: center;
  text-align: center; */

  color: #cf5c95;
  box-sizing: border-box;
}
.bleu {
  font-style: normal;
  font-weight: 600;
  font-size: 2em;
  /* align-items: center;
  text-align: center; */
  color: #5772b7;
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
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  position: absolute;
  /* top: 0; */
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
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

.button-l1 {
  width: 300px;
  height: 150px;
  border-radius: 0.5em;
  background-color: #cf5c95;
  border: 0em;
  text-align: center;
  color: #ffffff;
  margin-left: 15em;
  margin-top: 2em;
}

.card-vote > button {
  background-color: #cf5c95;
  color: #ffffff;
  border: 0em;
  padding: 0em 2em 0em 2em;
  border-radius: 0.25em;
}

@media screen and (max-width:714px){


.violet {

  font-size: 1.5em;
}
.bleu {
  
  font-size: 2em;
}


}
</style>
