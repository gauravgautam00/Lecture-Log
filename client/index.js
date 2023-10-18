const arr=[];
const main_data_container = document.getElementById("stored_data_container");
// <!-- //470 right -->
const add_query_form = document.getElementById("add_query_form");
const add_student_form_input_studentName = document.getElementById("add_student_form_input_studentName");
const add_student_form_input_doubtTitle = document.getElementById("add_student_form_input_doubt");
const add_query_container_rightPart_queryBoxTextarea=document.getElementById("add_query_container_rightPart_queryBoxTextarea");
const add_query_container_rightPart_tagsInput=document.getElementById("add_query_container_rightPart_tagsInput");
// groups
const add_student_left_form_groupA=document.getElementById("add_student_left_form_groupA");
const add_student_left_form_groupB=document.getElementById("add_student_left_form_groupB");

// preferences
const add_Student_left_form_preferences_red=document.getElementById("add_Student_left_form_preferences_red");
const add_Student_left_form_preferences_yellow=document.getElementById("add_Student_left_form_preferences_yellow");
const add_Student_left_form_preferences_blue=document.getElementById("add_Student_left_form_preferences_blue");

const main_container_queryAdd_button =document.getElementById("main_container_queryAdd_button");
const main_container_queryView_button =document.getElementById("main_container_queryView_button");

const lll=document.getElementById("lll");




let group=0;
let prefer=0;

add_student_left_form_groupA.onclick=()=>{
    group=1;
}
add_student_left_form_groupB.onclick=()=>{
    group=2;
}
add_Student_left_form_preferences_red.onclick=()=>{
    prefer=1;
}
add_Student_left_form_preferences_yellow.onclick=()=>{
prefer=2;
}
add_Student_left_form_preferences_blue.onclick=()=>{
    prefer=3;
}




main_container_queryAdd_button.onclick=(e)=>{
    window.scrollTo({
        top:650,
        behavior:'smooth'
    });
}

main_container_queryView_button.onclick=(e)=>{
    window.scrollTo({
        top:1280,
        behavior:'smooth'
    });
}




const fetchData=()=>{
    main_data_container.innerHTML="";  
    arr.map((data,index)=>{
        const div = document.createElement("div");
        let color=data.preferences==="urgent"?"red":(data.preferences=="research-required"?"#f8b800":"blue");
        console.log(data.preferences)
if(data.preferences===""){
    color="black"
}
        main_data_container.appendChild(div);
        div.style.border=`4px solid ${color}`;
        div.style.marginTop="1rem"; 
        // div.style.marginTop="3rem";
         const innerDiv1=document.createElement("div");
         const innerDiv2 = document.createElement("div");
    
     
         div.appendChild(innerDiv1);
         innerDiv1.style.marginTop="1rem";
         innerDiv1.style.height="4rem";
        //  innerDiv1.style.border="2px solid black";
    
//first div
//first div         
         const innerDiv1_studentName = document.createElement("div");
         const innerDiv1_group = document.createElement("div");
         const innerDiv1_complete = document.createElement("div");
         const innerDiv1_progress = document.createElement("div");
         const innerDiv1_delete = document.createElement("div");


          
         innerDiv1.appendChild(innerDiv1_studentName);
         innerDiv1_studentName.innerHTML=` ${data.nameOfStudent} `
         innerDiv1_studentName.style.textAlign="center";
         innerDiv1_studentName.style.fontSize="xx-large";
         innerDiv1_studentName.style.width="53rem";
         innerDiv1_studentName.style.marginLeft="13rem";

         innerDiv1.appendChild(innerDiv1_group);
         innerDiv1_group.innerHTML=`Group No.  ${data.groupNo}`
        innerDiv1_group.style.textAlign="center";
        innerDiv1_group.style.color="gray";
        innerDiv1_group.style.width="53rem";
        innerDiv1_group.style.marginLeft="13rem";
          
        innerDiv1.appendChild(innerDiv1_complete);
         innerDiv1_complete.innerHTML=`Mark as  Completed`
         innerDiv1_complete.style.textAlign = "center";
         innerDiv1_complete.style.width = "10rem";
         innerDiv1_complete.style.padding = "5px";
         innerDiv1_complete.style.marginTop = "-4rem";
         innerDiv1_complete.style.border = `2px solid teal`;
         innerDiv1_complete.style.borderRadius = "5px";
         innerDiv1_complete.style.backgroundColor = "green";
         innerDiv1_complete.style.color = "white";
         innerDiv1_complete.style.fontSize="large"
        
         

        innerDiv1.appendChild(innerDiv1_progress);
         innerDiv1_progress.innerHTML=`Mark as IN Progress`
         innerDiv1_progress.style.textAlign = "center";
         innerDiv1_progress.style.border = `2px solid green`;
         innerDiv1_progress.style.width = "10rem";
         innerDiv1_progress.style.padding = "5px";
         innerDiv1_progress.style.borderRadius = "5px";
         innerDiv1_progress.style.marginTop = "10px";
         innerDiv1_progress.style.backgroundColor = "teal";
         innerDiv1_progress.style.color = "white";
         innerDiv1_progress.style.fontSize="large"
         

        innerDiv1.appendChild(innerDiv1_delete);
        innerDiv1_delete.innerHTML="Delete Query"
        innerDiv1_delete.style.fontSize = "large";
innerDiv1_delete.style.padding = "9px";
innerDiv1_delete.style.marginTop = "-4.4rem";
innerDiv1_delete.style.border = `2px solid black`;
innerDiv1_delete.style.borderRadius = "5px";
innerDiv1_delete.style.width = "8rem";
innerDiv1_delete.style.marginLeft = "69rem";
innerDiv1_delete.style.textAlign = "center";
innerDiv1_delete.style.backgroundColor="red";
innerDiv1_delete.style.color="white";






//Second div
//SEcond div

const innerDiv2_doubtTitle = document.createElement("div");
const innerDiv2_query = document.createElement("div");
const innerDiv2_solution = document.createElement("div");

         div.appendChild(innerDiv2);
         innerDiv2.style.marginTop="2rem";



         innerDiv2.style.border=`2px solid ${color}`;
         innerDiv2.style.height="24.3rem";
         
         innerDiv2.appendChild(innerDiv2_doubtTitle);
         innerDiv2_doubtTitle.innerHTML=`Title - ${data.titleOfDoubt}`
         innerDiv2_doubtTitle.style.marginTop="8px";
         innerDiv2_doubtTitle.style.fontSize="large";
        //  innerDiv2_doubtTitle.style.marginTop="1rem";
    
    const innerDiv2_inputedit=document.createElement("input");
    const innerDiv2_editclick=document.createElement("div");
    innerDiv2.appendChild(innerDiv2_inputedit);
    innerDiv2.appendChild(innerDiv2_editclick);
    innerDiv2_editclick.innerHTML="EDit";
    innerDiv2_editclick.style.height="2rem"
    innerDiv2_editclick.style.width="4rem"
    innerDiv2_editclick.onclick=(()=>{editQuery(innerDiv2_inputedit.value , index);
    })



         innerDiv2.appendChild(innerDiv2_query);
         innerDiv2_query.innerHTML = `
         <span style="font-size: x-large">Query - </span>
         <textarea readonly style="text-overflow: ellipsis;
           width: 98%;
           resize: none;
           appearance: none;
           outline: none;
           box-shadow: none;
           height: 89%;
           border: none;">${data.query}</textarea>
       `;
        
        //  innerDiv2_query.style.marginTop="1rem";
        innerDiv2_query.style.width="31rem";
         innerDiv2_query.style.height="18rem";
         innerDiv2_query.style.marginTop="1rem"
         innerDiv2_query.style.border="2px solid black"

         
        innerDiv2.appendChild(innerDiv2_solution);
        innerDiv2_solution.innerHTML=`<div style="height: 2rem;
        font-size: x-large;
        text-align: center;
        background-color: ${color};
        color: white;"> Solution</div>`
        innerDiv2_solution.style.marginLeft="41rem";
        innerDiv2_solution.style.width="37.3rem";
        innerDiv2_solution.style.border="2px solid black";
        innerDiv2_solution.style.height="21rem";
        innerDiv2_solution.style.marginTop="-21.2rem";


         
    
         //inner div2
         //inner div2
         //inner div2
    
         
         
    })
}
add_query_form.onsubmit=(e)=>{
    // console.log(e);
    console.log("ll");
    e.preventDefault();
   
    const obj={
        groupNo:group===1?"A":group===2?"B":"",
        nameOfStudent:e.target.add_student_left_form_input_studentName_name.value,
        titleOfDoubt:e.target.add_student_left_form_input_doubtTitle_name.value,
        preferences:prefer==1?"urgent":prefer==2?"research-required":prefer==0?"":"to-do",
        query:e.target.add_query_container_rightPart_queryBoxTextarea_name.value,
        tags:e.target.add_query_container_rightPart_tagsTitle_name.value

    }
    // console.log(add_student_form_input_studentName)

    arr.push(obj);
    console.log(arr);
   
fetchData();

    }


//edit query
//edit query//edit query
   //edit query
//edit query

const editQuery=(value , index)=>{
console.log("value" , value , "index" , index);
}
