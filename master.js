
function writeUserData() {
var product=document.getElementById("product")
var mail=document.getElementById("mail")
var submitbtn=document.getElementById("submitbtn")
firebase.database().ref('inquiry/' + product.value).set({
	product: product.value,
	email: mail.value,
  });
alert("data added successfully")   
}