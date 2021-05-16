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
          <!-- <input
            class="form-control"
            id="exhibitor"
            required
            v-model="product.exhibitor"
            name="exhibitor"
          /> -->
          <select v-model="product.exhibitor">
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
            <option>Magični san</option>
             <option>VALJEVAC STOLARIJA</option>
          </select>
          <br />
          <span> {{ product.exhibitor }}</span>
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
        exhibitor: "",
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
        exhibitor: this.product.exhibitor,
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