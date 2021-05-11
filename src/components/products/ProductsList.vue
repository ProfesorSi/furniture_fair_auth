<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Pretraga
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Lista proizvoda</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(product, index) in products"
          :key="index"
          @click="setActiveProduct(product, index)"
        >
          {{ product.title }}
        </li>
      </ul>

      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllProducts">
        Obriši sve artikle
      </button> -->
    </div>
    <div class="col-md-6">
      <div v-if="currentProduct">
        <h4>Proizvod</h4>
        <div>
          <label><strong>Naziv proizvoda:</strong></label>
          {{ currentProduct.title }}
        </div>
        <div>
          <label><strong>Opis proizvoda:</strong></label>
          {{ currentProduct.description }}
        </div>
        <!-- <div>
          <label><strong>Status:</strong></label>
          {{ currentProduct.published ? "Published" : "Pending" }}
        </div> -->

        <a class="badge badge-warning" :href="'/products/' + currentProduct.id">
          Uredi proizvod
        </a>
      </div>
      <div v-else>
        <br />
        <p>Kliknite na željeni proizvod...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDataService from "../../services/ProductDataService";


export default {
  name: "products-list",
  data() {
    return {
      products: [],
      currentProduct: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveProducts() {
      ProductDataService.getAll()
        .then((response) => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveProducts();
      this.currentProduct = null;
      this.currentIndex = -1;
    },

    setActiveProduct(product, index) {
      this.currentProduct = product;
      this.currentIndex = index;
    },

    removeAllProducts() {
      ProductDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      ProductDataService.findByTitle(this.title)
        .then((response) => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveProducts();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

.badge-warning {
  background: rgb(100, 96, 96);
  padding: 10px;
}

a {
  text-decoration: none;
}

a:hover {
  color: blanchedalmond;
}
</style>