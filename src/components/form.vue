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

    <button class="button" @click="click">
      Stwórz działanie
    </button>

    <span class="error">{{ error }}</span>
  </div>
</template>

<script>
  export default {
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
        error: ''
      }
    },
    computed: {
      operationsData () {
        const operationsMap = {
          'Dodawanie': {
            'name1': 'Składnik',
            'id1': 'skladnik1',
            'name2': 'Składnik',
            'id2': 'skladnik2',
            'sign': '+'
          },
          'Odejmowanie': {
            'name1': 'Odjemna',
            'id1': 'odjemna',
            'name2': 'Odjemnik',
            'id2': 'odjemnik',
            'sign': '-'
          },
          'Mnożenie': {
            'name1': 'Czynnik',
            'id1': 'czynnik1',
            'name2': 'Czynnik',
            'id2': 'czynnik2',
            'sign': '*'
          },
          'Dzielenie': {
            'name1': 'Dzielna',
            'id1': 'dzielna',
            'name2': 'Dzielnik',
            'id2': 'dzielnik',
            'sign': '/'
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

    font-size: 18px;

    cursor: pointer;
    transition: background 0.2s;
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
