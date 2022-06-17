<template>
  
  <div class="container">
       <div class="">
           <div class="titre">
                <span class="titre">Modifier les infos du bébé</span><br>
           </div>
            <img src="@/assets/images/page-concours.png" class="img" alt="...">
            <div class="info-bébé">
            <span class="sous-titre">*Modifier la photo à la une</span><br>
            <form action="" method="post">
                <div class="btn-radio">
                    <div class="btn1">
                        <input type="radio" class="radio1" name="type"  /> <label for="">Garçon</label>
                    </div>
                    <div class="btn2">
                        <input type="radio"  class="radio2"  name="type"  /> <label for="">Fille</label>
                    </div>
                </div>
            <div class="txt_field">
                <input type="text" required>
                <label for="">Nom et prénom </label>
            </div>
            <div class="txt_field">
                <input type="date" name="" id="">
                <label for="">Date de naissance</label>
            </div>
            <div class="txt_field">
                <input type="text" name="" id="">
                <label for="">Ville</label>
            </div>
            <div class="txt_field">
                <input type="tel" name="" id="">
                <label for="">Pays</label>
            </div>
            
            <a href=""><span>+ Ajouter une nouvelle photo</span></a>
            <div class="btn">
                <input type="submit" value="Ajouter">
            </div>
        </form>
            </div>
           
            
       
       </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    text-align: center;

}
.img{
width: 500px;
height: 360px;
background: #E5E5E5;
border: 2px solid #CF5C95;
box-sizing: border-box;
border-radius: 10px;
margin-top: 51px;
}
.info-bébé{
    margin-top:20px;
}
.titre{
font-weight: 600;
font-size: 48px;
line-height: 59px;
letter-spacing: 0.2px;
color: #3C64B1;
margin-top: 145px;
margin-bottom:50px;
}
.sous-titre{
font-weight: 400;
font-size: 18px;
line-height: 22px;
letter-spacing: 0.2px;

}



.btn-radio {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  font-weight: 500;
font-size: 24px;
line-height: 29px;
letter-spacing: 0.2px;
margin-top:40px;
}
.btn-radio input {
  border: 3px solid #CF5C95;
  background:#CF5C95 ;
}




form .txt_field{
    position: relative;
    margin: 30px 0;
    
}
.txt_field input{
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    border-bottom: 2px solid #000000;
    background: none;
    outline: none;
}
.txt_field label{
    font-weight: 500;
font-size: 24px;
line-height: 29px;
letter-spacing: 0.2px;
    text-align: center;
    justify-content: center;
    
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
.btn{
    justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 46px;
}
a{
font-weight: 400;
font-size: 24px;
line-height: 29px;
letter-spacing: 0.2px;
color: #000000;


}
input[type="submit"]{
    width: 194px;
    height: 55px;
    background: #CF5C95;
    border-radius: 10px;
    border: 1px solid;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    align-items: center;
    margin-top: 65px;

}
input[type="submit"]:hover{
    border-color: #CF5C95;
    transition: .5s;
}

</style>