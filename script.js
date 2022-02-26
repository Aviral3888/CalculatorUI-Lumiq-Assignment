// Screen selector
let screen = document.querySelector('.screen');

// Button Selector
let buttons = document.querySelectorAll('.btn');

// Functional Button Selector 
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');
    
// Retrieving data from numbers clicked
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;
    })
});
    
// Expression evaluation and result 
equal.addEventListener('click', function(e){
    if(screen.value === ''){
        screen.value = 'Please Enter a Value';
    } 
    else 
    {
        let answer = eval(screen.value);
        screen.value = answer;
    }
});
    
// screen clear function
clear.addEventListener('click', function(e){
    screen.value = " ";
})
   
