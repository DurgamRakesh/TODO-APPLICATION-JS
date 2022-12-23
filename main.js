// this is main button to give the popup

let addbtn = document.getElementById('iconid');



// main button click to open popup card function
//<-------------------------------------------------main button function popupbox_blur() start----------------------------------------------->

function popupbox_blur()  {
    console.log('popup1 working!');
    let bodyc = document.getElementsByTagName('body')[0];
    //creating new element name div
    let main_div = document.createElement('div');
    main_div.innerHTML = bodyc.innerHTML
    main_div.style.filter = 'blur(3px)';
    bodyc.innerHTML = " ";
    //adding new created element to body
    bodyc.append(main_div);
    //creating new element inside main_div name div
    let new_div = document.createElement('div');
    new_div.className = 'new-div';
    new_div.innerHTML = `<h1 id="tasktag">Add New List</h1>
                            <div><input id="input" class="input-class" type="text" placeholder="Enter List..."></div>
                            <div id="btns">
                                <div><button onclick="addtask()" id="addbtn">Add</button></div>
                                <div><button onclick="remove_pop()" id="cancelbtn">Cancel</button></div>
                            </div>`;


   bodyc.append(new_div);

}

//<-------------------------------------------------main button function popupbox_blur() end----------------------------------------------->




//creating new empty arr for storing each box inside main_id
const arrof_taskcards =[];
let itm_c = 0;
let count = 1;

//<-------------------------------------------------popup button add function addtask() start----------------------------------------------->

let addtask =  () => {
    console.log('add task woring!');
    let inputtext = document.querySelector('#input').value;
    let addtaskbtn = document.querySelector('#addbtn');
    let notask = document.querySelector('#notask')

    //creating new obj for create unique number each time when click add button
    const storing_obj ={
        id: Date.now(),
        task_card_name :inputtext
    }
    //if input value is empty it will give alert else create new box
    if(inputtext == 0){
        alert('Hi Buddy Please Enter Input List Name!!')
    }
    else{
        console.log(storing_obj)
    arrof_taskcards.push(storing_obj);
    console.log(arrof_taskcards);

    notask.style.display = 'none';
    let main_container = document.getElementById('main-id')
    //adding innerHTML for main_id
    main_container.innerHTML +=`<div  id=${itm_c} class="boxes">
                                            <span class="box-heading" id="inid" onclick="nextpage_hidden(this)" >${inputtext}</span>
                                            <hr>
                                            <ol class="list-name" id="name-id${itm_c}"></ol>
                                            <i class="fa-solid fa-circle-plus del" id="add-btn${itm_c++}" onclick="popupbox_blur2(); eachboxtask(event)"></i>
                                            <i class="fa-solid fa-trash-can" onclick="remove_box(this)"></i>
                                          </div>`
      let bodyc = document.getElementsByTagName('body')[0];
      let main_div = document.getElementsByTagName('div')[0];
    
      //adding card to main body
     bodyc.innerHTML = main_div.innerHTML

    }
    
}

//<-------------------------------------------------popup button add function addtask() end----------------------------------------------->





// inside card plus button click to open popup2 card function
//<-------------------------------------------------inside card plus button function popupbox_blur2() start----------------------------------------------->
function popupbox_blur2()  {
    console.log('popup2 working!');
    let bodyc = document.getElementsByTagName('body')[0];
    let main_div = document.createElement('div');
    main_div.innerHTML = bodyc.innerHTML;
    main_div.style.filter = 'blur(3px)';
    bodyc.innerHTML = " ";
    bodyc.append(main_div);
    //creating popup2 for add new item 
    let new_div = document.createElement('div');
    new_div.className = 'new-div';
    new_div.innerHTML = `<h1 id="tasktag">Add New Item</h1>
                            <div><input id="input_item" class="input-class" type="text" placeholder="Enter Item.."></div>
                            <div id="btns">
                                <div><button onclick="addnew_taskname()" id="addbtn">Add</button></div>
                                <div><button onclick="close_box()" id="cancelbtn">Close</button></div>
                            </div>`;


   bodyc.append(new_div);
  

}

//<-------------------------------------------------inside card plus button function popupbox_blur2() end----------------------------------------------->





//creating each card name with unique and target it
let boxlist = '';
function eachboxtask(evv){
    boxlist = evv.target.previousSibling.previousSibling.id;
    console.log(evv.target.id,'this is list id')
    console.log(evv)
}




//input value to store in box heading inside card addnew_taskname()
//<-------------------------------------------------input value to store in box heading inside card function addnew_taskname() start----------------------------------------------->
let addnew_taskname = () => {
    console.log('addnew taskname woring!');
    //given input value to store in card title
    let input_item = document.querySelector('#input_item').value;
    //if input value is empty it will give alert else create new title
    if(input_item == 0){
        alert('Hi Buddy Please Enter Input Item Name!!');
    }
    else{
        //created li adding to ul
        let li = document.createElement('li');
        console.log('created new li!');
        document.getElementById(boxlist).appendChild(li);
        li.id = `name-id${itm_c++}`;
        li.innerHTML =  `<span class="">${input_item}</span> <button onclick="completed_markdone(this)"  class="mark-btn">completed</button>`;
        let bodyc = document.getElementsByTagName('body')[0];
        let main_div = document.getElementsByTagName('div')[0];
    
        bodyc.innerHTML = main_div.innerHTML;
    }
    
    
}

//<-------------------------------------------------input value to store in box heading inside card function addnew_taskname() end----------------------------------------------->




//deleting box function start
let remove_box = (dicon) => {
    console.log('delete box working!');
    dicon.parentElement.remove();
    arrof_taskcards.splice(dicon.parentElement.id,1);
    let notask = document.querySelector('#notask')
    if(arrof_taskcards.length == 0){
        notask.style.display = 'block';
        notask.style.opacity = '1';
    
    }

}
//deleting box function end




//popup box close function start
function close_box(){
    console.log('popup close working!');
    let bodyc = document.getElementsByTagName('body')[0];
    let main_div = document.getElementsByTagName('div')[0];
    bodyc.innerHTML = main_div.innerHTML


}
//popup box close function end




//popup2 box close function start
function remove_pop(){
    console.log('popup2 close working!');
    let bodyc = document.getElementsByTagName('body')[0];
    let main_div = document.getElementsByTagName('div')[0];
    bodyc.innerHTML = main_div.innerHTML


}
//popup2 box close function end




//<-------------------------------------------------completed list mark as red function  completed_markdone(t_btn) start----------------------------------------------->

let task_n = document.getElementById('task_n');
 let c_btn = document.getElementById('m-btn');
function completed_markdone(t_btn){
    console.log('mark done working!');
    console.log('jjj');
    t_btn.parentElement.classList.add('task_n')
    t_btn.classList.add('m_btn')


}
//<-------------------------------------------------completed list mark as red function  completed_markdone(t_btn) end----------------------------------------------->




//hidden page/particular card open page info function
//<-------------------------------------------------particular card info  function  nextpage_hidden(para)start----------------------------------------------->

function nextpage_hidden(para){
    console.log('particular card open working!');
    let bodyc = document.getElementsByTagName('body')[0];
    //creating new element name div for open particular card
    let new_div_element = document.createElement('div')
    let header = document.getElementById('header')
    let main_id = document.getElementById('main-id')
    let hr_tag = document.getElementById('hr-tag')
    //main content hidding
    header.style.display = 'none'
    main_id.style.display = 'none'
    notask.style.display = 'none';
    hr_tag.style.display = 'none';
    
    //particular card add to  hidden page
    new_div_element.innerHTML = bodyc.innerHTML
    bodyc.innerHTML =``
    bodyc.append(new_div_element);
    //creating new element name div for hidden page back button, card name and plus icon with card
    let new_div_element2 = document.createElement('div')
    new_div_element2.className = 'newpage'
    new_div_element2.innerHTML = `<div  id="nextpage-hidden">
                                        <div class="nextpage">
                                            <div cl>
                                                <span onclick="backbtn()" class="back-btn-icon"><i class="fa-solid fa-circle-arrow-left"></i> Back</span>
                                            </div>
                                            <span class="cardname">${para.innerText}</span>
                                            <div>
                                                <span onclick="popupbox_blur()"><i  class="fa-solid fa-circle-plus" id="padd"></i></span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="hidebox">
                                            <div>
                                                ${para.parentElement.innerHTML}
                                            </div>
                                        </div>
                                    </div>`
    //adding hidden header to body

    bodyc.append(new_div_element2);

}
//<-------------------------------------------------particular card info  function  nextpage_hidden(para) end----------------------------------------------->




//back button in hidding page click to go back for main content
//<-------------------------------------------------hidden page back button function  backbtn() start----------------------------------------------->
function backbtn(){
    console.log('back button working!');
    // let d = document.querySelector('.hidebox')
    // d.style.display = 'none'
    // d2.style.display = 'flex'
    // header.style.display = 'flex'
    // main_id.style.display = 'flex'
    // notask.style.display = 'flex';
    // hr_tag.style.display = 'flex';
    

    document.getElementById('nextpage-hidden').style.display = 'none'
    let main_id = document.getElementById('main-id')
    let hr_tag = document.getElementById('hr-tag')
    header.style.display = 'flex'
    main_id.style.display = 'flex'
    // notask.style.display = 'flex';
    hr_tag.style.display = 'flex';
   
}
//<-------------------------------------------------hidden page back button function  backbtn() end----------------------------------------------->
