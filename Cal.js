

const display = document.getElementById("display");
const prevDisplay = document.getElementById("prevDisplay");

const buttons = document.querySelectorAll("button[data-value]");

let expression =  "";

let prevValue = " ";

// logic for the Calculator 

    buttons.forEach(btn => {
         btn.addEventListener("click", () => {
            const value = btn.dataset.value;
          
            // for remove the date 
          if (value === "C") {
              expression = "";
              display.textContent = "0";
              prevDisplay.textContent = "";
          } 
          
            // for delete operation
          else if (value === "DEL") {
              expression = expression.slice(0, -1);
              display.textContent = expression || "0";
          } 

           //  for final sum 
          else if (value === "=") {
              
               // if the value is not in proper state
              try {
                  prevValue = expression;
                  expression = eval(expression).toString();
                  display.textContent = expression;
                  prevDisplay.textContent = `${prevValue} =  ${expression}`;

                } catch {
                      display.textContent = "Error";
                      expression = "";
                      prevDisplay.textContent = "";
                    }
                
                  } 
                
                  else {
                      expression += value;
                      display.textContent = expression;
                    }
             });
       
     });

    //  for preview the date 
    //'Prev: ${prevValue} = $ {expression}'