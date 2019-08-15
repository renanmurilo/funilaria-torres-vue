<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-0">
        <header>
          <b-navbar toggleable="lg">
            <b-navbar-brand>
              <div>Funilaria</div>
              <div class="brand">Torres</div>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item href="#" to="/">Home</b-nav-item>
                <b-nav-item href="#" to="/servicos">Serviços</b-nav-item>
                <b-nav-item href="#" to="/seguradoras">Seguradoras</b-nav-item>
                <b-nav-item href="#" to="/contato">Contato</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style scoped>
header {
  background-color: #fec63e;
}

.navbar {
  margin: 0 100px;
}
#nav-collapse {
  text-transform: uppercase;
  justify-content: flex-end;
}

li {
  padding: 15px 18px;
}

.navbar-brand {
  font-size: 28px;
  line-height: 24px;
  font-weight: bold;
  /* border: 5px solid #000000; */
  padding: 4px;
}

.brand {
  padding-left: 60px;
}

/* .navbar .navbar-brand:hover {
  color: #ffffff;
  transition: all 0.3s ease;
} */

.navbar-light .navbar-nav .nav-link {
  color: #000000;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 18px;
}
.navbar .navbar-nav .nav-link.router-link-exact-active,
.navbar-light .navbar-nav .nav-link:hover {
  color: #fff;
  transition: all 0.3s ease;
}

li a {
  color: #fff;
}

@media screen and (max-width: 992px) {
  .navbar {
    margin: 0 auto;
  }
  li {
    padding: 0px;
  }
}
</style>
