<template>
  <Navigation
    @toggle-nav="toggleNav"
    title="Purpose"
    :navLinks="navLinks"
    :isOpen="navOpen"
    isLoggedIn
  />
  <section>
    <Greeting icon="images/icon-wave.png" name="Kai" />
  </section>
  <section>
    <h2>Accounts</h2>
    <Accounts
      name="Advance Virtual Card"
      percentage="50"
      total="982.56"
      cardNum="****5591"
    />
  </section>
  <section class="progress-credit">
    <Progress
      title="Purpose Progress"
      icon="images/icon-dollar.png"
      value="8.5 pts"
    />
    <CreditHub title="Credit Hub" points="+2 pts" value="612" />
  </section>
  <section>
    <Promotion
      icon="images/icon-micro-loan.svg"
      title="Text to borrow"
      text="Your pre-approved to 
enroll in text to borrow"
    />
  </section>
  <article>
    <h2>Financial Tips & Tricks</h2>
    <Article
      image="images/mountain.png"
      text="Looking for tips to paying off your loan even quicker?"
    />
  </article>
  <section>
    <h2>Recommended Products</h2>
    <Product
      icon="images/icon-star.svg"
      title="Payday Loan"
      rating="images/rating.png"
      text="Get a little extra money before your next paycheck with an Advance America Payday Loan (also called a Cash Advance)."
    />
  </section>
  <section>
    <h2>All Products</h2>
    <IconLink
      link="/about"
      linkText="Cash Advances"
      imgPath="images/icon-advances.svg"
    />
    <IconLink
      link="/about"
      linkText="Credit Hub"
      imgPath="images/icon-meter.svg"
    />
    <IconLink
      link="/about"
      linkText="Emergency Loans"
      imgPath="images/icon-shield.svg"
    />
    <IconLink
      link="/about"
      linkText="Installment Loans"
      imgPath="images/icon-installment.svg"
    />
    <IconLink
      link="About"
      linkText="Lines of Credit"
      imgPath="images/icon-credit-line.svg"
    />
    <IconLink
      link="/about"
      linkText="Micro Loans"
      imgPath="images/icon-micro-loan.svg"
    />
    <IconLink
      link="/about"
      linkText="Payday Loans"
      imgPath="images/icon-wallet.svg"
    />
    <IconLink
      link="/about"
      linkText="Purpose Progress"
      imgPath="images/icon-pp.svg"
    />
    <IconLink
      link="/about"
      linkText="Title Loans"
      imgPath="images/icon-hand.svg"
    />
  </section>
  <!-- <section>
    <h2>chat bot</h2>
  </section> -->
</template>

<script>
import IconLink from "@/components/IconLink.vue";
import Product from "@/components/Product.vue";
import Article from "@/components/Article.vue";
import Promotion from "@/components/Promotion.vue";
import Progress from "@/components/Progress.vue";
import CreditHub from "@/components/CreditHub.vue";
import Accounts from "@/components/Accounts.vue";
import Greeting from "@/components/Greeting.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Home",
  components: {
    IconLink,
    Product,
    Article,
    Promotion,
    Progress,
    CreditHub,
    Accounts,
    Greeting,
    Navigation,
  },
  data() {
    return {
      navLinks: [
        { name: "Purpose Progress", id: "001" },
        { name: "Credit Hub", id: "002" },
        { name: "Products", id: "003" },
        { name: "Customer Info", id: "004" },
      ],
      navOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
  },
};
</script>

<style lang="scss">
.progress-credit {
  display: flex;
}
</style>
