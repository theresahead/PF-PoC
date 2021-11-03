<template>
  <section>
    <h2 class="greeting">Greeting</h2>
  </section>
  <section>
    <h2>Accounts</h2>
    <Card>
      <p>Carousel</p>
    </Card>
  </section>
  <section>
    <Card>
      <p class="title">Progress</p>
    </Card>
    <Card>
      <p class="title">Credit</p>
    </Card>
  </section>
  <section>
    <Card>
      <p>Icon</p>
      <p class="title">Text to borrow</p>
      <p>Your pre-approved to enroll in text to borrow</p>
    </Card>
  </section>
  <article>
    <h2>Financial Tips & Tricks</h2>
    <Card>
      <p>Image</p>
      <p>Looking for tips to paying off your loan even quicker?</p>
      <p>Learn more "Link"</p>
    </Card>
  </article>
  <section>
    <h2>Recommended Products</h2>
    <Card>
      <p>Icon</p>
      <p>Payday Loan</p>
      <p>Star rating</p>
      <p>
        Get a little extra money before your next paycheck with an Advance
        America Payday Loan (also called a Cash Advance)
      </p>
      <p>Instant Apply (Link)</p>
      <p>Learn More (Link)</p>
    </Card>
  </section>
  <section>
    <h2>All Products</h2>
    <IconLink linkText="Cash Advances" imgPath="@/images/icon-credit.svg" />
    <IconLink />
    <IconLink />
    <IconLink />
    <IconLink />
    <IconLink />
    <IconLink />
    <IconLink />
    <IconLink />
    <IconLink />
    <IconLink />
  </section>
  <section>
    <h2>chat bot</h2>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
import IconLink from "@/components/IconLink.vue";
export default {
  // name: "Home",
  components: {
    Card,
    IconLink,
  },
};
</script>
