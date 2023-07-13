function Validation(values) {

    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (values.name === "") {
        error.name = "Name is required"
    } else {
        error.name = ""
    }

    if (values.email === "") {
        error.email = "Email is required"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Please enter a valid email"
    }else {
        error.email = ""
    }

    if (values.phoneNumber === "") {
        error.phoneNumber = "Phone number is required"
    } else {
        error.phoneNumber = ""
    }

    if (values.address === "") {
        error.address = "Address is required"
    } else {
        error.address = ""
    }

    if (values.propertyType === "") {
        error.propertyType = "Must select a property"
    } else {
        error.propertyType = ""
    }

    if (values.propertyArea === "") {
        error.propertyArea = "Property area is required"
    } else { 
        error.propertyArea = ""
    }

    if (values.propertyAge === "") {
        error.propertyAge = "Property age is required"
    } else { 
        error.propertyAge = ""
    }
    return error;
}

export default Validation;