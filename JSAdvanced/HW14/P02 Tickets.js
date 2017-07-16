/* 
Write a JS program that manages a database of tickets. A ticket has a destination, a price and a status. 
Your program will receive two argument – the first is an array of strings for ticket descriptions and the second is a string, 
representing a sorting criteria. The ticket descriptions have the following format:
<destinationName>|<price>|<status>
Store each ticket and at the end of execution return a sorted summary of all tickets, 
sorted by either destination, price or status, depending on the second parameter that your program received.
Always sort in ascending order (default behavior for alphabetical sort). 
If two tickets compare the same, use order of appearance. See the examples for more information.

Input
Your program will receive two parameters – an array of strings and a single string.

Output
Return a sorted array of all the tickets that where registered.

Sample Input
['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination'

Output Array
[ Ticket { destination: 'Boston',
    price: 126.20,
    status: 'departed' }, 
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'available' }, 
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'sold' }, 
  Ticket { destination: 'Philadelphia',
    price: 94.20,
    status: 'available' } ]

Sample Input
['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'status'

Output Array
[ Ticket { destination: 'Philadelphia',
    price: 94.20,
    status: 'available' },
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'available' },
  Ticket { destination: 'Boston',
    price: 126.20,
    status: 'departed' },
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'sold' } ]

 */


function getTickets(arr,sortOrder){

   class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=Number(price);
            this.status=status;
        }
   }

   let tickets = [];

   for(let data of arr){
       console.log(data);
       let tokens = data.split('|');
       tickets.push(new Ticket(tokens[0],tokens[1],tokens[2]));
   }

   return tickets.sort((a,b)=>a[sortOrder]>b[sortOrder]);
   
}



console.log(getTickets(['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'price'
));

