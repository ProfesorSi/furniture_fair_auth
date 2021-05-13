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
          <label for="category">Kategorija</label><br>
          <select v-model="currentProduct.category">
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
        </div>

        <div class="form-group">
          <label for="exhibitor">Izlagač</label>
          <!-- <input
            class="form-control"
            id="exhibitor"
            required
            v-model="product.exhibitor"
            name="exhibitor"
          /> -->
          <select v-model="currentProduct.exhibitor">
            <option disabled value="">Odaberi izlagača</option>
            <option>MALAGIĆ NAMJEŠTAJ</option>
            <option>DOMAVIJA NAMJEŠTAJ</option>
            <option>WOOL CARPET</option>
            <option>BOHA NAMJEŠTAJ</option>
            <option>ARTI TEXTILE</option>
            <option>Mobler 33</option>
            <option>DIVAN NAMJESTAJ</option>
            <option>ALESTRA</option>
            <option>BOSNIAN BEECH BOAR</option>
            <option>SUVENIRNICA MEVIĆ</option>
            <option>REZBARIJE GOLETIĆ</option>
            <option>FURNITURE LOVERS</option>
            <option>ATRIKA HOME DESIGN</option>
            <option>BERRE NAMJEŠTAJ</option>
            <option>ID INTERIORS</option>
            <option>R&S SARAJEVO</option>
            <option>IMAN NAMJEŠTAJ PO MJERI</option>
            <option>RATTAN SEDIA</option>
            <option>MALAK JANJ</option>
            <option>CFC ŽIVINICE</option>
            <option>BREZJE NAMJEŠTAJ</option>
            <option>SINMAX NAMJEŠTAJ</option>
            <option>HRAST s.r. Kostajnica</option>
            <option>MURGE s.r. Teslić</option>
            <option>AG COMPANY Modriča</option>
            <option>ČELEBIJA d.o.o. Sanski Most</option>
            <option>PILANA PEPEX Zvornik</option>
            <option>RAHIMIĆ DESIGN d.o.o. Prnjavor</option>
            <option>MULIĆ s.r. Modriča</option>
            <option>BAJRIĆ s.r. Maglaj</option>
            <option>FINAL GROUP d.o.o. Sanski Most</option>
            <option>ENI EM d.o.o. Doboj Jug</option>
            <option>MARIN COMERCE d.o.o. Drvar</option>
            <option>AHI TRADE d.o.o. Kalesija</option>
            <option>ANJA I NAĐA d.o.o. Drvar</option>
            <option>AD NAMJEŠTAJ z.r. Modriča</option>
            <option>SANJO COM d.o.o.</option>
            <option>IMEA WOOD Doboj</option>
            <option>ASIKS d.o.o. Bosanski Petrovac</option>
            <option>CVANIC d.o.o. Doboj</option>
            <option>MASIV s.r. Doboj</option>
            <option>M DIZAJN s.r. Teslić</option>
            <option>DRVOELEGANT s.r Gornji Vakuf</option>
            <option>DRVO-DIZAJN d.o.o. Odžak</option>
            <option>IZAZOV d.o.o. Kalesija</option>
            <option>PANEL HOLZ d.o.o. Prijedor</option>
            <option>OBRT RAMIĆ Bosanski Petrovac</option>
            <option>EURO BAU d.o.o. Ugljevik</option>
            <option>BUDO EXPORT d.o.o. Žepče</option>
            <option>SMARVET d.o.o. Ključ</option>
            <option>SANI-GLOBAL Novi Grad</option>
            <option>ZURAPOVIĆ DAMIR s.r. Šamac</option>
            <option>ROSINJ d.o.o. Gornji Vakuf</option>
            <option>EDO d.o.o. Kotor Varoš</option>
            <option>Minalli</option>
            <option>Alisa Teletovic</option>
            <option>NEVA doo</option>
            <option>agha-kids furniture</option>
            <option>Mourah doo</option>
            <option>Winer d.o.o.</option>
            <option>Dallas International</option>
            <option>G Wood by Goletić</option>
            <option>Simperfect</option>
            <option>WMTA</option>
            <option>Mrak</option>
            <option>Bapas Consulting</option>
          </select>
          <br />
          <span> {{ currentProduct.exhibitor }}</span>
        </div>
        <hr />

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
    Navigation,
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