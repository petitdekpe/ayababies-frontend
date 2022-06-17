<template>
    <!-- le profil -->
    <div class="profil-container">

        <img src="@/assets/images/img-vote.png" alt="rondet">
        <div class="profil-info">
            <span class="name">Petit Dekpe</span>
            <span class="mail">petitdekpe@gmail.com</span>
            <button>MODIFIER</button>	
        </div>
    </div>

    <div class="page-content">
        <!-- la ligne et le titre -->
    <div class="sous-titre">
        <span class="titre">Mers enfants</span>
        
    </div>
    <!-- les photos des enfants -->
	    <div class="container">
	    <div class="row">
		<div class="col-4" style="margin-bottom: 1em;">
		<div class="card page-concours">		
					<div class="d-flex card-message"></div>
				<div class="card-img-overlay h-500 d-flex flex-column justify-content-end">
					<p class="card-text1" style="color:#ffffff;">Hortance</p>
					<p class="card-text2" style="color:#ffffff;"><strong>4 mois</strong></p>
				</div>
			</div>
		</div>

		<div class="col-4" style="margin-bottom: 1em;">
			<div class="card page-concours">		
						<div class="d-flex card-message"></div>
					<div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
					<p class="card-text1" style="color:#ffffff;">Clémence</p>
					<p class="card-text2" style="color:#ffffff;"><strong>18 mois</strong></p>
					</div>
				</div>
			</div>

			<div class="col-4" style="margin-bottom: 1em;">
				<div class="card page-concours-add">		
							<div class="d-flex card-message"></div>
						<div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
						<p class="card-text1" style="color:#ffffff;">Ajouter un bébé</p>
						</div>
					</div>
				</div>  
            </div>      
        </div>      
    </div>             


</template>

<script>
export default {

}
</script>

<style scoped>
/* le profil */
img{
    width: 200px;
    clip-path:ellipse(50% 50%);
}
.profil-container{
    margin-top:90px;
    margin-bottom: 40px;
    gap:10px;
    
    display: flex;
    justify-content: center;
}
.profil-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1px;
}
.name{
font-weight: 700;
font-size: 36px;
line-height: 49px;
letter-spacing: 0.2px;

}
.mail{
font-weight: 400;
font-size: 24px;
line-height: 33px;
letter-spacing: 0.2px;
}
/* la ligne et le titre */
.titre{
font-weight: 700;
font-size: 24px;
line-height: 33px;
letter-spacing: 0.2px;
color: #CF5C95;  
border-top: 1px solid #000000;
position: absolute;
width: 67%;
height: 0px;
left: 284px;
top: 420px;
}  
/* cadre des photos */
.card-message{
height: 82px;
background: rgba(0, 0, 0, 0.6);
position: absolute;
right: 0;
bottom: 0;
left: 0;
padding: 4rem;			
}
button{
width: 100px;
height: 30px;
display: flex;
justify-content: center;
background-color: #CF5C95;
color: #ffffff;
border: 0em;
border-radius: 5px;
margin-top: 15px;
}
.card-text1{
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 33px;
letter-spacing: 0.2px;

}
.card-text2{
    font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 25px;
letter-spacing: 0.2px;
}
.page-concours{
width: 400px;
height: 368px;
/* filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25)); */

background-image: url('@/assets/images/background.png');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
margin-bottom: 200px;
margin-top: 50px;
}
.page-concours-add{
width: 400px;
height: 368px;
/* filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25)); */
background-color:#EAEAEA ;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
margin-bottom: 200px;
margin-top: 50px;

}
.bi{
position: absolute;
left: 40%;
right: 30%;
/* top: 40%; */
bottom: 50%;
height: 100px;
width: 100px;

}

</style>