<template>
  <section id="seguradoras">
    <div class="container">
      <h2>Seguradoras</h2>
      <div class="row">
        <div class="col-md-4">
          <div>
            <b-card
              title="Porto Seguro"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            </b-card>
          </div>
        </div>
        <div class="col-md-4">
          <div>
            <b-card
              title="ALLIANZ"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            </b-card>
          </div>
        </div>
        <div class="col-md-4">
          <div>
            <b-card
              title="Tokio Marine"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            </b-card>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="texto-btn">
          <p>Clique aqui e veja todas as seguradoras.</p>
          <router-link to="/seguradoras" class="btn">Seguradoras</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SeguradorasHome"
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
</style>
