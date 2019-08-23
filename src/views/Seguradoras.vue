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
          title: "Allianz",
          text:
            "A Allianz oferece uma vasta solução de seguros e de gestão de ativos, com produtos e serviços que respondem à necessidade de mais de 85 milhões de Clientes em mais de 70 países."
        },
        {
          id: 2,
          images: "./images/tokio-marine.png",
          title: "Tokio Marine",
          text:
            "A Tokio Marine é uma Seguradora nascida no Japão e criada no Brasil. Isto significa que aliamos à solidez e aos valores de um dos mais antigos grupos seguradores do mundo, a tranquilidade e personalização do atendimento brasileiro."
        },
        {
          id: 3,
          images: "./images/bradesco.png",
          title: "Bradesco",
          text:
            "Líder de mercado no Brasil e na América Latina, trabalhamos para oferecer o melhor atendimento a você, nosso segurado. "
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
  margin-top: 45px;
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

@media screen and (max-width: 992px) {
  .flex-row,
  .flex-row-reverse {
    flex-direction: column !important;
  }

  .card img {
    max-width: 80%;
    margin: 0 auto;
  }
}
</style>
