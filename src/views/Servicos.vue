<template>
  <section id="servicos">
    <div v-if="modal == true" @click="modal = false" class="modal-vue">
      <div class="modal-body">{{ selected.titulo }}</div>
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
    abrirModal(item) {
      this.modal = true;
      this.selected = item;
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
          titulo: "Riscos e Amassados"
        },
        {
          id: 1,
          img: "https://picsum.photos/400/400",
          titulo: "Reparos em Rodas"
        },
        {
          id: 2,
          img: "https://picsum.photos/400/400",
          titulo: "Reparos em Pintura"
        },
        {
          id: 3,
          img: "https://picsum.photos/400/400",
          titulo: "Funilaia e Pintura"
        },
        {
          id: 4,
          img: "https://picsum.photos/400/400",
          titulo: "Polimento e cristalização"
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
  max-width: 300px;
}
</style>
