/*let count = 1

while (count<10) {
    console.log(`While ${count}`)
    count++
}

count = 1

do {
    console.log(`Do ${count}`)
    count++
} while (count<10);

for (let index = 1; index < 10; index++) {
    console.log(`For ${index}`)   
}
*/

function formatDate(/**@type {String} */ userDate){
    var novaData
    var year
    var month
    var day

    day = userDate.slice(0, userDate.indexOf('/')) 
    novaData = userDate.slice(userDate.indexOf('/')+1, 999 ) 
    month  = novaData.slice(0, novaData.indexOf('/')) 
    novaData = novaData.slice(novaData.indexOf('/')+1, 999 ) 
    year  = novaData.slice(0, 9999) 

    if(month.length == 1){
        month = 0+month
    }

    if(day.length == 1){
        day = 0+day
    }
    
    return year+month+day
  }
  
  console.log(formatDate("2/1/2014"));