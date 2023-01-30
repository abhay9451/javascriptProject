$(document).ready(function () {
    $("#btnSubmit").click(function () {
        var isValid = true
        isValid = requiredTextField("Name", " your name", null,5)
        if (!isValid) { return isValid }

        isValid = requiredTextField("Email", " your Email Address" , "email")
        if (!isValid) { return isValid }


        isValid = requiredTextField("Mobile", " your Mobile number","mobile")
        if (!isValid) { return isValid }

        isValid = requiredSelectField("Gender", "gender")
        if (!isValid) { return isValid }

        isValid = requiredTextField("Password", " enter Pasword","password")
        if (!isValid) { return isValid }

        isValid = requiredTextField("ConfirmPassword", " confirm Password")
        if (!isValid) { return isValid }

        isValid = requiredTextField("PinCode", " Enter Pin Code","pincode")
        if (!isValid) { return isValid }

        isValid = requiredTextField("Address", " Enter Address")
        if (!isValid) { return isValid }



        console.log(isValid)
    })
})

$("#txtName").keyup(function () {
    isValid = requiredTextField("Name", " your name",null, 5)
    if (!isValid) { return isValid }
})

$("#txtEmail").keyup(function () {
    isValid = requiredTextField("Email", " your Email" ,"email")
    if (!isValid) { return isValid }
})

$("#txtMobile").keyup(function () {
    isValid = requiredTextField("Mobile", " your Mobile number" , "mobile")
    if (!isValid) { return isValid }

})

$("#ddlGender").change(function () {
    isValid = requiredSelectField("Gender", "gender")
    if (!isValid) { return isValid }
})

$("#txtPassword").keyup(function () {
    isValid = requiredTextField("Password", " enter Pasword","password")
    if (!isValid) { return isValid }
})

$("#txtConfirmPassword").keyup(function () {
    isValid = requiredTextField("ConfirmPassword", " confirm Password")
    if (!isValid) { return isValid }
})

$("#txtPinCode").keyup(function () {
    isValid = requiredTextField("PinCode", " Enter Pin Code","pincode")
    if (!isValid) { return isValid }
})

$("#txtAddress").keyup(function () {
    isValid = requiredTextField("Address", " Enter Address")
    if (!isValid) { return isValid }

})






