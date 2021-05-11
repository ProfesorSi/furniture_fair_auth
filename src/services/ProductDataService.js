import http from "../http-common"; 

class ProductDataService {
    getAll() {
        return http.get("https://crud.sajamnamjestaja.com/api/products");
    }
    
    get(id) {
        return http.get(`https://crud.sajamnamjestaja.com/api/products/${id}`);
    }

    create(data) {
        return http.post("https://crud.sajamnamjestaja.com/api/products", data);
    }

    update(id, data) {
        return http.put(`https://crud.sajamnamjestaja.com/api/products/${id}`, data);
    }

    delete(id) {
        return http.delete(`https://crud.sajamnamjestaja.com/api/products/${id}`);
    }

    deleteAll() {
        return http.delete(`/products`);
    }

    findByTitle(title) {
        return http.get(`https://crud.sajamnamjestaja.com/api/products?title=${title}`);
    }
}

export default new ProductDataService();