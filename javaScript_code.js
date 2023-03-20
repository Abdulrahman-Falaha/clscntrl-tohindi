var image_list = document.querySelectorAll('img');
for (let i = 0; i < image_list.length; i++) {
    const img = image_list[i];
    img.src = img.dataset.src;
}

var hvr_btn1 = document.querySelector("[data-name='MAIN_NAV_TRIGGER_CONTAINER']");
hvr_btn1.addEventListener("mouseover", courseBtnHover);
hvr_btn1.addEventListener("mouseout", notHovering);

function courseBtnHover() {
    var x = document.querySelectorAll('html')[0];
    x.classList.add("nav-open");
    var y = document.getElementsByClassName("js-main-nav-dropdown")[0];
    y.classList.add("is-open");
    var z = document.querySelector("[data-name='BLANKET']");
    z.classList.remove("animate-fade-hidden");
}

function notHovering() {
    var x = document.querySelectorAll('html')[0];
    x.classList.remove("nav-open");
    var y = document.getElementsByClassName("js-main-nav-dropdown")[0];
    y.classList.remove("is-open");
    var z = document.querySelector("[data-name='BLANKET']");
    z.classList.add("animate-fade-hidden");
}


var report_class = document.querySelector("[data-name='NAV_DROPDOWN']");
report_class.addEventListener("mouseover", report_hovered_over);
report_class.addEventListener("mouseout", report_hovered_out);


function report_hovered_over() {
    var z = document.querySelector("[data-menu-dropdown='report']");
    z.classList.remove("animate-fade-hidden");
    z.classList.add("animate-fade-entered");
    var back_animation = document.querySelector("[data-name='BLANKET']");
    back_animation.classList.remove("animate-fade-hidden");
    back_animation.classList.add("animate-fade-entered");
}   
function report_hovered_out() {
    var z = document.querySelector("[data-menu-dropdown='report']");
    z.classList.remove("animate-fade-entered");
    z.classList.add("animate-fade-hidden");
    var back_animation = document.querySelector("[data-name='BLANKET']");
    back_animation.classList.add("animate-fade-hidden");
    back_animation.classList.remove("animate-fade-entered");
}


var plus_shape_btn = document.querySelector("[data-name='NAV_TRIGGER']");
plus_shape_btn.classList.add("animate-fade-entered");
plus_shape_btn.addEventListener("click", turn_on);

var close_btn = document.querySelector("[data-name='NAV_SUBMENU_CLOSE']");
close_btn.addEventListener("click", turn_off);


function turn_on(){
    var open_up_btn = document.querySelector("[data-name = 'NAV_TRIGGER']");
    open_up_btn.classList.add("animate-fade-hidden");
    open_up_btn.classList.remove("animate-fade-entered");
    var open_up_btn2 = document.querySelector("[data-name='NAV_SUBMENU_CLOSE']");
    open_up_btn2.classList.remove("animate-fade-hidden");
    open_up_btn2.classList.add("animate-fade-entered");
    var pop_up = document.querySelector("[data-menu-dropdown='lists']");
    pop_up.classList.remove("animate-fade-hidden");
    pop_up.classList.add("animate-fade-entered");
    var blanket_anmtion = document.querySelector("[data-name = 'BLANKET']");
    blanket_anmtion.classList.remove("animate-fade-hidden");
    blanket_anmtion.classList.add("animate-fade-entered");
}

function turn_off(){
    var open_up_btn = document.querySelector("[data-name = 'NAV_TRIGGER']");
    open_up_btn.classList.remove("animate-fade-hidden");
    open_up_btn.classList.add("animate-fade-entered");
    var open_up_btn2 = document.querySelector("[data-name='NAV_SUBMENU_CLOSE']");
    open_up_btn2.classList.add("animate-fade-hidden");
    open_up_btn2.classList.remove("animate-fade-entered");
    var pop_up = document.querySelector("[data-menu-dropdown='lists']");
    pop_up.classList.add("animate-fade-hidden");
    pop_up.classList.remove("animate-fade-entered");
    var blanket_anmtion = document.querySelector("[data-name = 'BLANKET']");
    blanket_anmtion.classList.add("animate-fade-hidden");
    blanket_anmtion.classList.remove("animate-fade-entered");
}
 






// var dropdownList = document.getElementsByClassName("js-main-nav-dropdown")[0];
// dropdownList.addEventListener("mouseover", dropDownListHover);
// dropdownList.addEventListener("mouseleave", dropDownListHovevrEnd);

// function dropDownListHover(target) {
//     console.log(target);
//     var dataset = target.fromElement.dataset;
//     if (dataset.name = "NAV_SUBSECTION_PARENT" && dataset.detail != undefined) {
//         var y = document.getElementsByClassName("js-main-nav-dropdown")[0];
//         y.classList.add("has-visible-sebsection");
//         var childListId = JSON.parse(dataset.detail)["childListId"];
//         var list = document.querySelector(`[data-list-id='${childListId}']`);
//         list.removeAttribute("hidden"); 
//         list.classList.add("is-selected")
//     }
// }


// function dropDownListHovevrEnd(target) {
//     console.log(target);
//     var dataset = target.fromElement.dataset;
//     if (dataset.name = "NAV_SUBSECTION_PARENT" && dataset.detail != undefined) {
//         var y = document.getElementsByClassName("js-main-nav-dropdown")[0];
//         y.classList.remove("has-visible-sebsection");
//         var childListId = JSON.parse(dataset.detail)["childListId"];
//         console.log("hiding:",childListId);
//         var list = document.querySelector(`[data-list-id='${childListId}']`);
//         list.setAttribute("hidden", "");
//         list.classList.remove("is-selected");
//         console.log(list);
//     }
// }
