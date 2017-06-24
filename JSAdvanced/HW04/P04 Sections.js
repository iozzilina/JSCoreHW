function create(sentences) {
    //['Section 1', 'Section 2', 'Section 3', 'Section 4']
    // TODO:

    let contentDiv = document.getElementById('content');

    let sections = sentences;
    for( let section of sections ){
        console.log(section);
        let newDiv = document.createElement('div');      
        let newPar = document.createElement('p');

        newPar.textContent = section;
        newPar.style.display = "none";

        newDiv.appendChild(newPar);

        newDiv.addEventListener('click', function(){         
            newPar.style.display = 'block';
        });
        contentDiv.appendChild(newDiv);
    }
  }