<template>
  <section id="servicos">
    <div class="container">
      <h2>Serviços</h2>
      <div class="row">
        <div class="col-12">
          <carousel :perPage="1" :loop="true" :autoplay="true" :navigationEnabled="true">
            <slide>
              <div class="row">
                <div class="col-6">
                  <img src="https://picsum.photos/500/300" class="img-fluid" alt />
                </div>
                <div class="col-6">
                  <img src="https://picsum.photos/500/300" class="img-fluid" alt />
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <img src="https://picsum.photos/1054/350" class="img-fluid" alt />
                </div>
              </div>
            </slide>
            <slide>
              <div class="row">
                <div class="col-6">
                  <img src="https://picsum.photos/500/300" class="img-fluid" alt />
                </div>
                <div class="col-6">
                  <img src="https://picsum.photos/500/300" class="img-fluid" alt />
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <img src="https://picsum.photos/1054/350" class="img-fluid" alt />
                </div>
              </div>
            </slide>
            <slide>
              <div class="row">
                <div class="col-6">
                  <img src="https://picsum.photos/500/300" class="img-fluid" alt />
                </div>
                <div class="col-6">
                  <img src="https://picsum.photos/500/300" class="img-fluid" alt />
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <img src="https://picsum.photos/1054/350" class="img-fluid" alt />
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
      <div class="row">
        <div class="texto-btn">
          <p>Veja mais dos nossos serviços.</p>
          <router-link to="/servicos" class="btn">Serviços</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "HomeServicos",
  data() {
    return {};
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>
#servicos {
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

h2 {
  font-size: 36px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 40px;
  text-transform: uppercase;
}

h2::before {
  content: "";
  position: absolute;
  top: 70px;
  width: 50px;
  border: 2px solid #000000;
}

.row {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 15px;
  justify-content: center;
  text-align: center;
}

.texto-btn {
  padding: 40px 0px;
}

.texto-btn p {
  color: #000000;
  font-size: 14px;
}

.btn {
  color: #fec63e;
  border: 4px solid #fec63e;
  font-size: 16px;
  border-radius: 0px;
  width: 180px;
  text-transform: uppercase;
  font-weight: 500;
}

.btn:hover {
  color: #000000;
  border: 4px solid #000000;
}
</style>
