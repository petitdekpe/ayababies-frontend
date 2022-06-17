<template>
  
  <div class="container">
       <div class="">
           <div class="titre">
                <span class="titre">Ajouter un bébé</span><br>
           </div>
            <img src="@/assets/images/partenaires.png" class="img" alt="..." key="" >
            <!-- <div class="icon-add">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16">
                <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/>
                <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/></svg>
            </div> -->
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
<!--             
            <a href=""><span>+ Ajouter un bébé</span></a> -->
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
/* margin-top: 51px; */
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
  border: 2px solid #CF5C95;
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
    margin-bottom: 100px;
    margin-top:100px;

}
input[type="submit"]:hover{
    border-color: #CF5C95;
    transition: .5s;
}

</style>