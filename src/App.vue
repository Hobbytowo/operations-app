<template>
  <div class="container">
    <h1 class="title">Jaką operację chcesz wykonać?</h1>

    <div class="buttons">
      <button class="btn btn-do">Dodawanie</button>
      <button class="btn btn-od">Odejmowanie</button>
      <button class="btn btn-mn">Mnożenie</button>
      <button class="btn btn-dz">Dzielenie</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
  body {
    background-color: #444;
    color: #eee;
    font-family: 'Lato', sans-serif;
  }

  .title {
    text-align: center;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .btn {
    padding: 0 20px;
    margin-bottom: 30px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 20px;
    box-shadow: none;

    font-size: 18px;

    cursor: pointer;
    transition: background 0.2s;
    outline: none;

    &:hover {
      background: #d5684d;
    }
  }
</style>
