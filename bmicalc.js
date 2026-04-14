function calculateBMI(){
    let weight=prompt("Enter your weight in kg: ");
    let height=prompt("Enter your height in cms:");
    let w=parseFloat(weight);
    let h=parseFloat(height);
    let heightm=h/100;
    let bmi=w/(heightm*heightm);
    document.getElementById("result").innerHTML =
        `Your BMI is ${bmi.toFixed(2)}
    `;
}
