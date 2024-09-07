let credit=new Map();
credit.set("O",10);
credit.set("A+",9);
credit.set("A",8);
credit.set("B+",7);
credit.set("B",6);
credit.set("C",5); 
document.querySelector("#calbutton").addEventListener("click",(e)=>{
    // console.log(document.querySelector('.cgpainput').value);
    let select=document.getElementsByName("grade");
    let check=false;
    for(let temp of select){
        if(temp.value=="none"){
            check=true;
        }
    }
    if(check){
        alert("Enter valid grade and CGPA");
    }
    else{
        let pcgpa=parseFloat(document.getElementsByName("pcgpa")[0].value);
        let pcredit=107
        let ncredit=24;
        let fea=credit.get(select[0].value)*4;
        let dmts=credit.get(select[1].value)*4;
        let hmt=credit.get(select[2].value)*3;
        let pe1=credit.get(select[3].value)*3;
        let pe2=credit.get(select[4].value)*3;
        let oe=credit.get(select[5].value)*3;
        let alab=credit.get(select[6].value)*2;
        let hmtlab=credit.get(select[7].value)*2;
        let sgpa=((fea+dmts+hmt+pe1+pe2+oe+alab+hmtlab)/ncredit).toFixed(2);
       // console.log(fea+" "+dmts+" "+hmt+" "+pe1+" "+pe2+" "+oe+" "+alab+" "+hmtlab);
        console.log("scgpa= "+sgpa);
        let cgpa=(pcgpa*pcredit)+(sgpa*ncredit)
        cgpa=(cgpa/(pcredit+ncredit)).toFixed(2);
        console.log("cgpa= "+cgpa);
        document.querySelector(".sgpavalue").innerHTML=sgpa;
        document.querySelector(".cgpavalue").innerHTML=cgpa;
        document.querySelector(".overlay").classList.toggle("active");
    }
})

document.querySelector("#again").addEventListener("click",(e)=>{
    document.querySelector(".overlay").classList.toggle("active");
})