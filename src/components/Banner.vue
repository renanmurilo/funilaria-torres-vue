<template>
  <section id="banner">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div>
            <h1>AUTOS, MOTOS E CAMINHÕES</h1>
          </div>
          <div class="texto-banner">
            <div>"Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>Doloremque quaerat sapiente exercitationem tempora"</div>
            <!-- <ModalHome /> -->
            <router-link to="/contato" class="btn">Orçamento</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import ModalHome from "@/components/ModalHome.vue";

export default {
  name: "Banner"
  // components: {
  //   ModalHome
  // }
};
</script>

<style scoped>
#banner {
  position: relative;
  background-image: url("https://picsum.photos/1253/340");
  background-size: cover;
  width: 100%;
  clear: both;
}

h1 {
  color: #fff;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1::after {
  content: "";
  position: absolute;
  border: 2px solid #fff;
  bottom: 170px;
  width: 70px;
}

.texto-banner {
  text-align: center;
  padding-top: 30px;
  color: #fff;
  font-size: 14px;
}
.btn {
  width: 180px;
  max-width: 100%;
  border: 4px solid #fec63e;
  color: #fec63e;
  border-radius: 0px;
  text-align: center;
  margin: 30px auto;
  font-size: 16px;
  text-transform: uppercase;
}

.btn:hover {
  color: #fff;
  border: 4px solid #fff;
}

@media screen and (max-width: 992px) {
  h1 {
    text-align: center;
  }
  h1::after {
    display: none;
  }
  .texto-banner {
    text-align: center;
  }
}
</style>
