let calulator=(income)=>{
    // let income=2300000;

    if(income<250000){

        income=0

    }
    else if(income>=250000 && income<=500000){
        income=income*(10/100)
    }
    else if(income>500000 && income<=1000000){
        income=income*(20/100)
    }
    else if(income>1000000){
        income=income*(30/100)
    }

     

    // console.log(income)
    return income;
}

// calulator()

export default calulator;