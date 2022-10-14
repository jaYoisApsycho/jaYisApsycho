// document.getElementById("count-el").innerText=5

let count = 0;


let saveEl = document.getElementById("save-el")

let count_e1 = document.getElementById("count-el");



let reset_el = document.getElementById("reset-el")



function increment (){

    count += 1

    if (count<0) {
        count_e1.innerText = count
    }

    else(
        count_e1.innerText = count
    )


    // count_e1.innerText = count
    console.log(count);

    
}

// function save (){
//     let countStr = count +  " - "

//     // saveEl.textContent += countStr
//     // count_e1.textContent = 0
//     // count = 0

//     // count_e1.textContent = 0;
//     // count = 0;

//     saveEl.innerText = saveEl.innerText + countStr;
    
//     console.log(count);

//     // let d;

//     // console.log(d);

// }

function decrement() {
    count = count - 1

    // count_e1.innerText= count
    if (count<0) {
        count_e1.innerText = 0
    }

    else(
        count_e1.innerText = count
    )

    

    console.log(count);
}
function reset (){
    
    reset_el= 0;

    count_e1.innerText = reset_el;

    // count = 0;34

    console.log(reset_el);
}

// function save() {
//     let d = 0;

//     console.log(d);
// }



