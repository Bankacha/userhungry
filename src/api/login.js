import { Http } from "./api";

export function login (body) {
    return Http.post("/auth" , body)
}