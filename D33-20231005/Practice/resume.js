let resume_details={};
let eachtmp={};
function input(ele,p_key){
    if (p_key){
        if(resume_details[p_key]){
            resume_details[p_key]={...resume_details[p_key]}
        }
        else{
            resume_details[p_key]={}
        }
        resume_details[p_key][ele.name]=ele.value
    }
    else{
        resume_details[ele.name]=ele.value
        // console.log(resume_details)

    }
    display()
    
}
function handleMul(p_key,ele_id,para){
    if(!resume_details[p_key]){
        resume_details[p_key] =[]
    }
    let element=document.getElementById(ele_id)
    if(element.value==""){
        alert("Enter First")
    }
    else{
        resume_details[p_key].push(element.value)  
    }
    element.value=""
    addskill(p_key,para)
    display()
}
function addskill(p_key,para){
    let data=resume_details[p_key]
    let htmldata=""
    for(let i=0;i<data.length;i++){
        htmldata=htmldata+`<span class="mt-2">
        ${data[i]}</span><button type="button" onclick="del('${p_key}','${data[i]}','${para}')" class=" mt-1 btn btn-danger close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>`
    }
    document.getElementById(para).innerHTML=htmldata

}

function display(){
    document.getElementById("display_data").innerHTML=JSON.stringify(resume_details,undefined,2)
}
function del(p_key,clo,para){
    console.log(clo)
    let data=resume_details[p_key]
    let newdata=[]
    for(i=0;i<data.length;i++){
        if(data[i]!=clo){
            newdata.push(data[i])
        }

    }
    resume_details[p_key]=newdata
    // console.log(newdata)
    addskill(p_key,para)
    display()
}
function handleMulArrData(ele){
    eachtmp[ele.name]=ele.value
    // console.log(eachtmp)
}
function handleMulArrObj(p_key){
    if(!resume_details[p_key]){
        resume_details[p_key] =[]
    }
    resume_details[p_key].push(eachtmp)
    let each=Object.keys(eachtmp)
    // console.log(each)
    for(i=0;i<each.length;i++){
        console.log(each[i])
        document.getElementById(each[i]).value=""
    }
    addobj(resume_details[p_key])
    eachtmp={}
    display()
}
function addobj(p_key){
    let data=""
    for(i=0;i<p_key.length;i++){
        // console.log(p_key[i])
        for (const key in p_key[i]){
            console.log(`${key}:${p_key[i][key]}`)
            data=data+`<tr>
            <td>${key}</td>
            <td>${p_key[i][key]}</td>
            <td><button type="button" onclick="tabledel('${p_key[i][key]}')" >&#128465</button></td>
            <tr>`
            // console.log(data)
            }
    }
    document.getElementById("table").innerHTML=data
}
function tabledel(){
 
}



