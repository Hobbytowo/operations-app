<template>
  <div class="container">
    <div class="inputs">
      <div class="input-wrapper">
        <label
          class="label"
          :for="operationsData.id1"
          v-text="operationsData.name1"
        />

        <input
          class="input"
          :id="operationsData.id1"
          type="number"
          v-model="nr1"
        >
      </div>

      <div class="input-wrapper">
        <label
          class="label"
          :for="operationsData.id2"
          v-text="operationsData.name2"
        />

        <input
          class="input"
          :id="operationsData.id2"
          type="number"
          v-model="nr2"
        >
      </div>
    </div>

    <div class="buttons">
      <button v-if="!createOperation" class="button" @click="click">
        Stwórz działanie
      </button>

      <button class="button button--clear" @click="clearData">
        Wyczyść dane
      </button>
    </div>

    <span class="error">{{ error }}</span>

    <component
      v-if="nr1 && nr2 && createOperation"
      :is="operation"
      :number1="nr1"
      :number2="nr2"
    />
  </div>
</template>

<script>
  import Dodawanie from './dodawanie'
  import Odejmowanie from './odejmowanie'
  import Mnożenie from './mnozenie'
  import Dzielenie from './dzielenie'

  export default {
    components: {
      Dodawanie,
      Odejmowanie,
      Mnożenie,
      Dzielenie
    },
    props: {
      operation: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        nr1: NaN,
        nr2: NaN,
        error: '',
        createOperation: false
      }
    },
    computed: {
      operationsData () {
        const operationsMap = {
          'Dodawanie': {
            'name1': 'Składnik',
            'id1': 'skladnik1',
            'name2': 'Składnik',
            'id2': 'skladnik2'
          },
          'Odejmowanie': {
            'name1': 'Odjemna',
            'id1': 'odjemna',
            'name2': 'Odjemnik',
            'id2': 'odjemnik'
          },
          'Mnożenie': {
            'name1': 'Czynnik',
            'id1': 'czynnik1',
            'name2': 'Czynnik',
            'id2': 'czynnik2'
          },
          'Dzielenie': {
            'name1': 'Dzielna',
            'id1': 'dzielna',
            'name2': 'Dzielnik',
            'id2': 'dzielnik'
          }
        }

        return operationsMap[this.operation]
      }
    },
    methods: {
      click () {
        if (!this.nr1 || !this.nr2) {
          this.error = 'Wpisz obie liczby'
          return
        }

        this.error = ''
        this.createOperation = true
      },
      clearData () {
        this.nr1 = NaN
        this.nr2 = NaN
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .inputs {
    display: flex;
    margin-bottom: 30px;
  }

  .input-wrapper {
    margin: 20px;
  }

  .label {
    margin-right: 15px;
  }

  .input {
    border-radius: 3px;
    border: 0;
    padding: 4px;
  }

  .input::selection .label{
    color: yellow;
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .button {
    padding: 0 20px;
    margin-bottom: 30px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 20px;
    box-shadow: none;

    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;

    cursor: pointer;
    transition: background 0.2s ease-in;
    outline: none;

    &:hover {
      background: #d5684d;
    }
  }

  .error {
    color: #ffb19e;
    font-weight: 700;
  }
</style>
