const main_data_container = document.getElementById("main_data_container");
// <!-- //470 right -->
const add_student_form = document.getElementById("add_student_form");
const add_student_form_input_studentName = document.getElementById("add_student_form_input_studentName");
const add_student_form_input_doubt = document.getElementById("add_student_form_input_doubt");
const add_student_form_input_extra = document.getElementById("add_student_form_input_extra");
const main_container_queryAdd_button =document.getElementById("main_container_queryAdd_button");
const main_container_queryView_button =document.getElementById("main_container_queryView_button");


main_container_queryAdd_button.onclick=(e)=>{
    window.scrollTo({
        top:620,
        behavior:'smooth'
    });
}

main_container_queryView_button.onclick=(e)=>{
    window.scrollTo({
        top:1280,
        behavior:'smooth'
    });
}

add_student_form.onsubmit=(e)=>{
    e.preventDefault();


    const div = document.createElement("div");
    main_data_container.appendChild(div);
    div.style.border="2px solid red";
     const innerDiv1=document.createElement("div");
     const innerDiv2 = document.createElement("div");

 
     div.appendChild(innerDiv1);
     innerDiv1.style.marginTop="1rem";
     innerDiv1.style.border="2px solid grey";

     const innerDiv1_studentName = document.createElement("div");
     const innerDiv1_doubt = document.createElement("div");
     const innerDiv1_extra = document.createElement("div");

     innerDiv1.appendChild(innerDiv1_studentName);
     innerDiv1_studentName.innerHTML=`<h4>Student Name</h4>  ${add_student_form_input_studentName.value}`
     innerDiv1_studentName.style.marginTop="1rem";

     
     innerDiv1.appendChild(innerDiv1_doubt);
     innerDiv1_doubt.innerHTML=`<h4> Doubt</h4>  ${add_student_form_input_doubt.value}`
     innerDiv1_doubt.style.marginTop="1rem";



     innerDiv1.appendChild(innerDiv1_extra);
     innerDiv1_extra.innerHTML=`<h4>Extra Details</h4>  ${add_student_form_input_extra.value}`
     innerDiv1_extra.style.marginTop="1rem";



     //inner div2
     //inner div2
     //inner div2

     div.appendChild(innerDiv2);
     innerDiv2.style.marginTop="1rem";
     innerDiv2.style.border="2px solid grey";
     



    }