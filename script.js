// Find the max element and the min element

let result_max_min = document.querySelector(".result-max-min")
let input1 = document.querySelector("#num1")
let input2 = document.querySelector("#num2")
let input3 = document.querySelector("#num3")

result_max_min.addEventListener("click",()=> {
    let max = Math.max(input1.value , input2.value , input3.value)
    console.log(`max element = ${max}`)
    let min = Math.min(input1.value , input2.value , input3.value)
    console.log(`min element = ${min}`)
})

// Find vowel chars 
let input = document.querySelector("#num")
let result_vowel_char = document.querySelector(".result-vowel-char")

result_vowel_char.addEventListener("click",()=> {
    // let new_input = input.value.toLowerCase()
    if (input.value.toLowerCase()=='a' || input.value.toLowerCase()=='e' || input.value.toLowerCase()=='o' || input.value.toLowerCase()=='u' || input.value.toLowerCase()=='i')
        {
            console.log("The char is : vowel" )
        }
    else
        {
            console.log("The char is : Consonant")
        }
})

// Print all even numbers between 1 to this number 
let number = document.querySelector("#number")
let result_even = document.querySelector(".result-even")

result_even.addEventListener("click",()=> {
    for(let i = 1 ; i <= number.value ; i++)
        {
            if(i%2 === 0) {
                console.log(`The even number ${i}`)
            }
        }
})

// print a multiplication table up to 12
let number1 = document.querySelector("#number1")
let result_multi = document.querySelector(".result-multi")
let Aray = [1,2,3,4,5,6,7,8,9,10,11,12]
result_multi.addEventListener("click",()=> {
    for(let i = 0 ; i < Aray.length ; i++)
        {
            let multi = Aray[i]*number1.value
            console.log(multi)
        }
})

// program to input marks of five subjects to Find percentage and grade 
let subject1 = document.querySelector("#subject1")
let subject2 = document.querySelector("#subject2")
let subject3 = document.querySelector("#subject3")
let subject4 = document.querySelector("#subject4")
let subject5 = document.querySelector("#subject5")
let result_grade = document.querySelector(".result-grade")

result_grade.addEventListener("click",()=> {
    let sum = (parseInt(subject1.value) + parseInt(subject2.value) + parseInt(subject3.value) + parseInt(subject4.value) + parseInt(subject5.value)) / 5
    if (sum >= 90) {
        console.log(`Percentage = ${sum}% : Grad is A`)
    }
    else if (sum >= 80) {
        console.log(`Percentage = ${sum}% : Grad is B`)
    }
    else if (sum >= 70) {
        console.log(`Percentage = ${sum}% : Grad is C`)
    }
    else if (sum >= 60) {
        console.log(`Percentage = ${sum}% : Grad is D`)
    }
    else if (sum >= 40) {
        console.log(`Percentage = ${sum}% : Grad is E`)
    }
    else if (sum <= 40) {
        console.log(`Percentage = ${sum}% : Grad is F`)
    }
})

