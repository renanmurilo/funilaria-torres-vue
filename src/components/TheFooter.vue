<template>
  <footer>
    <p>
      Desenvolvido por
      <a href="https://renanmurilo.dev" target="_blank">Renan Murilo</a>. Todos os direitos reservados.
    </p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style scoped>
footer {
  display: flex;
  background-color: #fec63e;
  padding: 20px 0;
  text-align: center;
  justify-content: center;
  font-size: 14px;
  color: #000000;
  position: relative;
}

a {
  text-decoration: none;
  color: #000000;
}

a:hover {
  color: #fff;
}
</style>
