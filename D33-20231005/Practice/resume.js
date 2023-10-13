let resume_details={};
let eachtmp={};
let username="Murugeswari";
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
        element.focus()
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
    addobj(resume_details[p_key],p_key)
    // console.log(resume_details[p_key])
    // console.log(p_key)
    let each=Object.keys(eachtmp)
    // console.log(each)
    for(i=0;i<each.length;i++){
        console.log(each[i])
        document.getElementById(each[i]).value=""
    }
  
    eachtmp={}
    display()
}
function addobj(p_key,p_data){
    console.log(p_key)
    console.log(p_data)

    let data=""
    for(i=0;i<p_key.length;i++){
        console.log(p_key)
        let tddata=""
        for (const key in p_key[i]){
            console.log
            // console.log(`${key}:${p_key[i][key]}`)
            tddata=tddata+`
            <td>${p_key[i][key]}</td>
            `
            // console.log(data)
            }
            data=data+`<tr>`+tddata+`<td><button type="button" onclick="tabledel('${i}','${p_data}')">&times;</button></td>`+`</tr>`
            console.log(p_key[i])

        }
    document.getElementById(p_data).innerHTML=data

}
function tabledel(delid,p_data){
    console.log(delid)
    console.log(p_data)
    let data=resume_details[p_data];
    console.log(data)
    let dele=[]
    for(let i=0;i<data.length;i++){
        console.log(i)
        if(i!=delid){
            console.log(data[i])
            dele.push(data[i])
            // console.log(data)
        }
    }
    resume_details[p_data]=dele
    addobj(resume_details[p_data],p_data)
    display()
}

function datasave(){
    $.ajax(
        {
            type: "POST",
            url: "http://agaram.academy/api/action.php",
            data: {
                request : "create_resume",
                user : username,
                resume:resume_details
            },
                success: function (response) {
                    console.log('response', response)
                    window.location="list.html"
                
            },
                error: function (err) {
                    console.log('error', err)
            }
        }
    )
   
}
function getdata(){
    $.ajax(
        {
            type: "GET",
            url: "http://agaram.academy/api/action.php",
            data: {
                request : "get_user_resume",
                user : username,
            },
            success: function (response) {
                let res = JSON.parse(response)
                let dat=res.data;
                let tabledata = ""
                for(i=0;i<dat.length;i++){
                    tabledata=tabledata+`<tr>
                    <td>${dat[i].id}</td>
                    <td>${dat[i].user}</td>
                    <td><button type="button" class="btn btn-danger" onclick="deletedata('${dat[i].id}')">&times</button></td>
                    <td><a href="file:///home/murugeswari/AGARAM/D33-20231005/Practice/single1.html?id=${dat[i].id}">link</a></td>
                    </tr>`
                }
                $('#t_body').html(tabledata)
            },
            error: function (err) {
                console.log('error', err)
            }
        }
    )
}
function deletedata(userid){
    $.ajax(
        {
            type: "GET",
            url: "http://agaram.academy/api/action.php",
            data: {
                request : "delete_user_resume",
                user : username,
                id:userid
            },
            success: function (response) {
                let dat=JSON.parse(response)
                console.log('response',dat)
                
            },
            error: function (err) {
                console.log('error', err)
            }
        }
    
    )
    getdata()
}
function getiddata(id){
    $.ajax(
        {
            type: "GET",
            url: "http://agaram.academy/api/action.php",
            data: {
                request : "get_resume_by_id",
                user : username,
                id:id
            },
            success: function (response) {
                // console.log(response)
                let res=JSON.parse(response);
                // console.log(res.data.data)
                let dat=res.data;
                let datas=JSON.parse(dat.data)
                // console.log(datas)
                $('#name').html(datas.name)
                $('#email').html(datas.email)
                $('#address').html(datas.address)
                $('#contactNumber').html(datas.mob_no)
                $('#date').html(datas.date)
                $('#objective').html(datas.objective)
                $('#declaration').html(datas.declaration)
                $('#sign').html(datas.name)

                let skills=datas.skills;
                let ski=""
                for(let i=0;i<skills.length;i++){
                    ski=ski+`
                    <li>${skills[i]}</li>
                    `
                    console.log(skills)
                }
                $('#skill').html(ski)
                let languages=datas.languages;
                let lan=""
                for(let i=0;i<languages.length;i++){
                    lan=lan+`
                    <li>${languages[i]}</li>
                    `
                }
                $('#language').html(lan)
                let projects=datas.projects;
                let pro=""
                for(let i=0;i<projects.length;i++){
                    pro=pro+`
                    <li>${projects[i]}</li>
                    `
                }
                $('#project').html(pro)
                let educational=datas.educational;
                let edu=""
                for(let i=0;i<educational.length;i++){
                    edu=edu+`<tr>
                    <td>${educational[i].ins_level}</td>
                    <td>${educational[i].ins_name}</td>
                    <td>${educational[i].ins_year}</td>
                    <td>${educational[i].ins_percentage}</td>
                    </tr>`
                    console.log(educational)
                }
                $('#education').html(edu)
                let personal=datas.personal_details;
                console.log(personal.father_name)
                $('#fatherName').html(personal.father_name)
                $('#motherName').html(personal.mother_name)
                $('#gender').html(personal.gender)
                $('#dob').html(personal.dob)

            },
            error: function (err) {
                console.log('error', err)
            }
        }
    )
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
function generatePDF(){
    const page=document.getElementById("total")
    var opt={
        margin:1,
        filename:'Demopdf.pdf',
        image:{type:'jpeg',quality:0.98,},
        html2canvas:{scale:2},
        jsPDF:{unit:'in',format:'letter',orientation:'portrait'}
    };
    html2pdf().set(opt).from(page).save();

}


