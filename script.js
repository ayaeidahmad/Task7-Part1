// Find the max element and the min element

const container = document.querySelector(".container")
container.innerHTML = `
                    <h1 class="title1"> Find the max element and the min element</h1>
                    <div  class="form">
                        <input type="number" id="num1" placeholder="num">
                        <input type="number" id="num2" placeholder="num">
                        <input type="number" id="num3" placeholder="num">
                    </div>
                    <button class="result-max-min">Result-Max-Min</button> `

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

const container2 = document.querySelector(".container2")
container2.innerHTML = `
                    <h1 class="title2"> Find vowel chars</h1>
                    <div  class="form">
                        <input type="text" maxlength="1" id="num" placeholder="please enter a char">
                        <button class="result-vowel-char">Submit</button>
                    </div> `

let input = document.querySelector("#num")
let result_vowel_char = document.querySelector(".result-vowel-char")

result_vowel_char.addEventListener("click",()=> {
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
const container3 = document.querySelector(".container3")
container3.innerHTML = `
                    <h1 class="title3">Print all even numbers between 1 to this number</h1>
                    <div  class="form">
                        <input type="number" id="number" placeholder="please enter a number">
                        <button class="result-even">Submit</button>
                    </div> `
let number = document.querySelector("#number")
let result_even = document.querySelector(".result-even")

result_even.addEventListener("click",()=> {
    for(let i = 0 ; i <= number.value ; i++)
        {
            if(i%2 === 0) {
                console.log(`The even number ${i}`)
            }
        }
})

// print a multiplication table up to 12
const container4 = document.querySelector(".container4")
container4.innerHTML = `
                    <h1 class="title4"> print a multiplication table up to 12</h1>
                    <div  class="form">
                        <input type="number" id="number1" placeholder="please enter a number">
                        <button class="result-multi">Submit</button>
                    </div> `
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

// program to enter marks of five subjects and calculate total, average and percentage.
const container5 = document.querySelector(".container5")
container5.innerHTML = `
                    <h1 class="title5">program to enter marks of five subjects and calculate total, average and percentage.</h1>
                    <div class="form">
                        <input type="number" id="sub1" placeholder="please enter a mark in Physics,">
                        <input type="number" id="sub2" placeholder="please enter a mark in Chemistry,">
                        <input type="number" id="sub3" placeholder="please enter a mark in Biology,">
                        <input type="number" id="sub4" placeholder="please enter a mark in Mathematics">
                        <input type="number" id="sub5" placeholder="please enter a mark in Computer,">
                        <button class="result-marks">Submit</button>
                    </div> `

let sub1 = document.querySelector("#sub1")
let sub2 = document.querySelector("#sub2")
let sub3 = document.querySelector("#sub3")
let sub4 = document.querySelector("#sub4")
let sub5 = document.querySelector("#sub5")
let result_marks = document.querySelector(".result-marks")

result_marks.addEventListener("click",()=> {
    let average = (parseFloat(sub1.value) + parseFloat(sub2.value) + parseFloat(sub3.value) + parseFloat(sub4.value) + parseFloat(sub5.value)) / 5
    let sum = parseFloat(sub1.value) + parseFloat(sub2.value) + parseFloat(sub3.value) + parseFloat(sub4.value) + parseFloat(sub5.value)
    console.log(`total is : ${sum}`)
    console.log(`average is : ${average}`)
    console.log(`percentage is : ${average}%`)
})

// program to input marks of five subjects to Find percentage and grade 
const container6 = document.querySelector(".container6")
container6.innerHTML = `
                    <h1 class="title6">program to input marks of five subjects to Find percentage and grade</h1>
                    <div class="form">
                        <input type="number" id="subject1" placeholder="please enter a mark in Physics,">
                        <input type="number" id="subject2" placeholder="please enter a mark in Chemistry,">
                        <input type="number" id="subject3" placeholder="please enter a mark in Biology,">
                        <input type="number" id="subject4" placeholder="please enter a mark in Mathematics">
                        <input type="number" id="subject5" placeholder="please enter a mark in Computer,">
                        <button class="result-grade">Submit</button>
                    </div> `

let subject1 = document.querySelector("#subject1")
let subject2 = document.querySelector("#subject2")
let subject3 = document.querySelector("#subject3")
let subject4 = document.querySelector("#subject4")
let subject5 = document.querySelector("#subject5")
let result_grade = document.querySelector(".result-grade")

result_grade.addEventListener("click",()=> {
    let sum = (parseFloat(subject1.value) + parseFloat(subject2.value) + parseFloat(subject3.value) + parseFloat(subject4.value) + parseFloat(subject5.value)) / 5
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

