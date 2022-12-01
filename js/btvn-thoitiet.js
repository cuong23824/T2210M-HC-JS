var xhttp = new XMLHttpRequest();
xhttp.onload = function ()
{
    //    step 2: trasfen to is object
    var result = this.responseText;
    var data = JSON.parse(result);
    //end step 2
    //    step 3: using data

    const myRow = document.querySelector('.row');
    console.log(data);

    for( let i =0;i<data.list.length;i++){

        const myAticle = document.createElement('article');
        myRow.appendChild(myAticle);
        myAticle.classList.add('col-3');

        const myDiv1 = document.createElement('div');
        myAticle.appendChild(myDiv1);
        myDiv1.classList.add('card','text-bg-secondary','mb-3');
        myDiv1.style.marginTop = '20px';

        const myDiv2 = document.createElement('div');
        myDiv1.appendChild(myDiv2);
        myDiv2.classList.add('card-body');

        const myH6 = document.createElement('h6');
        myDiv2.appendChild(myH6);
        myH6.innerText = data.list[i].dt_txt;

        const myDiv3 = document.createElement('div');
        myDiv2.appendChild(myDiv3);
        myDiv3.style.display = 'flex';
        myDiv3.style.alignItems = 'center';
        myDiv3.style.height = '60px';
        myDiv3.style.justifyContent = 'space-between';

        const myH2 = document.createElement('h2');
        myDiv3.appendChild(myH2);

        myH2.innerText = data.list[i].main.temp;
        myH2.innerHTML +='<sup>o</sup>C';

        const myImg = document.createElement('img');
        myDiv3.appendChild(myImg);
        myImg.src = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`

        const myP = document.createElement('p')
        myDiv2.appendChild(myP);
        myP.innerText = data.list[i].weather[0].description;


    }

}



xhttp.open("GET","http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric");
xhttp.send();

const myDiv0 = document.querySelector('div');
myDiv0.style.backgroundImage = 'url(images/vutru.jfif)';