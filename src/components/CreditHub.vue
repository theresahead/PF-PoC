<template>
  <Card class="credit">
    <h3>{{ title }}</h3>
    <div class="credit-inner">
      <div
        role="progressbar"
        aria-valuenow="65"
        aria-valuemin="0"
        aria-valuemax="100"
        style="--value: 61"
        class="credit-progress credit-inner"
      >
        <p class="points">{{ points }}</p>
        <p class="value">{{ value }}</p>
      </div>
    </div>
    <Button label="Learn More" linkStyle />
  </Card>
</template>

<script>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
export default {
  name: "CreditHub",
  components: {
    Card,
    Button,
  },
  props: {
    title: String,
    points: String,
    value: String,
  },
};
</script>

<style lang="scss">
.credit {
  display: flex;
  flex-direction: column;
  width: 50%;
  h3 {
    margin: 0;
    max-width: 50%;
    margin-bottom: 5px;
  }
  .btn {
    margin-top: auto;
    align-self: center;
  }
}
.credit-inner {
  display: flex;
  justify-content: center;
  .points {
    font-size: 0.75rem;
    color: #a5a5a5;
    margin: 3px 0;
  }
  .value {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
  }
}
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

div[role="progressbar"] {
  --size: 5rem;
  --fg: #000;
  --bg: #f7f7f7;
  --pgPercentage: var(--value);
  animation: growProgressBar 3s 1 forwards;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
      closest-side,
      white 90%,
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
