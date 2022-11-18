import ApiManager from "./axios";


export const userLogin = async data =>{
    try {
        const result = await ApiManager("auth/login", {
            method: "POST",
            headers: {
                'content-type':"application/json"
            },
            data:data
        })
        return result;
    } catch (error) {
        return error
    }
}