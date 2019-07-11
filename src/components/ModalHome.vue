<template>
  <div>
    <button class="btn" @click="modalShow = !modalShow">ORÇAMENTO</button>
    <b-modal id="modal-xl" size="xl" v-model="modalShow">
      <!-- <div class="row">
        <div class="col-12">
          <form>
            <div class="col-6 form-group">
              <label for="nome">Nome:</label>
              <input type="text" class="form-control" v-model="nome" id="nome" />
              <label for="telefone">Telefone:</label>
              <input type="text" class="form-control" v-model="telefone" id="telefone" />
            </div>
            <div class="col-12 form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" v-model="email" id="email" />
            </div>
          </form>
        </div>
      </div>-->
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ModalHome",
  data() {
    return {
      modalShow: false
    };
  }
};
</script>

<style scoped>
.btn {
  width: 200px;
  max-width: 100%;
  border: 4px solid #fec63e;
  color: #fec63e;
  border-radius: 0px;
  text-align: center;
  margin: 30px auto;
  font-size: 18px;
}

.btn:hover {
  color: #fff;
  border: 4px solid #fff;
}

form {
  display: flex;
}
</style>
