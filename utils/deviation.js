const deviation=(data)=>{
    var average=averageFn(data);
    var numerator=0;
    for(let i=0;i<data.length;i++){        
        numerator=numerator+Math.pow((data[i].price-average),2);
    }    
    return Math.sqrt(numerator/data.length)
}

const averageFn=(data)=>{
    var ans=0;
    for(let i=0;i<data.length;i++){
        ans+=data[i].price
    }
    return ans/data.length;
}

module.exports=deviation