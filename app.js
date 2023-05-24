var Firstname = document.getElementById('First_Name')
var Last_Name = document.getElementById('Last_Name')
var Ph_number = document.getElementById('Ph_number')
var Password = document.getElementById('Password')
var Selectdate = document.getElementById('date') 
var Selectmonth = document.getElementById('month') 
var Selectyears = document.getElementById('Years') 


function SignUp(){
var gender = document.querySelector("input[name='gender']:checked")
    console.log(Firstname.value)
    console.log(Last_Name.value)
    console.log(Ph_number.value)
    console.log(Password.value)
    console.log(Selectdate.value) 
    console.log( Selectmonth.value)
    console.log( Selectyears.value )
    console.log(gender.value)
}