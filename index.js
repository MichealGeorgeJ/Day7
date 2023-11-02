//1.Get all the countries from Asia continent /region using Filter function.
const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all", true);
request.send();
request.onload=()=>{
    let data=request.response;
    let result=JSON.parse(data);
    const asiaContinent=result.filter((ele)=> ele.continents=="Asia")
    
    console.log(asiaContinent);
}
//--------------------------------------------------------
//2.Get all the countries with a population of less than 2 lakhs using Filter function.
const request1=new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload=()=>{
    let data1=request1.response;
    let result1=JSON.parse(data1);
    const population=result1.filter((elem)=> elem.population<200000);
    
    console.log(population);
}
//--------------------------------------------------------
//3.Print the following details name, capital, flag, using forEach function.
const request2=new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload=()=>{
    let data2=request2.response;
    let result2=JSON.parse(data2);
    result2.forEach((element)=> console.log(element.name,element.capital,element.flag));

    
}
//--------------------------------------------------------
//4.Print the total population of countries using reduce function.
var request3 = new XMLHttpRequest();
       request3.open('GET','https://restcountries.com/v2/all', true);
       request3.send();
       request3.onload =()=>{
       var data3 = JSON.parse(request3.response);
       const population=data3.reduce((acc,curr)=>{
                return acc+curr.population;
                
            },0);
            console.log(population);
   }
   //-----------------------------------------------------
//5.Print the country that uses US dollars as currency.

var request4 = new XMLHttpRequest();
request4.open('Get','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
request4.send();
request4.onload = function () {
     var data4 = JSON.parse(this.response);
     var cur=[];
     for(i=0;i<data4.length;i++){
         if(data4[i].currencies[0].code==="USD")
         {
          console.log(data4[i].name," --",data4[i].currencies[0].code);
         }
     }
}
