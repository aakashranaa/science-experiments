const adminCreds = {"User": "mayank", "Password": "mypassword05"}

export const getAdminCreds = () => {
    return adminCreds;
}

export const validateAdmin = (creds) => {
    console.log(creds);
    return adminCreds.Password === creds.Password && adminCreds.User === creds.User;
}

