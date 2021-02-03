const http = require('http');
//yeh "http "bulit in module hai node.js mai taki datako transfer kar sake (HTTP)mein ," require()" method module import karta hai.
const url = require('url');
//web address ko spilt karke readable parts banata hai unke.
//same yeh bhi built in module hai jisko required keyword lagake import kiya hai.

//connection settings

//a port is an end point of communication
//ek tarike ke communication point hai jispe jake comunicate kar sakte hai.
const port = 3000;//3000 ki jagha or bhi kuch value rakh sakte hai userdefined hai.
//hostname: IP which is associated with any device connected to a computer network
const hostname = '127.0.0.1'; //localhost
//isko bhi jaruri nahi ki 127.0.0.1 hi rakhe kuch or bhi rakh sakte hai user defined hai.

//ek array object banaya jisme data dala.
const cars = [
    {
        make: 'Audi',
        model: 'A3',
        year: '2015',
        price: 10000,
        transmission: 'Automatic',
        url: `https://images.pexels.com/photos/2394/lights-clouds-dark-car.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    },
    {
        make: 'Mercedes',
        model: 'B Class',
        year: '2018',
        price: 20000,
        transmission: 'Manual',
        url: `https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    },
    {
        make: 'Ford',
        model: 'Focus',
        year: '2018',
        price: 13000,
        transmission: 'Manual',
        url: `https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    }
];

//callback function to be executed when a user makes a request to our server
//callback function banaya "respond" naam ka fir arrow function lagaya jisme 2 value pass kari "request, response" dono userdefined hai ek request legi dusri response(output) degi.
const respond = (request, response) => {
    //yeh '/favicon.ico' yeh bar bar occur na ho isliye humne condition lagayi (request.url !== '/favicon.ico') kyunki yeh wesite icon dekhta hai apki site mai joh ki hai ni tohisko avoid krne ke liye condition lagayi.
    if(request.url !== '/favicon.ico'){
        
        //this will collect the request send by the user.
        console.log(request.url);
        
        // huumne "request.url" ko "url.parse "mai isliye dala kyuiki hum ek suljha hua output le sake and "true" isliye kiya taki query print kar sake,by default false hoti hai, and end mai "query" method isle call kiya taki query print hosake .
        const query = url.parse(request.url, true).query;
        console.log(query);
        
        //pathname ka bhi upar ki traha same hi hai, ek taha ki sorting karta hai yeh .
        const pathname = url.parse(request.url, true).pathname;  
        console.log(pathname);
// 
        //response.setHeader(header name, value)
        //ek tarike se response send karega jisme humne type define kiya or uski value baki agey dekhte hai or kya hai
        response.setHeader('Content-Type', 'text/plain');
        
        //writeHead(status code, {headers})
        //isme "200" ek tarike ka message send karega ki yaha pe sab technically thik hai,baki response send karega jisme humne type define kiya or uski value baki agey dekhte hai or kya hai
        response.writeHead(200, {'Content-Type': 'text/html'});
        
        //response.write sends the body to the response
        //isme hum output bejenge joh bhi hume browser pe dena hai.
        response.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>Node</title>
</head>
<body>`);
        response.write('<p>Node is fun!</p>');
//        console.log(car.make.toLowerCase());
        // humne "check" naam ka function expression banaya // joh function variable mai store hota hai usko function expression kehte hai chahey function kuch bhi ho uski value store variable mai hogi.
        const check = car => (query.make === undefined || query.make.toLowerCase() === car.make.toLowerCase()) &&
             //humne "car" namm ka local variable(element) liya function ke liye.
            //or "query" variable liya jismey user ki request hai uske according function banaya .
            //.tolowercase()joh bhi user query hogi usko lowercase karega.
    // ab check method check karega agar "make" undefined ya "make" milta hai kya "make" se toh car ki details print kardega, ase hi joh user ne request beji hai usme se joh bhi milega uske according print kardega ab chahe woh model ,year, make, ya min price joh bhi ho joh match kar gaya car ki information print kardega uske according.        
                (query.model === undefined || query.model.toLowerCase() === car.model.toLowerCase()) &&
                (query.year === undefined || query.year === car.year) &&
                (query.transmission === undefined || query.transmission.toLowerCase() === car.transmission.toLowerCase()) &&
                (query.minprice === undefined || parseInt(query.minprice) <= car.price) &&
                (query.maxprice === undefined || parseInt(query.maxprice) >= car.price);
        if(pathname === '/cars'){
            // joh pathname hai agar usme cars naam ki query cars se match kargyi tab hi condition age chalegi.
            //fir "cars" array ka "filter" method call krke apna "check" obk check karenge then response likhdenge uske according.
            cars.filter(check).forEach(car => {
                response.write(`
<hr>
<img src = '${car.url}' height='200' alt='car'>
<p>Make: ${car.make}</p>
<p>Model: ${car.model}</p>
<p>Year: ${car.year}</p>
<p>Transmission: ${car.transmission}</p>
<p>Price: $${car.price}</p>
`);
            });
            //make, model, year, transmission, minprice, maxprice
        }
        //is se yeh pata chalega response ka end kha karnahai.
        response.end(`</body>
</html>`);
    }

};

//create a server
const server = http.createServer(respond);
//server create krenge "http" humne import kiya tha ab usme method hai "createServer();" usko call karenge or uski parenthesis mai callback function pass karenge joh request lega server se or dega ex:"respond" respond namm user defined hai is naam ka call back function banaya hai humne joh pass kiya hai isme. or server naam ke variable mai store karenge.


//listen to user request
//without it you cannot able to make request.
server.listen(port, hostname, () => {console.log(`listening on port: ${port}, hostname: ${hostname}`)});

//"server" joh humne variable banaya hai usme "listen ()" method ko call krenge or uski parenthesis mai 3 argument pass karenge() first "port" joh ki end communication ki tarha use hoti hai, "hostname" jiske through device connect hongi computer se ,()=>{} arrow function console.log(); ko use krenege jisko output ke liye use karte hai isme port or hostname joh humne banye hai woh tempalate literal ka use karke pass krenge.