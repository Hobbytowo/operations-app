<template>
  <div class="container">
    <h1 class="title">Jaką operację chcesz wykonać?</h1>

    <div class="radios">
      <div class="radio-wrapper">
        <input class="radio" type="radio" id="one" value="Dodawanie" v-model="chosenOperation">
        <label class="label" for="one">Dodawanie ( + )</label>
      </div>

      <div class="radio-wrapper">
        <input class="radio" type="radio" id="Odejmowanie" value="Odejmowanie" v-model="chosenOperation">
        <label class="label" for="Odejmowanie">Odejmowanie ( - )</label>
      </div>

      <div class="radio-wrapper">
        <input class="radio" type="radio" id="Mnożenie" value="Mnożenie" v-model="chosenOperation">
        <label class="label" for="Mnożenie">Mnożenie ( * )</label>
      </div>

      <div class="radio-wrapper">
        <input class="radio" type="radio" id="Dzielenie" value="Dzielenie" v-model="chosenOperation">
        <label class="label" for="Dzielenie">Dzielenie ( / )</label>
      </div>
    </div>

    <form-component v-if="chosenOperation" :operation="chosenOperation"/>
  </div>
</template>

<script>
import FormComponent from '@/components/form'

export default {
  components: {
    FormComponent
  },
  data () {
    return {
      chosenOperation: ''
    }
  }
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
    margin-bottom: 30px;
    color: #d5684d;
  }

  .radios {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    margin-bottom: 30px;
  }

  .label {
    cursor: pointer;
    transition: color .3s;
    outline: none;

    &:hover {
      color: #e0e076;
    }
  }

  .radio:checked + .label{
    color: #e0e076;
  }
</style>
