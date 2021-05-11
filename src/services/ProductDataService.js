import http from "../http-common"; 

class ProductDataService {
    getAll() {
        return http.get("http://crud.sajamnamjestaja.com/api/products");
    }
    
    get(id) {
        return http.get(`http://crud.sajamnamjestaja.com/api/products/${id}`);
    }

    create(data) {
        return http.post("http://crud.sajamnamjestaja.com/api/products", data);
    }

    update(id, data) {
        return http.put(`http://crud.sajamnamjestaja.com/api/products/${id}`, data);
    }

    delete(id) {
        return http.delete(`http://crud.sajamnamjestaja.com/api/products/${id}`);
    }

    deleteAll() {
        return http.delete(`/products`);
    }

    findByTitle(title) {
        return http.get(`http://crud.sajamnamjestaja.com/api/products?title=${title}`);
    }
}

export default new ProductDataService();