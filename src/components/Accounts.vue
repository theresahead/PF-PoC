<template>
  <Card class="accounts">
    <div class="inner-top">
      <h3>{{ name }}</h3>
      <div class="amount-paid">
        <p>{{ percentage }}% paid</p>
        <div
          role="amount-paid"
          aria-valuenow="65"
          aria-valuemin="0"
          aria-valuemax="100"
          style="--value: 61"
          class="paid-bar"
        ></div>
      </div>
    </div>
    <p class="total">${{ total }}</p>
    <p class="card-num">{{ cardNum }}</p>
    <div class="buttons">
      <Button label="Pay $1228" primary spaceBetween />
      <Button label="Cash Advance" primary spaceBetween />
      <Button primary isIcon icon="images/icon-arrow.svg" />
    </div>
  </Card>
</template>

<script>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
export default {
  name: "Accounts",
  components: {
    Card,
    Button,
  },
  props: {
    name: String,
    percentage: String,
    total: String,
    cardNum: String,
  },
};
</script>

<style lang="scss">
.accounts {
  max-width: 60%;
  h3 {
    font-size: 0.75rem;
    margin: 0;
  }
  .total {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .card-num {
    color: #a5a5a5;
    font-size: 0.75rem;
    margin: 0.5rem 0 1.5rem 0;
  }
}
.amount-paid {
  border: 1px solid #e2e2e2;
  padding: 0.5rem;
  border-radius: 30px;
  width: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0 7px 0 0;
    font-size: 0.5rem;
  }
}
.inner-top {
  display: flex;
  justify-content: space-between;
}
// .paid-bar {
//   height: 5.5px;
//   width: 5.5px;
// }
@keyframes growProgressBar {
  0%,
  33% {
    --pgPercentage: 0;
  }
  100% {
    --pgPercentage: var(--value);
  }
}

@property --pgPercentage {
  syntax: "<number>";
  inherits: false;
  initial-value: 0;
}

div[role="amount-paid"] {
  --size: 7px;
  --fg: #000;
  --bg: #f7f7f7;
  --pgPercentage: var(--value);
  animation: growProgressBar 3s 1 forwards;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: radial-gradient(
      closest-side,
      white 70%,
      transparent 0 99.9%,
      white 0
    ),
    conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0);
  font-family: Helvetica, Arial, sans-serif;
  font-size: calc(var(--size) / 5);
  color: var(--fg);
}

// Dynamicaly control value
// div[role="progressbar"]::before {
//   counter-reset: percentage var(--value);
//   content: counter(percentage) "%";
// }
</style>
