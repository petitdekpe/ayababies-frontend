<template>
  
    <div class="container1">
       <div class="">
            <img src="@/assets/images/page-concours.png" class="img" alt="...">
            <div class="info-bébé"></div>
            <span class="nom">Cyrile</span><br>
            <span class="ans">Fille<span class="point">.</span>3 ans</span><br>
            <span class="pays">Cotonou,Bénin</span><br>
       
       </div>
    </div>

    
    <div class="container">
            <div class="sous-titre1">
        <span class="titre1">Autres photos</span>
        
    </div>

          <div class="row">
            <div class="col-3" style="margin-bottom: 1em">
              <div class="card" style="width: 15rem; border-radius: 0.55rem">
                <img
                  class="card-img"
                  src="@/assets/images/bebe-metis.png"
                  style="border: 0"
                />
                <div class="d-flex"></div>
                <div
                  class="
                    card-img-overlay
                    h-100
                    d-flex
                    flex-column
                    justify-content-end
                  "
                >
                </div>
              </div>
            </div>

            <div class="col-3" style="margin-bottom: 1em">
              <div class="card" style="width: 15rem; border-radius: 0.55rem">
                <img
                  class="card-img"
                  src="@/assets/images/bebe-metis.png"
                  style="border: 0"
                />
                <div class="d-flex"></div>
                <div
                  class="
                    card-img-overlay
                    h-100
                    d-flex
                    flex-column
                    justify-content-end
                  "
                >
                </div>
              </div>
            </div>

            <div class="col-3" style="margin-bottom: 1em">
              <div class="card" style="width: 15rem; border-radius: 0.55rem">
                <img
                  class="card-img"
                  src="@/assets/images/bebe-metis.png"
                  style="border: 0"
                />
                <div class="d-flex"></div>
                <div
                  class="
                    card-img-overlay
                    h-100
                    d-flex
                    flex-column
                    justify-content-end
                  "
                >
                </div>
              </div>
            </div>

            <div class="col-3" style="margin-bottom: 1em">
              <div class="card" style="width: 15rem; border-radius: 0.55rem">
                <img
                  class="card-img"
                  src="@/assets/images/bebe-metis.png"
                  style="border: 0"
                />
                <div class="d-flex"></div>
                <div
                  class="
                    card-img-overlay
                    h-100
                    d-flex
                    flex-column
                    justify-content-end
                  "
                >
                </div>
              </div>
            </div>
        </div>
    </div> 


    

    <div class="page-content">
            
	    <div class="container">
        <div class="sous-titre2">
        <span class="titre2">Récents concours</span>
        
    </div>
	    <div class="row">
		<div class="col-4" style="margin-bottom: 1em;">
		<div class="card page-concours">		
					<div class="d-flex card-message"></div>
				<div class="card-img-overlay h-500 d-flex flex-column justify-content-end">
					<p class="card-text1" style="color:#ffffff;">DU 01 JANVIER AU 15 JANVIER 2022</p>
					<p class="card-text2" style="color:#ffffff;"><strong>CONCOURS BÉBÉ 2022</strong></p>
					<div class="button-container">
          <span class="nbr-vote">11255 VOTES</span>	
          	<button>VOTER</button>
          </div>
				</div>
			</div>
		</div>

		<div class="col-4" style="margin-bottom: 1em;">
			<div class="card page-concours">		
						<div class="d-flex card-message"></div>
					<div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
					<p class="card-text1" style="color:#ffffff;">DU 01 JANVIER AU 15 JANVIER 2022</p>
					<p class="card-text2" style="color:#ffffff;"><strong>CONCOURS BÉBÉ 2022</strong></p>
					<div class="button-container">
          <span class="nbr-vote">11255 VOTES</span>	
          	<button>VOTER</button>
          </div>
					</div>
				</div>
			</div>

			<div class="col-4" style="margin-bottom: 1em;">
				<div class="card page-concours">		
							<div class="d-flex card-message"></div>
						<div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
						<p class="card-text1" style="color:#ffffff;">DU 01 JANVIER AU 15 JANVIER 2022</p>
					<p class="card-text2" style="color:#ffffff;"><strong>CONCOURS BÉBÉ 2022</strong></p>
          <div class="button-container">
          <span class="nbr-vote">11255 VOTES</span>	
          	<button>VOTER</button>
          </div>
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

.container1{
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom:50px

}
.img{
  width: 749.17px;
height: 539.4px;
  border: 2px solid #CF5C95;
  box-sizing: border-box;
  border-radius: 20px;
  margin-top: 63px;
}
.info-bébé{
    margin-top:40px;
}
.nom{
    font-weight: 600;
font-size: 36px;
line-height: 44px;
letter-spacing: 0.2px;
}
.ans,
.pays{
    font-weight: 400;
font-size: 24px;
line-height: 29px;
letter-spacing: 0.2px;

}
.point{
font-size: 70px;
}
.row{
  margin-top:40px;
  margin-bottom:80px;
}
.sous-titre1{
  border-bottom: 1px solid #000000;
  width: 95%;
height: 0px;


}
.titre1{
font-weight: 700;
font-size: 24px;
line-height: 33px;
letter-spacing: 0.2px; 

position: absolute;
margin-top: -40px;

} 
.sous-titre2{
  border-bottom: 1px solid #000000;
  width: 95%;
height: 0px;

} 
.titre2{
font-weight: 700;
font-size: 24px;
line-height: 33px;
letter-spacing: 0.2px; 
/* border-bottom: 1px solid #000000; */
position: absolute;
margin-top: -40px;
}  





.card-message{
height: 82px;
background:#CF5C95;
border-radius: 9px;
position: absolute;
right: 0;
bottom: 0;
left: 0;
padding: 4rem;			
}
.button-container{
  display: flex;
  gap: 120px;

  
}
button{
width: 100px;
height: 30px;
display: flex;
justify-content: center;
/* align-items: center;
text-align: center; */
background-color: #ffffff;
color: #3C64B1;
border: 0em;
border-radius: 5px;
}
.nbr-vote{
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2px;
text-transform: uppercase;
color: #FFFFFF;


}
.card-text1{
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.2px;
    text-transform: uppercase;

}
.card-text2{
    font-weight: 700;
    font-size: 30px;
    line-height: 44px;
    line-height: 10px;
    letter-spacing: 0.2px;
    text-transform: uppercase;

}


		.page-concours{
            width: 400px;
height: 368px;




filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
border-radius: 10px;
			background-image: url('@/assets/images/background.png');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
            margin-bottom: 80px;
            /* margin-top:50px; */
		}
		.justify-content-center{
			display: flex;
		}
		.col-6 a{
			color: #CF5C95;
			text-decoration-line: none;
			cursor: pointer ;
			
		}

</style>