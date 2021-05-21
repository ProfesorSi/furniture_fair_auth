<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <!-- <router-link to="/" class="navbar-brand"
            >Sajam namještaja</router-link
          > -->
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/products" class="nav-link">Proizvodi</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/add" class="nav-link">Dodaj proizvod</router-link>
      </li>
    </div>
    <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link to="/">Odjava</router-link>
            </li>
          </ul>
        </div>
  </nav> 
</template>

<script>
export default {

}
</script>

<style scoped>



.active {
    color: white;
}

</style>