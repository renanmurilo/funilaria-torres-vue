<template>
  <section id="seguradoras">
    <div class="container">
      <h2>Seguradoras</h2>
      <div class="row">
        <div class="col-md-12">
          <div class="card-group" v-for="(segura, index) in segurado" :key="index">
            <b-card
              v-if="index%2 == 0"
              :img-src="segura.images"
              :img-alt="segura.titulo"
              class="mb-3"
              img-left
              :title="segura.title"
            >
              <b-card-text>{{segura.text}}</b-card-text>
            </b-card>
            <b-card
              v-if="index%2 !== 0"
              :img-src="segura.images"
              :img-alt="segura.titulo"
              class="mb-3"
              img-right
              :title="segura.title"
            >
              <b-card-text>{{segura.text}}</b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "seguradoras",
  data() {
    return {
      segurado: [
        {
          id: 0,
          images: "./images/porto-seguro.jpg",
          title: "Porto Seguro",
          text:
            "Com o Porto Seguro Auto você tem assistência 24h, serviços para sua casa e vantagens para toda a família. Um seguro completo que vai muito além do veículo. Quem tem Porto Seguro Auto resolve tudo sem sair do sofá."
        },
        {
          id: 1,
          images: "./images/allianz.jpg",
          title: "Allianz"
        },
        {
          id: 2,
          images: "./images/tokio-marine.png",
          title: "Tokio Marine"
        },
        {
          id: 3,
          images: "https://placekitten.com/300/300",
          title: "Bradesco"
        }
      ]
    };
  },
  created() {
    document.title = "Seguradoras";
  }
};
</script>

<style scoped>
h2 {
  position: relative;
  font-size: 36px;
  color: #000000;
  margin-top: 25px;
  margin-bottom: 40px;
  text-transform: uppercase;
}

h2::before {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 50px;
  border: 2px solid #000000;
}

.card-group {
  margin-top: 50px;
  margin-bottom: 40px;
}

.card-title {
  text-transform: uppercase;
}
</style>
