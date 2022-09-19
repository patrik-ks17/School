function lejatszas(x){

	if( x=="szúnyog" )   
		hang.innerHTML = "<audio controls autoplay><source src='./hangok/mosquito.mp3' type='audio/mpeg'></audio>"  
	if( x=="bárány"  )   
		hang.innerHTML = "<audio controls autoplay><source src='./hangok/sheep.mp3'    type='audio/mpeg'></audio>"  
	if( x=="malac"   )   
		hang.innerHTML = "<audio controls autoplay><source src='./hangok/pig.mp3'      type='audio/mpeg'></audio>"  

	if( x=="csend" )   
		hang.innerHTML = "<audio controls></audio>"
}