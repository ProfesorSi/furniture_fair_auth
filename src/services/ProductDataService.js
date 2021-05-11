import http from "../http-common"; 

class ProductDataService {
    getAll() {
        return http.get("http://localhost:3000/api/products");
    }
    
    get(id) {
        return http.get(`http://localhost:3000/api/products/${id}`);
    }

    create(data) {
        return http.post("http://localhost:3000/api/products", data);
    }

    update(id, data) {
        return http.put(`http://localhost:3000/api/products/${id}`, data);
    }

    delete(id) {
        return http.delete(`http://localhost:3000/api/products/${id}`);
    }

    deleteAll() {
        return http.delete(`/products`);
    }

    findByTitle(title) {
        return http.get(`http://localhost:3000/api/products?title=${title}`);
    }
}

export default new ProductDataService();