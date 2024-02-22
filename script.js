let para = document.querySelector("#timer")

function currentTime(){
	
	let date = new Date()
	let hour=date.getHours()
	let min = date.getMinutes()
	let sec = date.getSeconds()
	let todayDate = date.getDate()
    let day = date.getDay()
    let month = date.getMonth()
    let year = date.getFullYear()
	//let time= convertTime(hour, min, sec)
    //to add zero
    let arrayOfTime= convertTime(hour, min, sec)
    for(let i=0; i<=2; i++){
        arrayOfTime[i] = addZero(arrayOfTime[i])
    }
    let time= `${arrayOfTime[0]}:${arrayOfTime[1]}:${arrayOfTime[2]}:${arrayOfTime[3]}`

	para.innerHTML = `${month}/${todayDate}/${year}, ${time}`
}

setInterval(currentTime,1000) //to set intervals

function convertTime(hr, min, sec){
    if(hr>12){
        hr = hr-12
       
        return [hr, min, sec, "PM"]
    }
    else if(hr==0){
       
        return [12, min, sec, "PM"]
    }
    else if(hr<12){
       
        return [hr, min, sec, "PM"]
    }
    else if(hr==12){
       
        return [hr, min, sec, "PM"]
    }
}

function addZero(k){
    if(k<10){
      return "0"+k
    }
    else{
        return k
    }
}