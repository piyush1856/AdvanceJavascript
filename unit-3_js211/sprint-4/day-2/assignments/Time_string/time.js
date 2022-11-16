let timeCon=(millisecond)=>{
    // let millisecond=5000;
    let result;
    let hour;
    let min;
    let sec;
    if(millisecond>=60000 && millisecond<3600000 ){
        // result=new Date(millisecond).toISOString().slice(14, 19);
        // return `${result} Minutes`

        // hour=new Date(millisecond).toISOString().slice(11, 13);
        min=new Date(millisecond).toISOString().slice(14, 16);                                               
        sec=new Date(millisecond).toISOString().slice(17, 19);
        
        return `${min} Minutes ${sec} Seconds`

    }else if (millisecond<60000){
        // result=new Date(millisecond).toISOString().slice(17, 19);
        // // console.log(`${result} seconds`)
        // return `${result} Seconds`

        // hour=new Date(millisecond).toISOString().slice(11, 13);
        // min=new Date(millisecond).toISOString().slice(14, 16);
        sec=new Date(millisecond).toISOString().slice(17, 19);
        
        return `${sec} Seconds`


    }else if(millisecond>=3600000){
        hour=new Date(millisecond).toISOString().slice(11, 13);
        min=new Date(millisecond).toISOString().slice(14, 16);
        sec=new Date(millisecond).toISOString().slice(17, 19);
        
        return `${hour} Hours ${min} Minutes ${sec} Seconds`
    }

    // let result=new Date(millisecond).toISOString().slice(11, 19);
    // console.log(result)
}

export default timeCon;