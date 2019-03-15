<template>
  <div class="wrapper">
    <span class="sign">*</span>

    <table class="table">
      <tbody>
      <tr>
        <td class="td td--top" v-for="(col, idx) in colNr" :key="idx">
          <input
            class="inpu input--top"
            type="number"
            min="0"
            max="9"
          >
        </td>
      </tr>

      <tr>
        <td class="td td--nr" v-for="(nr, idx) in colMaxNr" :key="idx">
          {{ nr }}
        </td>
      </tr>

      <tr class="tr tr--border">
        <td class="td td--nr" v-for="(nr, idx) in colMinNr" :key="idx">
          {{ nr }}
        </td>
      </tr>

      <tr
        v-for="(row, rowIdx) in solutionRow"
        :key="rowIdx"
        :class="{'tr--border': rowIdx !== 0 && rowIdx === solutionRow - 1}"
      >
        <td v-for="(col, colIdx) in colNr" :key="colIdx">
          <input
            :class="{'input--disabled': colNr - colIdx <= rowIdx}"
            class="input input--solution"
            type="number"
            min="0"
            max="9"
            :disabled="colNr - colIdx <= rowIdx"
          >
        </td>
      </tr>

      <tr class="tr">
        <td v-for="(col, idx) in colNr" :key="idx">
          <input
            class="input input--solution input--solution2"
            type="number"
            min="0"
            max="9"
          >
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      number1: {
        type: String,
        required: true
      },
      number2: {
        type: String,
        required: true
      }
    },
    computed: {
      maxStr () {
        const maxNr = Math.max(this.number1 * 1, this.number2 * 1)
        return maxNr + ''
      },
      minStr () {
        const minNr = Math.min(this.number1 * 1, this.number2 * 1)
        return minNr + ''
      },
      colNr () {
        return this.maxStr.length + this.minStr.length + 1
      },
      colMaxNr () {
        return this.fillArray(this.maxStr)
      },
      colMinNr () {
        return this.fillArray(this.minStr)
      },
      solutionRow () {
        return this.minStr.length
      }
    },
    methods: {
      fillArray (string) {
        const arrToFill = Array.from(string.split('')).reverse()
        const arr = new Array(this.colNr).fill().map((nr, idx) => {
          return arrToFill[idx]
        })
        return arr.reverse()
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
  }

  .sign {
    font-size: 35px;
    padding-right: 45px;
    padding-top: 130px;
  }

  .table {
    border: 2px solid #000;
    border-radius: 3px;
    background-color: #fff;
    border-collapse: collapse;

    position: relative;

    &::before {
      content: '+';
      position: absolute;
      left: -60px;
      bottom: 40px;

      font-size: 35px;
    }
  }

  .tr--border {
    border-bottom: 5px solid black;
  }

  .td {
    color: black;
    text-align: center;

    &--nr {
      padding: 15px;
      border: 1px solid #999;
    }

    &--top {
      padding: 10px 0;
    }
  }

  .input {
    border: none;

    &--solution {
      font-size: 21px;
      font-weight: 700;
      padding: 15px 0 15px 25px;
      width: 35px;

      background: #e0e076;
    }

    &--solution2 {
      background: #d5684d;
    }

    &--disabled {
      background: rgba(200, 200, 200, 0.8);
    }

    &--top {
      padding-left: 14px;
      padding-right: 0;
      width: 30px;
      border: 1px solid rgba(212, 121, 121, 0.5);
    }
  }
</style>
