export default function validateInfo(values) {
    let errors = {}

    if(!values.firstName) {
        errors.firstName = "Please enter your First Name"
    }

    if(!values.lastName) {
        errors.lastName = "Please enter your Last Name"
    }

    if(!values.phoneNumber) {
        errors.phoneNumber = "Please enter your Phone Number"
    }else if(values.phoneNumber.length < 7 || values.phoneNumber.length > 7) {
        errors.phoneNumber = "Please enter a 7 digit phone number"
    }

    if(!values.emailAddress) {
        errors.emailAddress = "Please enter your Email address"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAddress)) {
        errors.emailAddress = "Email address is invalid"
    }

    if(!values.gender) {
        errors.gender = "Please enter your Gender"
    }

    if(values.dayOfBirth === "None" && values.monthOfBirth === "None" && values.yearOfBirth === "None"){
        errors.birth = "Please enter your Birthday"
    }else if(values.dayOfBirth === "None" && values.monthOfBirth !== "None" && values.yearOfBirth !== "None"){
        errors.birth = "You missed the day, please select it"
    }else if(values.dayOfBirth !== "None" && values.monthOfBirth === "None" && values.yearOfBirth !== "None"){
        errors.birth = "You missed the month, please select it"
    }else if(values.dayOfBirth !== "None" && values.monthOfBirth !== "None" && values.yearOfBirth === "None"){
        errors.birth = "You missed the year, please select it"
    }else if(values.dayOfBirth === "None" && values.monthOfBirth === "None" && values.yearOfBirth !== "None"){
        errors.birth = "You missed the day and the month, please select them"
    }else if(values.dayOfBirth === "None" && values.monthOfBirth !== "None" && values.yearOfBirth === "None"){
        errors.birth = "You missed the day and the year, please select them"
    }else if(values.dayOfBirth !== "None" && values.monthOfBirth === "None" && values.yearOfBirth === "None"){
        errors.birth = "You missed the month and the year, please select them"
    }
    
    return errors;
}