import http from "../utils/http";
export default {
    publish(params) {
        return http.post("/api/artical/saveArtical", params);
    },
    getArticalList(params) {
        return http.get("/api/artical/getArticalList", params);
    },
    getArticalDetail(params) {
        return http.get("/api/artical/getArticalDetail", params);
    },
    deleteArticalById(params) {
        return http.get("/api/artical/deleteArticalById", params);
    }
}