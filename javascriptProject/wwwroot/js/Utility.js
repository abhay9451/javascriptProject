function requiredTextField(controlId, errorMessage, validitionType = "all", length=500) {

    var Id = "#txt" + controlId
    var formGroup = "#formGroup" + controlId
    var errorField = "#err" + controlId
    $(Id).attr("maxlength", length)
    var txtVal = $(Id).val()
    if (txtVal == "" || txtVal == undefined || txtVal == null) {
        $(formGroup).addClass("error-control")
        $(errorField).addClass("error-control")
        $(errorField).html("Please Enter " + errorMessage)
        $(Id).focus() 
        return false
    }
    else {
        if (!getValidationType(validitionType).test(txtVal)) {
            $(formGroup).addClass("error-control")
            $(errorField).addClass("error-control")
            $(errorField).html("Please Enter valid " + errorMessage)
            $(Id).focus()
        }
        else {


            $(formGroup).removeClass("error-control")
            $(errorField).removeClass("error-control")
            $(errorField).html("")
            return true
        }
    }
}


function requiredSelectField(controlId, errorMessage) {

    var Id = "#ddl" + controlId
    var formGroup = "#formGroup" + controlId
    var errorField = "#err" + controlId
 
    var ddlVal = $(Id).val()
    if (ddlVal == "-1" || ddlVal == undefined || ddlVal==null || ddlVal==0) {
        $(formGroup).addClass("error-control")
        $(errorField).addClass("error-control")
        $(errorField).html("Please Select " + errorMessage)
        $(Id).focus()
        return false
    }
    else {
        $(formGroup).removeClass("error-control")
        $(errorField).removeClass("error-control")
        $(errorField).html("")
        return true
    }
}

function getValidationType(validitionType) {
    var regx = ""
    switch (validitionType) {
        case "email":
            regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            break;
        case "mobile":
            regx = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/
            break;
        case "pincode":
            regx = /^(\d{4}|\d{6})$/
            break;
        case "password":
            regx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
            break;
        default:
            regx = /.*/
            break;
      
    }
    return regx;
}