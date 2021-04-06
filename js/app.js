'use strict';
/*
const hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min,max) {
    return Math.floor(Math.random() * (max- min + 1) + min);
}

const seattle={
    locationName:'Seattle',
    minCustomers:23,
    maxCustomers:65,
    avgCookies:6.3,
    customerEachHour:[],
    cookiesEachHour:[],
// calculate a random number of customers for each hour:
    calCustomerEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            
           this.customerEachHour.push(random(this.minCustomers,this.maxCustomers)) 
        }
    },
    calCookiesEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor (this.customerEachHour[i]*this.avgCookies));
            
        }

    },
    render:function () {
        let parent=document.getElementById('parent');
        console.log(parent);
        
        let nameElement=document.createElement('h3');

        parent.appendChild(nameElement);

        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            
            let liElement=document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
            
        }
        
    }



}
seattle.calCustomerEachHour();
seattle.calCookiesEachHour();
seattle.render();
console.log(seattle);




// TOKYO.........................


const tokyo={
    locationName:'tokyo',
    minCustomers:3,
    maxCustomers:24,
    avgCookies:1.2,
    customerEachHour:[],
    cookiesEachHour:[],
// calculate a random number of customers for each hour:
    calCustomerEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            
           this.customerEachHour.push(random(this.minCustomers,this.maxCustomers)) 
        }
    },
    calCookiesEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor (this.customerEachHour[i]*this.avgCookies));
            
        }

    },
    render:function () {
        let parent=document.getElementById('parent');
        console.log(parent);
        
        let nameElement=document.createElement('h3');

        parent.appendChild(nameElement);

        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            
            let liElement=document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
            
        }
        
    }



}
tokyo.calCustomerEachHour();
tokyo.calCookiesEachHour();
tokyo.render();
console.log(tokyo);




// DUBAI ...................................................................


const dubai={
    locationName:'Dubai',
    minCustomers:11,
    maxCustomers:38,
    avgCookies:3.7,
    customerEachHour:[],
    cookiesEachHour:[],
// calculate a random number of customers for each hour:
    calCustomerEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            
           this.customerEachHour.push(random(this.minCustomers,this.maxCustomers)) 
        }
    },
    calCookiesEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor (this.customerEachHour[i]*this.avgCookies));
            
        }

    },
    render:function () {
        let parent=document.getElementById('parent');
        console.log(parent);
        
        let nameElement=document.createElement('h3');

        parent.appendChild(nameElement);

        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            
            let liElement=document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
            
        }
        
    }



}
dubai.calCustomerEachHour();
dubai.calCookiesEachHour();
dubai.render();
console.log(dubai);





// paris .........................................


const paris={
    locationName:'Paris',
    minCustomers:20,
    maxCustomers:38,
    avgCookies:2.3,
    customerEachHour:[],
    cookiesEachHour:[],
// calculate a random number of customers for each hour:
    calCustomerEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            
           this.customerEachHour.push(random(this.minCustomers,this.maxCustomers)) 
        }
    },
    calCookiesEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor (this.customerEachHour[i]*this.avgCookies));
            
        }

    },
    render:function () {
        let parent=document.getElementById('parent');
        console.log(parent);
        
        let nameElement=document.createElement('h3');

        parent.appendChild(nameElement);

        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            
            let liElement=document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
            
        }
        
    }



}
paris.calCustomerEachHour();
paris.calCookiesEachHour();
paris.render();
console.log(paris);





// Lima .................................


const Lima={
    locationName:'Lima',
    minCustomers:2,
    maxCustomers:16,
    avgCookies:4.6,
    customerEachHour:[],
    cookiesEachHour:[],
// calculate a random number of customers for each hour:
    calCustomerEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            
           this.customerEachHour.push(random(this.minCustomers,this.maxCustomers)) 
        }
    },
    calCookiesEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor (this.customerEachHour[i]*this.avgCookies));
            
        }

    },
    render:function () {
        let parent=document.getElementById('parent');
        console.log(parent);
        
        let nameElement=document.createElement('h3');

        parent.appendChild(nameElement);

        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            
            let liElement=document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
            
        }
        
    }



}
Lima.calCustomerEachHour();
Lima.calCookiesEachHour();
Lima.render();
console.log(Lima);
*/

// LAB 7 Add a constructor function to the cookie stand project \\\\\\\\\\\\\\\
// LAB 7 Add a constructor function to the cookie stand project \\\\\\\\\\\\\\\
// LAB 7 Add a constructor function to the cookie stand project \\\\\\\\\\\\\\\




const hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let parent = document.getElementById('parent');
let tableElemnts = document.createElement('table');
parent.appendChild(tableElemnts);

function creatTable() {
    let thelemnts = document.createElement('th');
    tableElemnts.appendChild(thelemnts);
    for (let b = 0; b < hour.length; b++) {
      let thelemnts = document.createElement('th');
      tableElemnts.appendChild(thelemnts);
      thelemnts.textContent = hour[b];
      console.log(thelemnts);
    }
    let lastHeading = document.createElement('th');
    tableElemnts.appendChild(lastHeading);
    lastHeading.textContent = 'Daily Location Total';
  }
  creatTable();



let storage=[];
console.log(storage);

function storageDetails (place,minimum,maximum,avarage){
    this.place=place;
    this.minimum=minimum;
    this.maximum=maximum;
    this.avarage=avarage;
    this.randomNumber=[];
   
    this.getrandomNumber();
    


    storage.push(this);
  }



  storageDetails.prototype.getrandomNumber = function () {
  for (let i = 0; i < hour.length; i++) {
    this.randomNumber.push(Math.floor((randomNumber(this.maximum, this.minimum) * this.avarage)));
  }
}


let totalSum=0;
 storageDetails.prototype.render = function () {
    let trElement = document.createElement('tr');
    tableElemnts.appendChild(trElement);
    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = this.place;
    let sum = 0;
    for (let i = 0; i < hour.length; i++) {
      let tdElement = document.createElement('td');
      trElement.appendChild(tdElement);
      tdElement.textContent = this.randomNumber[i];
      sum += this.randomNumber[i];
    }
    totalSum
+=sum;
    let tail = document.createElement('td');
    trElement.appendChild(tail);
    tail.textContent = sum;
    sum = 0;
  }
  let Seatle= new storageDetails('Seatle', 23, 65, 6.3);
  let Tokyo= new storageDetails('Tokyo', 3, 24, 1.2);
  let Dubai= new storageDetails('Dubai', 11, 38, 3.7);
  let Paris= new storageDetails('Paris', 20, 38, 3.7);
  let Lima= new storageDetails('Lima', 2, 16, 4.6);

  for (let i = 0; i < storage.length; i++) {
    storage[i].render();
  }

  let sumTotal=0;
let total=0;

let trElement=document.createElement('tr');
tableElemnts.appendChild(trElement);
let tdElement=document.createElement('td');
trElement.appendChild(tdElement);
tdElement.textContent='Totals'; 
for(let i=0;i<hour.length;i++){
      for(let j=0;j<storage.length;j++){
        total+=storage[j].randomNumber[i];
      }
      console.log(total);
      let tdElement=document.createElement('td');
      trElement.appendChild(tdElement);
      tdElement.textContent=total;
      total=0;
      sumTotal+=total;  
}
console.log(totalSum
);
console.log(sumTotal);
let totalTotal=totalSum+sumTotal;
console.log(totalTotal);
let final=document.createElement('td');
trElement.appendChild(final);
final.textContent=totalTotal
