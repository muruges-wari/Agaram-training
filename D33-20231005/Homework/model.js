let resume_details={};
let temp={};
function input(ele,p_key){
    if(p_key){
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
    }
    display()
}
function display(){
    document.getElementById("display_data").innerHTML=JSON.stringify(resume_details,undefined,2)
}
function handleMulArr(p_key,ele_id,para){
    if(!resume_details[p_key]){
        resume_details[p_key]=[]
    }
    element=document.getElementById(ele_id)
    if(element.value==""){
        alert("enter first")
    }
    else{
        resume_details[p_key].push(element.value)
    }
    element.value=""
    display()
    displayskill(p_key,para)
}
function displayskill(p_key,para){
    let data=resume_details[p_key]
    let htmldata=""
    for(i=0;i<data.length;i++){
        htmldata=htmldata+`<span>${data[i]}</span>
        <button type="button" onclick="delArr('${p_key}','${data[i]}','${para}')">&times;</button>`
    }
    document.getElementById(para).innerHTML=htmldata
}
function delArr(p_key,ele,para){
    let data=resume_details[p_key];
    let deldata=[];
    for(i=0;i<data.length;i++){
        if(data[i]!=ele){
            deldata.push(data[i])
        }
    }
    resume_details[p_key]=deldata
    displayskill(p_key,para)
    display()
}
function handleMulObj(ele){
    temp[ele.name]=ele.value
    console.log(temp)
}
function handleMulObjData(p_key){
    if(!resume_details[p_key]){
        resume_details[p_key]=[]
    }
    resume_details[p_key].push(temp)
    display()
    each=Object.keys(temp)
    for(i=0;i<each.length;i++){
        document.getElementById(each[i]).value=""
    }
    addobj(resume_details[p_key])
    temp={}
}
function addobj(p_key){
    let html="";
    for(i=0;i<p_key.length;i++){
        for(const key in p_key[i]){
            html=html+`<tr>
            <td>${key}</td>
            <td>${p_key[i][key]}</td>
            <td><button type="button" onclick"">&times;</button></td>
            </tr>`
        }

        }
        document.getElementById("distable").innerHTML=html
}
