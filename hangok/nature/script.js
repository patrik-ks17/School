function lejatszas(x){

	if( x=="basketball" )   
		hang.innerHTML = "<audio controls autoplay><source src='./hangok/basketball.mp3' type='audio/mpeg'></audio>"  
	if( x=="tennis"  )   
		hang.innerHTML = "<audio controls autoplay><source src='./hangok/tennis.wav'    type='audio/mpeg'></audio>"  
	if( x=="fishing"   )   
		hang.innerHTML = "<audio controls autoplay><source src='./hangok/fishing.mp3'      type='audio/mpeg'></audio>"  
	if( x=="karate"   )   
	hang.innerHTML = "<audio controls autoplay><source src='./hangok/karate.wav'      type='audio/mpeg'></audio>"  

	if( x=="csend" )   
		hang.innerHTML = "<audio controls></audio>"
}