<template>
  <div>
    <Navigation />
    <hr />
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
          <label for="image">Slika 1 (link na fotografiju proizvoda)</label>
          <input
            class="form-control"
            id="imageURL"
            required
            v-model="product.imageURL"
            name="imageURL"
          />
        </div>

        <div class="form-group">
          <label for="image">Slika 2 (link na fotografiju proizvoda)</label>
          <input
            class="form-control"
            id="imageURL1"
            required
            v-model="product.imageURL1"
            name="imageURL11"
          />
        </div>

        <div class="form-group">
          <label for="image">Slika 3 (link na fotografiju proizvoda)</label>
          <input
            class="form-control"
            id="imageURL2"
            required
            v-model="product.imageURL2"
            name="imageURL2"
          />
        </div>

        <div class="form-group">
          <label for="image">Slika 4 (link na fotografiju proizvoda)</label>
          <input
            class="form-control"
            id="imageURL3"
            required
            v-model="product.imageURL3"
            name="imageURL3"
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
          <option>Art i dekor</option>
          <option>Trpezarija</option>
          <option>Ormari</option>
          <option>Handmade kutak</option>
          <option>Usluge dizajna</option>
          <option>Kancelarijski namještaj</option>
          <option>Baštenski program i ostalo</option>
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
  </div>
</template>

<script>
import ProductDataService from "../../services/ProductDataService";
import Navigation from "../Navigation";

export default {
  name: "add-product",
  components: {
    Navigation,
  },
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