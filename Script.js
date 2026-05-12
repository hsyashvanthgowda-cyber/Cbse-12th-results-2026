function submitForm(){

    let roll = document.getElementById("roll").value.trim();
    let school = document.getElementById("school").value.trim();
    let admit = document.getElementById("admit").value.trim();
    let captcha = document.getElementById("captchaInput").value.trim();

    let correctCaptcha = "P25JM0";

    if(roll === "" || school === "" || admit === "" || captcha === ""){
        alert("Please fill all fields");
        return;
    }

    if(captcha !== correctCaptcha){
        alert("Invalid Security Pin");
        return;
    }

    alert("Result Submitted Successfully!");

}

function resetForm(){

    document.getElementById("roll").value = "";
    document.getElementById("school").value = "";
    document.getElementById("admit").value = "";
    document.getElementById("captchaInput").value = "";

}
