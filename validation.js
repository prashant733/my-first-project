
export function validateUserName(userName) {
    var userNameRegex = /^[A-Za-z0-9 ]+$/;
  
    userName = userName.trim();
  
    if (userName == "" || userName == undefined || userName == null) {
        return { status: false, error: 'Please enter name.' };
    }
    else if (!userNameRegex.test(userName)) {
        return { status: false, error: 'Please enter valid name.' };
    }
    else {
        return { status: true, error: '' };
    }
  }
  export function validateFName(fname) {
    var fnameRegex = /^[A-Za-z ]+$/;
  
    // fname = fname.trim();
  
    if (fname == "" || fname == undefined || fname == null) {
        return { status: false, error: 'Please enter first name.' };
    }
    else if (!fnameRegex.test(fname)) {
        return { status: false, error: 'Please enter valid first name.' };
    }
    else {
        return { status: true, error: '' };
    }
  }
  export function validateLName(lname) {
    var lnameRegex = /^[A-Za-z ]+$/;
  
    // lname = lname.trim();
  
    if (lname == "" || lname == undefined || lname == null) {
        return { status: false, error: 'Please enter last name.' };
    }
    else if (!lnameRegex.test(lname)) {
        return { status: false, error: 'Please enter valid last name.' };
    }
    else {
        return { status: true, error: '' };
    }
  }
  export function validateEmail(email) {
    var emailRegex = /^[A-Z0-9_]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,5})+$/i;
  
    email = email.trim();
  
    if (email == "" || email == undefined || email == null) {
        return { status: false, error: 'Please enter email address.' };
    }
    else if (!emailRegex.test(email)) {
        return { status: false, error: 'Please enter valid email address.' };
    }
    else {
        return { status: true, error: '' };
    }
  }
  export function validatePassword(password) {
    // var passwordRegex = /^ (?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    var passwordRegex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    password = password.trim();
  
    if (password === "" || password === undefined || password === null) {
        return { status: false, error: 'Please enter password.' }
    }
    else if (password.length < 8) {
        return { status: false, error: 'Password should be atleast 8 characters.' };
    }
    else if (!passwordRegex.test(password)) {
        return { status: false, error: 'Password must be at least 8 characters and include 1 special character ,1 digit and 1 capital letter.' };
    }
    else {
        return { status: true, error: '' }
    }
  }
  