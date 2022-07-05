const record = {}
const exercise = {}
let n = 4

function Add() {
    const input = document.querySelector(".test")
    const temp = Object.keys(exercise)
    const MaxNum = Number(temp.slice(-1)[0])
    console.log(MaxNum)
    let newKey
    let isCheck = false
    for (let i=0; i<MaxNum; i++) {
        newKey = String(i+1)
        if ( !(newKey in temp) ) { 
            exercise[newKey] = {weights: input.value}
            isCheck = true
            break
        }
    }
    if (isCheck == false) {
        newKey = String(temp.length+1)
        exercise[newKey] = {weights: input.value}    
    }
    console.log(exercise)
}

function Selected() {
    const select = document.getElementById("Exercise")
    console.log(select.options[select.selectedIndex].text)
    console.log(select.options[select.selectedIndex].value)
    
}

const tbody = document.querySelector("tbody")

function MakeDeleteEvent () {
    const btn_delete = document.querySelectorAll(".btn-delete")
    btn_delete.forEach(btn => {
        btn.addEventListener("click", function () {
            // console.log(btn.parentElement.parentElement)
            btn.parentElement.parentElement.remove()
        })
    })
}
// MakeDeleteEvent()

const table = document.querySelector(".table")


const btn = document.querySelector(".btn")
btn.addEventListener("click", function () {
    tbody.innerHTML += `<tr><td><button class="btn-delete">-</button></td><td>${n}</td><td></td><td><input class="weights"></td><td><input class="reps"></td></tr>`
    n += 1
    MakeDeleteEvent()
})

const btn_submit = document.querySelector(".submit")
btn_submit.addEventListener("click", function () {
    const W = document.querySelectorAll(".weights")
    const R = document.querySelectorAll(".reps")
    for (let i=0; i<tbody.childElementCount; i++) {
        const set = String(i+1)
        record[set] = {weights:0, reps:0} 
        record[set].weights = W[i].value
        record[set].reps = R[i].value
    }
    console.log(record)
    const result = fetch('http://localhost:3000/result', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(record)
    })
})


