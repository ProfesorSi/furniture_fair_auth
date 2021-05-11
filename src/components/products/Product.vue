<template>
  <div>
    <Navigation />

    <div v-if="currentProduct" class="edit-form">
    <h4>Proizvod</h4>
    <form>
      <div class="form-group">
        <label for="title">Naziv proizvoda</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentProduct.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Opis proizvoda</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentProduct.description"
        />
      </div>

      <div class="form-group">
        <label for="price">Cijena</label>
        <input
          type="text"
          class="form-control"
          id="price"
          v-model="currentProduct.price"
        />
      </div>

      <div class="form-group">
        <label for="category">Kategorija</label>
        <input
          type="text"
          class="form-control"
          id="category"
          v-model="currentProduct.category"
        />
      </div>

      <div class="form-group">
        <label for="exhibitor">Izlagač</label>
        <input
          type="text"
          class="form-control"
          id="exhibitor"
          v-model="currentProduct.exhibitor"
        />
      </div>
      <hr>

      <!-- <div class="form-group">
        <label for="description">Slika</label>
        <input
          type="text"
          class="form-control"
          id="imageURL"
          v-model="currentProduct.imageURL"
        />
      </div> -->

      <!-- <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentProduct.published ? "Published" : "Pending" }}
      </div> -->

      <div class="image">
        <img :src="currentProduct.imageURL" alt="" />
      </div>
    </form>

    <!-- <button
      class="badge badge-primary mr-2"
      v-if="currentProduct.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button> -->

    <button class="badge badge-danger mr-2" @click="deleteProduct">
      Obriši proizvod
    </button>

    <button type="submit" class="badge badge-success" @click="updateProduct">
      Izmijeni
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Product...</p>
  </div>
  </div>
</template>

<script>
import ProductDataService from "../../services/ProductDataService";
import Navigation from "../Navigation";

export default {
  name: "Product",
  components: {
    Navigation
  },
  data() {
    return {
      currentProduct: null,
      message: "",
    };
  },
  methods: {
    getProduct(id) {
      ProductDataService.get(id)
        .then((response) => {
          this.currentProduct = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentProduct.id,
        title: this.currentProduct.title,
        description: this.currentProduct.description,
        // published: status,
      };

      ProductDataService.update(this.currentProduct.id, data)
        .then((response) => {
          this.currentProduct.published = status;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateProduct() {
      ProductDataService.update(this.currentProduct.id, this.currentProduct)
        .then((response) => {
          console.log(response.data);
          this.message = "Proizvod je uspješno izmijenjen!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteProduct() {
      ProductDataService.delete(this.currentProduct.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "products" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getProduct(this.$route.params.id);
  },
};
</script>

<style>

.edit-form {
  max-width: 300px;
  margin: auto;
}

.image {
  width: 200px;
  height: 200px;
}

.image img {
  width: 100%;
  object-fit: cover;
}

.badge-danger {
  background: red;
  padding: 5px;
}

.badge-success {
  background: green;
  padding: 5px;
}
</style>