<script>
import Chart from 'chart.js';
import { onMount } from 'svelte';
import {tableau} from '../store/tableau.js';
import { collectionData, firestore } from '../Firebase';




var ctx;
var myChart;
var count = 0;
var nom=''
var varY = [0,0,0,0,0,0,0,0,0,0,0,0];


const MONTH = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre']

const dataChart = {
    type: 'line',
    data: {
        labels: MONTH,
        datasets: []
	},
	
    options: {
		responsive: true,
		maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
					beginAtZero: true,
					fontSize: 20,
                }
			}],
			xAxes: [{
                ticks: {
					beginAtZero: false,
					fontSize: 25,
                }
            }]
        },
        animation: {
            duration: 0
        },
        hover: {
            animationDuration: 0
        },
        responsiveAnimationDuration: 0
		
	}
    };
    
    


onMount(() => {
const query = firestore.collection('graph-svelte');
 
    collectionData(query).subscribe(graphs =>{
		let dataset=[];
		tableau.set([]);
        graphs.forEach(graph => {
			dataset.push(graph)
            $tableau = [...$tableau,graph];
   
		});
		dataChart.data.datasets = dataset;
		myChart.update();
     
	});

myChart = new Chart(ctx.getContext('2d'), dataChart);

		
myChart.update();





})

async function addValue(){
	if(nom != ''){
		count++;
		let color = [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)];
		let data = {
				label: nom,
				data: varY,
				backgroundColor: 
					'rgba('+color[0]+', '+color[1]+', '+color[2]+', 0.2)',
			
		
				borderColor: 
					'rgba('+color[0]+', '+color[1]+', '+color[2]+', 1)',
				
				borderWidth: 1
			}
		$tableau = [...$tableau,data];
		
		await add(data);
		
	}
	else{
		alert('Veuillez inscrire un nom');
	}
}

async function add(data){
    try{
        await firestore.collection('graph-svelte').add(data)
    }catch(error){
        console.log(error);
	}
}
	

async function addRandom(){
	count++;
	let color = [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)];
	let data = {
            label: 'Random '+count,
            data: [
				Math.floor(Math.random() * 10),
				Math.floor(Math.random() * 10) ,
				Math.floor(Math.random() * 10) ,
				Math.floor(Math.random() * 10) ,
				Math.floor(Math.random() * 10) ,
				Math.floor(Math.random() * 10) ,
				Math.floor(Math.random() * 10) ,
				Math.floor(Math.random() * 10) ,
				Math.floor(Math.random() * 10) ,
				Math.floor(Math.random() * 10) ,
				Math.floor(Math.random() * 10) ,
				Math.floor(Math.random() * 10)  ],
            backgroundColor: 
                'rgba('+color[0]+', '+color[1]+', '+color[2]+', 0.2)',
        
      
            borderColor: 
                'rgba('+color[0]+', '+color[1]+', '+color[2]+', 1)',
			
            borderWidth: 1
		};
	$tableau = [...$tableau,data];
	await add(data);

	
}

</script>

<div id="container">
	<canvas bind:this={ctx} id="myChart"></canvas>
	<div>
		<input bind:value={nom} required placeholder="Nom" size="4">
		<input bind:value={varY[0]}  type="number" placeholder="Janvier" >
		<input bind:value={varY[1]}  type="number" placeholder="Fevrier" >
		<input bind:value={varY[2]}  type="number" placeholder="Mars" >
		<input bind:value={varY[3]}  type="number" placeholder="Avril" >
		<input bind:value={varY[4]}  type="number" placeholder="Mai" >
		<input bind:value={varY[5]}  type="number" placeholder="Juin" >
		<input bind:value={varY[6]}  type="number" placeholder="Juillet" >
		<input bind:value={varY[7]}  type="number" placeholder="Aout" >
		<input bind:value={varY[8]}  type="number" placeholder="Septembre" >
		<input bind:value={varY[9]}  type="number" placeholder="Octobre" >
		<input bind:value={varY[10]} type="number" placeholder="Novembre" >
		<input bind:value={varY[11]}  type="number" placeholder="Decembre" >
		<button on:click={addValue}>Ajouter</button>
	</div>
	<button on:click={addRandom}>Ajouter Random</button>

</div>

<style>

#container{
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	
}

canvas{
	
	width: 900px !important;
	height: 600px !important;
}

input {
  width: 110px;
}
</style>
