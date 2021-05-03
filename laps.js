window.onload=function(){
    const minutes = document.getElementById("minutes");
    const tens = document.getElementById("tens");
    const seconds = document.getElementById("seconds");
    console.log(minutes,tens,seconds);

    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");
    const resetBtn = document.getElementById("reset-btn");
    console.log(startBtn,stopBtn,resetBtn);

    let minutesSet = 0;
    let secondsSet = 0;
    let tensSet = 0;
    let Interval;

    resetBtn.onclick = function(){
        clearInterval(Interval);
        tens.innerHTML = tensSet = "00";
        seconds.innerHTML = secondsSet = "00";
        minutes.innerHTML = minutesSet = "00";
        document.getElementById("laps").innerHTML = "";
    }

    startBtn.onclick = function(){
//        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
        dimEffect();
    }

    stopBtn.onclick = function(){
        clearInterval(Interval);
        const lap = document.getElementById("laps");
        const li = document.createElement("li");
        li.innerHTML = `lap: <span>${minutes.innerHTML}:${seconds.innerHTML}.${tens.innerHTML}</span>`;
        lap.appendChild(li);
        dimEffect();
    }

    //Create start timer function
    function startTimer(){
        tensSet++;
        if(tensSet<9){
            tens.innerHTML = "0" + tensSet;
        }
        if(tensSet>9){
            tens.innerHTML = tensSet;
        }
        if(tensSet>99){
            secondsSet++;
            seconds.innerHTML = "0" + secondsSet;
            tensSet = 0;
            tens.innerHTML = "0" + 0;
        }
        if(secondsSet>9){
            seconds.innerHTML = secondsSet;
        }
        if(secondsSet==60){
            minutesSet++;
            minutesSet.innerHTML = "0" + minutesSet;
            secondsSet = 0;
        }
        if(minutesSet>9){
            minutesSet.innerHTML = minutesSet;
        }
    }
    //Dimming effect function
    function dimEffect(){
        document.getElementById("lap-time").classList.toggle("dimming-effect"); 
    }
};