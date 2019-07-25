<template>
  <section id="servicos">
    <div v-if="modal == true" class="modal-vue" @click="fecharModal">
      <div class="modal-body">
        <button @click="modal = false" class="modal_fechar">X</button>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <carousel
                :perPage="1"
                :loop="true"
                :navigationEnabled="true"
                :paginationEnabled="false"
              >
                <slide v-for="(foto, index) in servico.fotos" :key="index">
                  <div class="row">
                    <div class="col-md-12">
                      <img :src="foto" class="img-fluid" alt />
                    </div>
                  </div>
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Serviços</h2>
      <div class="row">
        <div class="col-md-4" :key="index" v-for="(servico, index) in services">
          <div class="imagem">
            <img class="img-fluid" :src="servico.img" alt />
            <button type="button" class="btn" @click="abrirModal(servico)">{{ servico.titulo }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "servicos",
  methods: {
    abrirModal(servico) {
      this.modal = true;
      this.servico = servico;
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) this.modal = false;
    }
  },
  data() {
    return {
      selected: Object,
      modal: Boolean,
      services: [
        {
          id: 0,
          img: "https://picsum.photos/400/400",
          titulo: "Riscos e Amassados",
          fotos: [
            "https://picsum.photos/1040/500",
            "https://picsum.photos/1040/500",
            "https://picsum.photos/1040/500"
          ]
        },
        {
          id: 1,
          img: "https://picsum.photos/400/400",
          titulo: "Reparos em Rodas",
          fotos: [
            "https://picsum.photos/1040/500",
            "https://picsum.photos/1040/500",
            "https://picsum.photos/1040/500"
          ]
        },
        {
          id: 2,
          img: "https://picsum.photos/400/400",
          titulo: "Reparos em Pintura",
          fotos: [
            "https://picsum.photos/1040/500",
            "https://picsum.photos/1040/500",
            "https://picsum.photos/1040/500"
          ]
        },
        {
          id: 3,
          img: "https://picsum.photos/400/400",
          titulo: "Funilaia e Pintura",
          fotos: [
            "https://picsum.photos/1040/500",
            "https://picsum.photos/1040/500",
            "https://picsum.photos/1040/500"
          ]
        },
        {
          id: 4,
          img: "https://picsum.photos/400/400",
          titulo: "Polimento e cristalização",
          fotos: [
            "https://picsum.photos/1040/500",
            "https://picsum.photos/1040/500",
            "https://picsum.photos/1040/500"
          ]
        }
      ]
    };
  },
  created() {
    document.title = "Serviços";
  }
};
</script>

<style scoped>
#servicos {
  padding: 40px 0;
}

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
.row {
  justify-content: center;
}

.imagem {
  width: 300px;
  margin-top: 25px;
  margin-bottom: 25px;
}

.btn {
  width: 300px;
  background-color: #fec63e;
  color: #000000;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  margin-top: 25px;
}

.modal-vue {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
}

.modal-body {
  background-color: white;
  color: red;
  border-radius: 10px;
  margin: 0 3%;
}

.modal_fechar {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 1rem;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.col-md-12 {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

@media screen and (max-width: 992px) {
  .col-md-12 {
    margin: 0 !important;
  }
  .col-md-4 {
    display: flex;
    justify-content: center;
  }
}
</style>
