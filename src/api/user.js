import http from "../utils/http";
export default {
    login(params) {
        return http.post("/api/user/login", params);
    }
}