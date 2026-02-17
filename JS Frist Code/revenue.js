
function chaiRevenue(customers){
    if(customers==!Number.isInteger || customers<0){
        return {customers: 0, revenue: 0}
    }
    let revenue=0
    //console.log(customers)
    for(let i=0; i<=customers; i++){
        if(i%3==0){
            // console.log(i)
           revenue+=15;
           // console.log("first" + revenue)
        }
        else{
            // console.log(i)
           revenue+=10;
           // console.log("second" + revenue)
        }
    }
    return{Totalchai:customers, TotalRevenue:revenue}   
}
console.log(chaiRevenue(15));
