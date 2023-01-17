<template>

<header class="he3">
<!-- Background image -->
		      <div class="d-flex justify-content-center align-items-center h-75">
		        <div class="text-center" style="margin-top: 280px;">
		          <h3 class="violet">Partenaires</h3>
		        </div>
		      </div>
		  <!-- Background image -->
</header>

        <!-- Les partenaires  -->
	<div class="page-content" style="margin-top: 50px;">
      <div class="container">
        <div class="row">

          <div class="card-vote col-lg-3 col-md-6">
            <img src="@/assets/images/Point.png" alt="" /><br />
            <strong><span>Point Exe</span><br /></strong>
            
          </div>
          <div class="card-vote col-lg-3 col-md-6">
            <img src="@/assets/images/Hits.png" alt="" /><br />
            <strong><span>Hits 2000</span><br /></strong>
          </div>

          <div class="card-vote col-lg-3 col-md-6">
            <img src="@/assets/images/Jeny.png" alt="" /><br />
            <strong><span>Jeny SAS</span><br /></strong>
          </div>
          
          <div class="card-vote col-lg-3 col-md-6">
            <img src="@/assets/images/Double.png" alt="" /><br />
            <strong><span>Double Seven</span><br /></strong>
          </div>

          <div class="card-vote col-lg-3 col-md-6">
            <img src="@/assets/images/Deg.png" alt="" /><br />
            <strong><span>Trei Dgete<br />Music</span><br /></strong>
          </div>

          <div class="card-vote col-lg-3 col-md-6">
            <img src="@/assets/images/Mbia.png" alt="" /><br />
            <strong><span>Ambiance<br />Skandal Music</span><br /></strong>
          </div>
		  
          <div class="card-vote col-lg-3 col-md-6">
            <img src="@/assets/images/Mtn.png" alt="" /><br />
            <strong><span>MTN Momo</span><br /></strong>
          </div>

          <div class="card-vote col-lg-3 col-md-6">
            <img src="@/assets/images/Moov.png" alt="" /><br />
            <strong><span>MOOV Money</span><br /></strong>
          </div>

		  <div class="card-vote col-lg-3 col-md-6">
            <img src="@/assets/images/Point.png" alt="" /><br />
            <strong><span>Gozem</span><br /></strong>
          </div>

          <div class="card-vote col-lg-3 col-md-6">
            <img src="@/assets/images/Point.png" alt="" /><br />
            <strong><span>Point BJ</span><br /></strong>
          </div>

          <div class="card-vote col-lg-3 col-md-6">
            <img src="@/assets/images/Point.png" alt="" /><br />
            <strong><span>EYA</span><br /></strong>
          </div>

          <div class="card-vote col-lg-3 col-md-6">
            <img src="@/assets/images/Point.png" alt="" /><br />
            <strong><span>Mois du <br />Consommons<br /> Local</span><br /></strong>
          </div>
        </div>

		<!-- pagination -->
        <div class="justify-content-center">
          <nav aria-label="Page navigation example">
          <ul class="pagination">
          <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
          </li>
          </ul>
          </nav>
        </div>
    	</div>

		
	</div>



  
</template>

<script>
//import { response } from 'express';
import { HTTP } from './http-common';

export default {
	data(){
		return{
			partenaires: [],
			errors: []
		}
	},

	created(){
		HTTP.get('endpoint')
		.then(response => {
			this.partenaires = response.data
		})
		.catch(e => {
			this.errors.push(e)
		})
	}
}
</script>

<style>
.he3{
	height: 65vh;
    width: 100%;
    background-image: url("@/assets/images/partenaires.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.btn-inscription, .btn-inscription:hover, .btn-inscription:active, .btn-inscription:visited {
	    background-color: #CF5C95; border-color: #CF5C95;}

		.btn-connexion, .btn-connexion:active, .btn-connexion:visited {
	    color: #3C64B1; border-color: #3C64B1;}
	
		.btn-connexion:hover{
		color: #ffffff; background-color: #3C64B1;}

		.navbar-bg-color{
			background-color: #ffffff;
			box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
		}
		.violet{
			font-style: normal;
			font-weight: 600;
			font-size: 48px;
			/* identical to box height */

			display: flex;
			align-items: center;
			text-align: center;

			color: #ffffff;
			box-sizing: border-box;
		}
		.bleu{
			font-style: normal;
			font-weight: 600;
			font-size: 36px;
			/* identical to box height */

			align-items: center;
			text-align: center;

			color: #5772B7;
		}

		.text-introductif{
			margin-top: 50px;
    		align-items: center;
		}

		.content-titre{
			width: fit-content;
			background: #CF5C95;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			margin-top: 70px;
			text-align: center ;
			color: #ffffff;
			padding: 0.5em 5em;

		}

		.card-concours{
			position: absolute;
			width: 344px;
			height: 304px;
			left: 134px;
			border-radius: 10px;
		}
		.card-gagnant{
			height: 100%;
			/* background: rgba(60, 100, 177, 0.5); */
			border-radius: 10px;
			position: absolute;
		    /* top: 0; */
		    right: 0;
		    bottom: 0;
		    left: 0;
		    padding: 1rem;
		}

		.card-vote{
			text-align: center;
			margin-bottom: 1em;
		}

		.card-tem{
			text-align: center;
			background-color: #CF5C95;
			color: #ffffff;
			padding-top: 1em;
			padding-bottom: 1em;
			margin-bottom: 2em;
			font-size: 0.60em;
			align-items: center;
		}

		.img-tem{
			border-radius: 10em;
			height: 9em;
			width: 9em;
		}

		.button-l1{
			width: 300px;
			height: 150px;
			border-radius: 0.5em;
			background-color: #CF5C95;
			border: 0em;
			text-align: center;
			color: #ffffff;
			margin-left: 15em;
			margin-top: 2em;
		}

		.card-vote > button{
			background-color: #CF5C95;
			color: #ffffff;
			border: 0em;
			padding: 0em 2em 0em 2em;
			border-radius: 0.25em;

		}
		.justify-content-center{
			display: flex;
		}
		.page-link{
  		color: #cf5c95
  
		}

@media screen and (max-width: 766px){

header > div .text-center {
    top: 10em;
}
}
</style>