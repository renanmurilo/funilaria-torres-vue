<template>
  <section id="contato">
    <div class="container">
      <h2>Contato</h2>
      <div>
        <p>Tire suas dúvidas com a gente.</p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="name">Nome:</label>
              <b-form-input
                type="text"
                class="form-control"
                v-model="name"
                :state="nameState"
                aria-describedby="input-live-help input-live-feedback"
                id="input-live"
                trim
              />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" v-model="email" id="email" />
            </div>
            <div class="form-group">
              <label for="telefone">Telefone:</label>
              <input type="telefone" class="form-control" v-model="telefone" id="telefone" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Mensagem</label>
              <textarea class="form-control" v-model="message" id="message" rows="3"></textarea>
            </div>
            <button type="submit" class="btn">Enviar</button>
          </form>
        </div>
        <div class="col-md-6">
          <div class="informacoes">
            <div class="dados">
              <h3>Dados</h3>
              <p>(11) 4742-6094</p>
              <a href="https://api.whatsapp.com/send?phone=5511973258974" target="_blank">
                <img src="../assets/whatsapp.png" alt="whatsapp" /> (11) 97325-8974
              </a>
              <p>contato@funilariatorres.com.br</p>
            </div>
            <div class="endereco">
              <p>Rua Santa Gema, n° 167, Rincão das Lendas</p>
              <p>Suzano - SP, CEP: 08630-030</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2077.274348913903!2d-46.33318786007474!3d-23.65648772065178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce724899d54865%3A0x83a06e99d78d5ccb!2sR.+Santa+Gema%2C+167+-+Rinc%C3%A3o+das+Lendas%2C+Suzano+-+SP!5e0!3m2!1spt-BR!2sbr!4v1562873797161!5m2!1spt-BR!2sbr"
            width="100%"
            height="600"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contato",
  data() {
    return {
      name: "",
      email: "",
      telefone: "",
      message: ""
    };
  },
  computed: {
    nameState() {
      return this.name.length > 2 ? true : false;
    }
  },
  created() {
    document.title = "Contato";
  }
};
</script>

<style scoped>
#contato {
  margin-top: 50px;
}

h2 {
  font-size: 36px;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  position: relative;
}

h2::after {
  content: "";
  position: absolute;
  width: 50px;
  border: 2px solid #000000;
  bottom: 0px;
}

form {
  padding: 40px 0;
}

form .form-control {
  border-radius: 0px;
  border: 4px solid #fec63e;
  margin: 0px;
}

form label {
  margin: 0px;
}

.btn {
  border: 4px solid #fec63e;
  border-radius: 0px;
  width: 150px;
  max-width: 100%;
  text-align: center;
  color: #fec63e;
  font-size: 16px;
  text-transform: uppercase;
}

.btn:hover {
  border: 4px solid #000000;
  color: #000000;
}

.informacoes {
  padding-top: 60px;
  padding-left: 80px;
}

.informacoes h3 {
  text-transform: uppercase;
  color: #fec63e;
  padding-bottom: 20px;
}

.informacoes .dados {
  font-size: 18px;
  color: #000000;
  line-height: 13px;
}
.informacoes .dados img {
  margin-right: 5px;
}

.informacoes .dados a {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: none;
  color: #000000;
  clear: both;
}

.informacoes .endereco {
  padding-top: 40px;
  line-height: 12px;
  font-size: 18px;
  color: #000000;
}

.container-fluid {
  padding: 0px;
}

.container-fluid .row {
  margin-left: 0px;
  margin-right: 0px;
}

.container-fluid .row .col-12 {
  padding: 0px;
}

@media screen and (max-width: 992px) {
  .informacoes {
    padding: 30px 0px;
    text-align: center;
  }
  .informacoes .dados a {
    justify-content: center;
  }
}
</style>
