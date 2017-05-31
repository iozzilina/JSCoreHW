// Write a JS function to print a math multiplication table of size n, formatted as HTML table.
// The input comes as a single number n (0 < n < 100).
// The output consists of n+3 text lines like shown below.

//<table border="1">
//  <tr><th>x</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
//  <tr><th>1</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
//  <tr><th>2</th><td>2</td><td>4</td><td>6</td><td>8</td><td>10</td></tr>
//  <tr><th>3</th><td>3</td><td>6</td><td>9</td><td>12</td><td>15</td></tr>
//  <tr><th>4</th><td>4</td><td>8</td><td>12</td><td>16</td><td>20</td></tr>
//  <tr><th>5</th><td>5</td><td>10</td><td>15</td><td>20</td><td>25</td></tr>
//</table>

function multiply(n){

    let html = '<table border = "1">\n';

    //print header row
    html+='<tr>';
    html+='<th>x</th>';
    for (var i = 1; i <= n; i++) {
         html+=`<th>${i}</th>`;
    }
    html+='</tr>\n';


    for (var row = 1; row <= n; row++) {
        html+='<tr>';
        html+=`<th>${row}</th>`;
        for (var col = 1; col <=n; col++) {

            html+=`<td>${col*row}</td>`;
        } 
        html+='</tr>\n';
    }

    html+='</table>';
    return html;
}

multiply(3);