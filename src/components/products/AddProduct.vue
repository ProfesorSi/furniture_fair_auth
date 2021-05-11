<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Naziv proizvoda</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="product.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Opis proizvoda</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="product.description"
          name="description"
        />
      </div>

      <!-- <div class="form-group">
        <label for="description">Is published?</label>
        <input
          class="form-control"
          id="published"
          required
          v-model="product.published"
          name="published"
        />
      </div> -->

      <div class="form-group">
        <label for="description">Cijena</label>
        <input
          class="form-control"
          id="price"
          required
          v-model="product.price"
          name="price"
        />
      </div>

      <div class="form-group">
        <label for="description">Slika (link na fotografiju proizvoda)</label>
        <input
          class="form-control"
          id="imageURL"
          required
          v-model="product.imageURL"
          name="imageURL"
        />
      </div>
      
      <div class="form-group">
        <label for="exhibitor">Izlagač</label>
        <input
          class="form-control"
          id="exhibitor"
          required
          v-model="product.exhibitor"
          name="exhibitor"
        />
      </div>

      <br />
      <select v-model="product.category">
        <option disabled value="">Odaberi kategoriju</option>
        <option>Dnevni boravak</option>
        <option>Kreveti i spavace sobe</option>
        <option>Kuhinje</option>
      </select>
      <br />
      <span>Odabrana kategorija: {{ product.category }}</span>

      <hr />
      <button @click="saveProduct" class="btn btn-success">
        Dodaj proizvod
      </button>
    </div>

    <div v-else>
      <h4>Uspješno ste dodali proizvod!</h4>
      <button class="btn btn-success" @click="newProduct">
        Dodaj novi proizvod
      </button>
    </div>
  </div>
</template>

<script>
import ProductDataService from "../../services/ProductDataService";

export default {
  name: "add-product",
  data() {
    return {
      product: {
        id: null,
        title: "",
        description: "",
        // published: false,
        price: null,
        imageURL: "",
        category: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveProduct() {
      var data = {
        title: this.product.title,
        description: this.product.description,
        price: this.product.price,
        imageURL: this.product.imageURL,
        category: this.product.category,
      };

      ProductDataService.create(data)
        .then((response) => {
          this.product.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newProduct() {
      this.submitted = false;
      this.product = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>