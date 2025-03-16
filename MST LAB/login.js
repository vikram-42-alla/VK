export class User{
    static validate(username,password){
        
        let authenticate= (username === "superdev" && password === "password123")?  "Login Successful": "Login Failed";
        return authenticate;
    }

}