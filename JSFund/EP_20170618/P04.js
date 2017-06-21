function election(ballots){

   let systems = new Map();   
   let votesBySystem = new Map();
   let totalVotes = 0;

   for(let ballot of ballots){
       //console.log(ballot);

       let systemName = ballot['system'];
       let candidate = ballot['candidate'];
       let votes =  ballot['votes'];
       
       //console.log(systemName);
       //console.log(candidate);
       //console.log(votes);

       if(!systems.has(systemName)){
           systems.set(systemName, new Map());
           //console.log('------->new system');
           //console.log(systems);
           votesBySystem.set(systemName,0);
       }
       
       if(!systems.get(systemName).has(candidate)){
           systems.get(systemName).set(candidate,0);
           //console.log('------->new candidate');
           //console.log(systems);
       }

       let oldVotes = systems.get(systemName).get(candidate);
       let newVotes = oldVotes+votes;
       totalVotes+=votes;

       let tSystemVotes = votesBySystem.get(systemName);
       votesBySystem.set(systemName,tSystemVotes+votes);

       //console.log('------->new votes for candidate');
       systems.get(systemName).set(candidate,newVotes);
       //console.log(systems);
    }

    //console.log(systems);
    //console.log('total votes: ' + totalVotes);

    // get system winners
    let systemWinners = new Map();

    for(let [sys,votes] of systems){
        //console.log(sys);
        //console.log(votes);

        let votesArr = [...votes];
        //console.log(votesArr);  

        let sortedSysVotes =  [...votes].sort((a,b)=> a[1] < b[1]);
        //console.log(sortedSysVotes);

        systemWinners.set(sys,sortedSysVotes.shift());
        //console.log(systemWinners);
    }
    
    //console.log(systemWinners);   
    //console.log(votesBySystem);  

    let winnerVotesWholeSystem = new Map();

    for( let [sys,winner]  of systemWinners){
        
        //console.log(winner[0]);

        if(!winnerVotesWholeSystem.has(winner[0])){
            winnerVotesWholeSystem.set(winner[0],0);
        }

        let currSysVotes = votesBySystem.get(sys);
        let oldWinnerVotes = winnerVotesWholeSystem.get(winner[0]);

        winnerVotesWholeSystem.set(winner[0],oldWinnerVotes+currSysVotes);
    }

    let sortedFinalWinners = [...winnerVotesWholeSystem].sort((a,b)=> a[1] < b[1]);
    //console.log(winnerVotesWholeSystem);

    //console.log(sortedFinalWinners);

    let firstName = sortedFinalWinners[0][0];
    let firstScore = sortedFinalWinners[0][1];

    let secondName = sortedFinalWinners[1][0];
    let secondScore = sortedFinalWinners[1][1];
  

    if(firstScore >= totalVotes/2){
        console.log(`${firstName} wins with ${firstScore} votes`);
        console.log(`Runner up: ${secondName}`);
        let runnerUp =[];

        for(let [sys,winner] of systemWinners){ 
            if(winner[0]==secondName){
                runnerUp.push([sys,votesBySystem.get(sys)]);
            }
        }   

        runnerUp.sort((a,b)=> a[1] < b[1]);

        for(let row of runnerUp){
            console.log(row[0]+': '+row[1]);
        }        
    } else {
       console.log(`Runoff between ${firstName} with ${Math.floor(firstScore/totalVotes*100)}% and ${secondName} with ${Math.floor(secondScore/totalVotes*100)}%`);
    }
}




election([
  { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
  { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
  { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
  { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
  { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
  { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]);