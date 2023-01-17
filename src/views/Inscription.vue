<template>
  <div class="container">
    <div class="center">
      <h1>Inscription</h1>
      <form action="" method="post">
        <div class="txt_field">
          <input type="text" required />
          <label for="">Nom et prénom </label>
        </div>
        <div class="txt_field">
          <input type="date" name="" id="" />
          <label for="">Date de naissance</label>
        </div>
        <div class="txt_field">
          <input type="text" name="" id="" />
          <label for="">Pays</label>
        </div>
        <div class="txt_field">
          <input type="tel" name="" id="" />
          <label for="">Numéro de téléphone</label>
        </div>
        <div class="txt_field">
          <input type="email" required />
          <label for="">Adress mail</label>
        </div>
        <div class="txt_field">
          <input type="password" required />
          <label for="">Mot de passe</label>
        </div>
        <div class="btn">
          <input type="submit" value="S'inscrire" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
};
</script>


<style scoped>
.container {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  height: 83.8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(120deg,#2980b9, #8e44ad); */
}
.center {
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.center h1 {
  text-align: center;
  padding: 0 0 20px 0;
  color: #3c64b1;
}
.center form {
  padding: 0 40px;
  box-sizing: border-box;
  width: 50%;
}
form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}
.txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
.txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
}
/* .txt_field span::before{
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #CF5C95;
    transition: .5s;
} */
.txt_field input:focus ~ label,
.txt_field input:valid ~ label {
  top: -5px;
  color: #cf5c95;
}
.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before {
  width: 100%;
}

.pass:hover {
  text-decoration: underline;
}
.btn {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 46px;
}
input[type="submit"] {
  width: 194px;
  height: 55px;
  background: #cf5c95;
  border-radius: 10px;
  border: 1px solid;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  align-items: center;
}
input[type="submit"]:hover {
  border-color: #cf5c95;
  transition: 0.5s;
}
.signup_link a {
  color: #cf5c95;
  text-decoration: none;
}

@media screen and (max-width:990px){
 .center form {
  padding: 0 0 0 0;
  width: 80%;
}
form .txt_field {
  position: relative;
  margin: 1em;
}
.center h1 {
padding: 0 0 0 0; 
}

}
@media screen and (max-width:460px){
form .txt_field {
  position: relative;
  margin: 0.8em;
}
.center form {
  padding: 0 0 0 0;
  width: 80%;
}
input[type="submit"] {
  width: 8em;
  height: 2em;
  border-radius: 10px;
  border: 1px solid;
  font-size: 18px;
  font-weight: 700;
}
}
</style>

