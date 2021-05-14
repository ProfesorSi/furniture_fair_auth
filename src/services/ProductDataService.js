import http from "../http-common"; 

class ProductDataService {
    getAll() {
        return http.get("https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/products");
    }
    
    get(id) {
        return http.get(`https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/products/${id}`);
    }

    create(data) {
        return http.post("https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/products", data);
    }

    update(id, data) {
        return http.put(`https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/products/${id}`, data);
    }

    delete(id) {
        return http.delete(`https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/products/${id}`);
    }

    deleteAll() {
        return http.delete(`https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/products`);
    }

    findByTitle(title) {
        return http.get(`https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/products?title=${title}`);
    }
}

export default new ProductDataService();