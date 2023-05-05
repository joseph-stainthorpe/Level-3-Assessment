console.log("conected");
function doSubmit() {
    //this is for the form to allow people to put information in it and then make it into an email
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var email = document.getElementById("email").value
    var phonenumber = document.getElementById("phonenumber").value
    var dateandtime = document.getElementById("dateandtime").value
    console.log("submit");
    console.log(fname);
    console.log(lname);
    window.open("mailto:" + "joseph.stainthorpe@inglewoodhs.school.nz" +
     '?cc=' + 'random@email.com' +
      '&subject=' + "Wood chopping request " +
       '&body='+ 'hello my name is ' + fname + ' ' + lname + '. my Email is ' + email + '. my phone number is ' + phonenumber + '. I would like it if you could chop the wood at ' + dateandtime )
}