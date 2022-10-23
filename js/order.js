function validate()
{
    var first=document.forms["user form"]["fname"].value;
    var last=document.forms["user form"]["lname"].value;
    var male=document.forms["user form"]["male"].value;
    var female=document.forms["user form"]["female"].value;
    var age=document.forms["user form"]["age"].value;
    var date=document.forms["user form"]["date"].value;
    var address=document.forms["user form"]["address"].value;
    var city=document.forms["user form"]["city"].value;
    var state=document.forms["user form"]["state"].value;
    var pn=document.forms["user form"]["pn"].value;
    var email=document.forms["user form"]["email"].value;
    var Service=document.forms["user form"]["Service"].value;
    var edate=doucment.forms["user form"]["edate"].value;


    if(first =="")
    {
        alert("enter the name");
        return false;
    }
    if(last =="")
    {
        alert("enter the name");
        return false;
    }
    if(first =="")
    {
        alert("enter date");
        return false;
    }
    var at = email.indexOf("@");
    var dot= email.lastIndexOf(".");
    if(at<1||dot<at+2||dot+2>=email.length)
    {
        alert("not a valid email")
        return false;
    }
    if(pn =="")
    {
        alert("enter phone number")
        return false
    }
    if(edate=="")
    {
        alert("enter the expiration date")
        return false
    }


}