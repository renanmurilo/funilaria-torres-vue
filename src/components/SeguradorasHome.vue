<template>
  <section id="seguradoras">
    <div class="container">
      <h2>Seguradoras</h2>
      <div class="row">
        <div class="col-md-4" v-for="(seguras, index) in segura" :key="index">
          <div class="card" style="width: 20rem;">
            <img class="card-img-top" :src="seguras.image" alt="Imagem de capa do card" />
            <div class="card-body">
              <h5 class="card-title">{{ seguras.title}}</h5>
              <p
                class="card-text"
              >Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
            </div>
          </div>
        </div>
        <div class="texto-btn">
          <p>Atendemos a sua seguradora!</p>
          <router-link to="/seguradoras" class="btn">Seguradoras</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SeguradorasHome",
  data() {
    return {
      segura: [
        {
          id: 0,
          title: "Porto Seguro",
          image: "./images/porto-seguro.jpg"
        },
        {
          id: 1,
          title: "Allianz",
          image: "./images/allianz.jpg"
        },
        {
          id: 2,
          title: "Tokio Marine",
          image: "./images/tokio-marine.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
#seguradoras {
  padding: 50px 0px;
  background-color: #000000;
}

h2 {
  font-size: 36px;
  color: #fec63e;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 50px;
  position: relative;
  display: flex;
  justify-content: center;
}

h2::after {
  content: "";
  position: absolute;
  width: 70px;
  border: 2px solid #fec63e;
  bottom: 40px;
}
.card {
  border-radius: 0px;
  border: 0px solid #000000;
  align-items: center;
}
.card img {
  width: 60%;
  text-align: center;
}

.card-body {
  text-align: center;
  background-color: #fec63e;
}
.card-title {
  text-transform: uppercase;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title::after {
  content: "";
  position: absolute;
  width: 50px;
  border: 1px solid #000000;
  bottom: -5px;
}

.row {
  justify-content: center;
  text-align: center;
}
.col-md-4 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.texto-btn {
  padding: 40px 0px;
}

.texto-btn p {
  color: #fff;
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
  color: #fff;
  border: 4px solid #fff;
}

@media screen and (max-width: 992px) {
  .card {
    margin-top: 50px;
  }
}
</style>
