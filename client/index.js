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
    
    // const innerDiv2_input_edit=document.createElement("input");
    // const innerDiv2_editclick=document.createElement("div");
    // innerDiv2.appendChild(innerDiv2_input_edit);
    // innerDiv2.appendChild(innerDiv2_editclick);
    // innerDiv2_editclick.innerHTML="Edit";
    // innerDiv2_editclick.style.height="2rem"
    // innerDiv2_editclick.style.width="4rem"
    // innerDiv2_editclick.onclick=(()=>{editQuery(innerDiv2_input_edit.value , index);
    // })



         innerDiv2.appendChild(innerDiv2_query);
         innerDiv2_query.innerHTML = `
         <span style="font-size: x-large">Query - </span>
         <textarea readonly style="text-overflow: ellipsis;
           width: 98%;
           resize: none;
           appearance: none;
           outline: none;
           box-shadow: none;
           height: 76%;
           border: none;
           margin-top:10px;
           margin-bottom:5px;   ">${data.query}</textarea>
           <div style="
           margin-left: 1px;
    border-radius: 4px;
    padding: 3px;
    text-align: center;
    font-size: larger;
    border: 2px solid;
    width: 7rem;
    margin-top: 0rem;
">Edit query</div>
       `;

        
        //  innerDiv2_query.style.marginTop="1rem";
        innerDiv2_query.style.width="31rem";
         innerDiv2_query.style.height="21rem";
         innerDiv2_query.style.marginTop="1rem"
         innerDiv2_query.style.border="2px solid black"

         

         //solution
         //solution
         //solution
        innerDiv2.appendChild(innerDiv2_solution);
        innerDiv2_solution.innerHTML=`<div style="height: 2rem;
        font-size: x-large;
        text-align: center;
        background-color: ${color};
        color: white;"> Solution</div>`
        innerDiv2_solution.style.marginLeft="41rem";
        innerDiv2_solution.style.width="37.3rem";
        // innerDiv2_solution.style.border="2px solid black";
        innerDiv2_solution.style.height="21.3rem";
        innerDiv2_solution.style.marginTop="-21.2rem";
        innerDiv2_solution.style.overflowY="scroll"


         

        const innerDiv2_solution_general=document.createElement("div");
        const innerDiv2_solution_links=document.createElement("div");
        const innerDiv2_solution_images = document.createElement("div");
        const innerDiv2_solution_video = document.createElement("div");




        //general
        //general
        //general/general/general/general/general/general
        //general/general/general/general/general/general
        //general/general/general/general/general/general
        //general/general/general/general/general/general//general/general/general/general/general/general
        innerDiv2_solution.appendChild(innerDiv2_solution_general);
        innerDiv2_solution_general.innerHTML="General"
        innerDiv2_solution_general.style.border=`2px solid ${color}`
        innerDiv2_solution_general.style.marginTop="3px"
        innerDiv2_solution_general.style.fontSize="x-large"
        // innerDiv2_solution_general.style.paddingBottom="4px";
       

        //box of general addin
        //box of general addin
        const innerDiv2_solution_general_showGeneral = document.createElement("div");
        const innerDiv2_solution_general_addGeneral=document.createElement("div");
        const innerDiv2_solution_general_editGeneral = document.createElement("div");
          

        innerDiv2_solution_general.appendChild(innerDiv2_solution_general_showGeneral);
        innerDiv2_solution_general_showGeneral.innerHTML="Show";
        innerDiv2_solution_general_showGeneral.style.border="1px solid";
        innerDiv2_solution_general_showGeneral.style.width="3rem";
        innerDiv2_solution_general_showGeneral.style.marginLeft="25.7rem";
        innerDiv2_solution_general_showGeneral.style.fontSize="15px";
        innerDiv2_solution_general_showGeneral.style.marginTop="-24px";
        innerDiv2_solution_general_showGeneral.style.cursor="pointer";



   innerDiv2_solution_general.appendChild(innerDiv2_solution_general_addGeneral);
   innerDiv2_solution_general_addGeneral.innerHTML="Add";
   innerDiv2_solution_general_addGeneral.style.border="1px solid";
   innerDiv2_solution_general_addGeneral.style.width="3rem";
   innerDiv2_solution_general_addGeneral.style.marginLeft="29.3rem";
   innerDiv2_solution_general_addGeneral.style.fontSize="15px";
   innerDiv2_solution_general_addGeneral.style.marginTop="-18px";
   innerDiv2_solution_general_addGeneral.style.cursor="pointer";



   

   innerDiv2_solution_general.appendChild(innerDiv2_solution_general_editGeneral);
   innerDiv2_solution_general_editGeneral.innerHTML="Edit"
   innerDiv2_solution_general_editGeneral.style.border="1px solid";
   innerDiv2_solution_general_editGeneral.style.width="3rem";
   innerDiv2_solution_general_editGeneral.style.marginLeft="32.8rem";
   innerDiv2_solution_general_editGeneral.style.fontSize="15px";
   innerDiv2_solution_general_editGeneral.style.marginTop="-18.6px";
   innerDiv2_solution_general_editGeneral.style.cursor="pointer";

//Box Clicked
//Box Clicked
//Box Clicked

   const innerDiv2_solution_general_BoxClicked_save=document.createElement("div");
   
//    innerDiv2_solution_general_BoxClicked_save.style.display="none";
// 
   //show box of general
   //show box of general
        const innerDiv2_solution_general_showBox=document.createElement("div");
        innerDiv2_solution_general.appendChild(innerDiv2_solution_general_showBox);
        innerDiv2_solution_general_showBox.innerHTML=`${data.solutionGeneral}`
        innerDiv2_solution_general_showBox.style.border="2px solid";
        innerDiv2_solution_general_showBox.style.height="9rem";
        innerDiv2_solution_general_showBox.style.overflowY="scroll";
        innerDiv2_solution_general_showBox.style.fontSize="15px";
        // innerDiv2_solution_general_showBox.style.marginBottom="29px";
        innerDiv2_solution_general_showBox.style.display="none";
       
        innerDiv2_solution_general_showGeneral.onclick=()=>{
            innerDiv2_solution_general.appendChild(innerDiv2_solution_general_BoxClicked_save);

            innerDiv2_solution_general_BoxClicked_save.innerHTML="Close";
    innerDiv2_solution_general_BoxClicked_save.style.display="block";
    innerDiv2_solution_general_BoxClicked_save.style.padding="3px";
   innerDiv2_solution_general_BoxClicked_save.style.fontSize="15px";
   innerDiv2_solution_general_BoxClicked_save.style.width="3rem";
   innerDiv2_solution_general_BoxClicked_save.style.border="1px solid";
   innerDiv2_solution_general_BoxClicked_save.style.borderRadius="7px";
            
            innerDiv2_solution_general_addBox.style.display="none";
            innerDiv2_solution_general_editBox.style.display="none";
            if(innerDiv2_solution_general_showBox.style.display=="none"){
                innerDiv2_solution_general_showBox.style.display="block"
            }else{
                innerDiv2_solution_general_showBox.style.display="none";
            }
        }


        //add box of general
   //add box of general

   const innerDiv2_solution_general_addBox=document.createElement("textarea");
   innerDiv2_solution_general.appendChild(innerDiv2_solution_general_addBox);

   innerDiv2_solution_general_addBox.style.border="2px solid ";
   innerDiv2_solution_general_addBox.style.height="9rem";
   innerDiv2_solution_general_addBox.style.width="35.5rem";
   innerDiv2_solution_general_addBox.style.fontFamily="sans-sarif";
   innerDiv2_solution_general_addBox.style.display="none";
   innerDiv2_solution_general_addBox.style.overflowY="scroll";
   innerDiv2_solution_general_addBox.style.fontSize="15px";
        // innerDiv2_solution_general_addBox.style.marginBottom="29px";

        
   innerDiv2_solution_general_addGeneral.onclick=()=>{
    innerDiv2_solution_general.appendChild(innerDiv2_solution_general_BoxClicked_save);

    innerDiv2_solution_general_BoxClicked_save.innerHTML="Save";
    innerDiv2_solution_general_BoxClicked_save.style.display="block";
    innerDiv2_solution_general_BoxClicked_save.style.padding="3px";
   innerDiv2_solution_general_BoxClicked_save.style.fontSize="15px";
   innerDiv2_solution_general_BoxClicked_save.style.width="3rem";
   innerDiv2_solution_general_BoxClicked_save.style.border="1px solid";
   innerDiv2_solution_general_BoxClicked_save.style.borderRadius="7px";

   innerDiv2_solution_general_BoxClicked_save.onclick=()=>{
    let val= innerDiv2_solution_general_addBox.value;
    data.solutionGeneral=val;
fetchData();
   }
    innerDiv2_solution_general_showBox.style.display="none";
    innerDiv2_solution_general_editBox.style.display="none";

       if(innerDiv2_solution_general_addBox.style.display=="none"){
           innerDiv2_solution_general_addBox.style.display="block"
       }else{
           innerDiv2_solution_general_addBox.style.display="none";
       }
   }

   //edit box of general
   //wdit box of general
   const innerDiv2_solution_general_editBox=document.createElement("textarea");
   innerDiv2_solution_general.appendChild(innerDiv2_solution_general_editBox);
   innerDiv2_solution_general_editBox.innerHTML=`${data.solutionGeneral}`
   innerDiv2_solution_general_editBox.style.border="2px solid";
   innerDiv2_solution_general_editBox.style.height="9rem";
   innerDiv2_solution_general_editBox.style.display="none";
   innerDiv2_solution_general_editBox.style.width="35.5rem";
   innerDiv2_solution_general_editBox.style.fontFamily="sans-sarif";
   innerDiv2_solution_general_editBox.style.overflowY="scroll";
   innerDiv2_solution_general_editBox.style.fontSize="15px";

        // innerDiv2_solution_general_editBox.style.marginBottom="29px";
   
    
   innerDiv2_solution_general_editGeneral.onclick=()=>{
    innerDiv2_solution_general.appendChild(innerDiv2_solution_general_BoxClicked_save);

    innerDiv2_solution_general_BoxClicked_save.innerHTML=`Save`;
    innerDiv2_solution_general_BoxClicked_save.style.display="block";
    innerDiv2_solution_general_BoxClicked_save.style.padding="3px";
   innerDiv2_solution_general_BoxClicked_save.style.fontSize="15px";
   innerDiv2_solution_general_BoxClicked_save.style.width="3rem";
   innerDiv2_solution_general_BoxClicked_save.style.border="1px solid";
   innerDiv2_solution_general_BoxClicked_save.style.borderRadius="7px";
   
   innerDiv2_solution_general_BoxClicked_save.onclick=()=>{
    let val= innerDiv2_solution_general_editBox.value;
    data.solutionGeneral=val;
fetchData();
   }


    innerDiv2_solution_general_showBox.style.display="none";
    innerDiv2_solution_general_addBox.style.display="none";
       if(innerDiv2_solution_general_editBox.style.display=="none"){
           innerDiv2_solution_general_editBox.style.display="block"
       }else{
           innerDiv2_solution_general_editBox.style.display="none";
       }
   }







        //links
        //links
        //links //links //links //links//links//links
        //links//links//links//links//links//links//links//links
        //links//links//links//links//links//links
        //links//links//links//linksv
        //links//links//links
        innerDiv2_solution.appendChild(innerDiv2_solution_links);
        innerDiv2_solution_links.innerHTML="Links"
        innerDiv2_solution_links.style.border=`2px solid ${color}`
        innerDiv2_solution_links.style.marginTop="1rem"
        innerDiv2_solution_links.style.fontSize="x-large"
        innerDiv2_solution_links.style.height="2rem";

        const innerDiv2_solution_links_showlinks=document.createElement("div");

        const innerDiv2_solution_links_addlinks=document.createElement("div");
        const innerDiv2_solution_links_editlinks = document.createElement("div");
          

        innerDiv2_solution_links.appendChild(innerDiv2_solution_links_showlinks);
        innerDiv2_solution_links_showlinks.innerHTML="Show";
        innerDiv2_solution_links_showlinks.style.border="1px solid";
        innerDiv2_solution_links_showlinks.style.width="3rem";
        innerDiv2_solution_links_showlinks.style.marginLeft="25.7rem";
        innerDiv2_solution_links_showlinks.style.fontSize="15px";
        innerDiv2_solution_links_showlinks.style.marginTop="-24px";
        innerDiv2_solution_links_showlinks.style.cursor="pointer";


   innerDiv2_solution_links.appendChild(innerDiv2_solution_links_addlinks);
   innerDiv2_solution_links_addlinks.innerHTML="Add";
   innerDiv2_solution_links_addlinks.style.border="1px solid";
   innerDiv2_solution_links_addlinks.style.width="3rem";
   innerDiv2_solution_links_addlinks.style.marginLeft="29.3rem";
   innerDiv2_solution_links_addlinks.style.fontSize="15px";
   innerDiv2_solution_links_addlinks.style.marginTop="-21px";

   

   innerDiv2_solution_links.appendChild(innerDiv2_solution_links_editlinks);
   innerDiv2_solution_links_editlinks.innerHTML="Edit"
   innerDiv2_solution_links_editlinks.style.border="1px solid";
   innerDiv2_solution_links_editlinks.style.width="3rem";
   innerDiv2_solution_links_editlinks.style.marginLeft="32.8rem";
   innerDiv2_solution_links_editlinks.style.fontSize="15px";
   innerDiv2_solution_links_editlinks.style.marginTop="-19px";




   //images
   //images//images//images//images//images
   //images//images//images//images//images//imagesv
   //images//images//imagesv//images//images//images//images//images//images
   //images//images//images//images//images//images
   //images
        innerDiv2_solution.appendChild(innerDiv2_solution_images);
        innerDiv2_solution_images.innerHTML="Images"
        innerDiv2_solution_images.style.border=`2px solid ${color}`
        innerDiv2_solution_images.style.marginTop="1rem"
        innerDiv2_solution_images.style.fontSize="x-large"
        innerDiv2_solution_images.style.height="2rem";

         const innerDiv2_solution_images_showImages=document.createElement("div");
        const innerDiv2_solution_images_addImages=document.createElement("div");
        const innerDiv2_solution_images_editImages = document.createElement("div");
          
        innerDiv2_solution_images.appendChild(innerDiv2_solution_images_showImages);
        innerDiv2_solution_images_showImages.innerHTML="Show";
        innerDiv2_solution_images_showImages.style.border="1px solid";
        innerDiv2_solution_images_showImages.style.width="3rem";
        innerDiv2_solution_images_showImages.style.marginLeft="25.7rem";
        innerDiv2_solution_images_showImages.style.fontSize="15px";
        innerDiv2_solution_images_showImages.style.marginTop="-24px";
        innerDiv2_solution_images_showImages.style.cursor="pointer";


   innerDiv2_solution_images.appendChild(innerDiv2_solution_images_addImages);
   innerDiv2_solution_images_addImages.innerHTML="Add";
   innerDiv2_solution_images_addImages.style.border="1px solid";
   innerDiv2_solution_images_addImages.style.width="3rem";
   innerDiv2_solution_images_addImages.style.marginLeft="29.3rem";
   innerDiv2_solution_images_addImages.style.fontSize="15px";
   innerDiv2_solution_images_addImages.style.marginTop="-21px";

   

   innerDiv2_solution_images.appendChild(innerDiv2_solution_images_editImages);
   innerDiv2_solution_images_editImages.innerHTML="Edit"
   innerDiv2_solution_images_editImages.style.border="1px solid";
   innerDiv2_solution_images_editImages.style.width="3rem";
   innerDiv2_solution_images_editImages.style.marginLeft="32.8rem";
   innerDiv2_solution_images_editImages.style.fontSize="15px";
   innerDiv2_solution_images_editImages.style.marginTop="-19px";





   //video
   //video
   //video//video//video//video//video//video
   //video//video//video//video
   //video//video//video//video
   //video//video
   //video//video//video//video
   //video//video//video//video//video//video

        innerDiv2_solution.appendChild(innerDiv2_solution_video);
        innerDiv2_solution_video.innerHTML="Video"
        innerDiv2_solution_video.style.border=`2px solid ${color}`
        innerDiv2_solution_video.style.marginTop="1rem"
        innerDiv2_solution_video.style.fontSize="x-large"
        innerDiv2_solution_video.style.height="2rem";
        const innerDiv2_solution_video_showVideo = document.createElement("div");
        const innerDiv2_solution_video_addVideo=document.createElement("div");
        const innerDiv2_solution_video_editVideo = document.createElement("div");
          

        innerDiv2_solution_video.appendChild(innerDiv2_solution_video_showVideo);
        innerDiv2_solution_video_showVideo.innerHTML="Show";
        innerDiv2_solution_video_showVideo.style.border="1px solid";
        innerDiv2_solution_video_showVideo.style.width="3rem";
        innerDiv2_solution_video_showVideo.style.marginLeft="25.7rem";
        innerDiv2_solution_video_showVideo.style.fontSize="15px";
        innerDiv2_solution_video_showVideo.style.marginTop="-24px";
        innerDiv2_solution_video_showVideo.style.cursor="pointer";


   innerDiv2_solution_video.appendChild(innerDiv2_solution_video_addVideo);
   innerDiv2_solution_video_addVideo.innerHTML="Add";
   innerDiv2_solution_video_addVideo.style.border="1px solid";
   innerDiv2_solution_video_addVideo.style.width="3rem";
   innerDiv2_solution_video_addVideo.style.marginLeft="29.3rem";
   innerDiv2_solution_video_addVideo.style.fontSize="15px";
   innerDiv2_solution_video_addVideo.style.marginTop="-21px";

   

   innerDiv2_solution_video.appendChild(innerDiv2_solution_video_editVideo);
   innerDiv2_solution_video_editVideo.innerHTML="Edit"
   innerDiv2_solution_video_editVideo.style.border="1px solid";
   innerDiv2_solution_video_editVideo.style.width="3rem";
   innerDiv2_solution_video_editVideo.style.marginLeft="32.8rem";
   innerDiv2_solution_video_editVideo.style.fontSize="15px";
   innerDiv2_solution_video_editVideo.style.marginTop="-19px";






    
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
        tags:e.target.add_query_container_rightPart_tagsTitle_name.value,
        solutionGeneral:"general solution",
        solutionLinks:[
            "first link",
            "second link",
        ],
        solutionImages:[
               "first image",
               "second image"
        ],
        solutionVideo:[
            "first video",
            "second video"
        ]

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
