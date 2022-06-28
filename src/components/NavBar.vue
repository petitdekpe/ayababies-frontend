<template>


<nav class=" navbar navbar-expand-lg navbar-light bg-light  ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <img
      class="d- flex justify-content-start ms-3 navbar-brand"
      src="@/assets/images/logo.svg"
      alt="Ayababies"
    />
    
    <div class=" collapse navbar-collapse" id="navbarTogglerDemo03">
     
      <ul class="justify-content-center nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <router-link to="/" class="nav-link ">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/concours" class="nav-link">Concours</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/participer" class="nav-link">Participer</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/partenaires" class="nav-link">Partenaires</router-link>
        </li>
      </ul>
      
      <form class="d-flex">
        <a href="inscription"><button type="button" class="btn btn-secondary btn-inscription me-5">
        Inscription
      </button></a>

      <!--Button Connexion-->
      <a href="connexion"><button type="button" class="btn btn-outline-secondary btn-connexion">
        Connexion
      </button></a>
        
      </form>
      </div>
    </div>
  
</nav>
  
</template>
<script>
export default {

}
</script>

<style scoped>
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
  display: flex;
  align-items: center;
  text-align: center;
  color: #cf5c95;
  box-sizing: border-box;
}
.bleu {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  align-items: center;
  text-align: center;
  color: #5772b7;
}

.text-introductif {
  margin-top: 50px;
  align-items: center;
}
.nav-link{
  color: #cf5c95;
}
.nav-item:focus{
  color: #5772b7;
}
.nav-link:focus{
  color: #5772b7
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
.justify-content-center{
  display: flex;
}
</style>
