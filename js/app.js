'use strict';
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
