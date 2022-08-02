<template>
    <section>
        <strong>{{ ticket.title }}</strong>
        <span class="price">{{ vueNumberFormat(ticket.price, {prefix: "R$"}) }}</span>
    </section>
    <button class="qtyButton" @click.prevent="addQty"> 
        Qtd <span>{{ ticket.qtd }}</span>
        <img src="../assets/arrow-down.svg" />
    </button>
    <small>{{ ticket.description }}</small>
</template>

<script>
    export default {
    name: 'Ticket',
    props: {
        ticket: {}
    },
    data() {
        return {
            title: '',
        }
    },
    methods: {
        addQty() {
            alert("dev");
        }
    },
}
</script>



<style scoped>
  strong {font-size:.9em; line-height: 1.4em; font-weight: 500; display: block; margin-bottom: .4em;}
  small {font-size:.8em; opacity: .5; line-height: 1.4em; display: block;}
  .price {font-size:.9em; margin-left: .5em;}

  section {display: flex; justify-content: space-between;}

  .qtyButton {
    display: flex; 
    align-items: center; 
    padding:.3em 0 .3em .4em; 
    margin:0 0 .4em -.4em;
    border: 0; 
    border-radius: 3px; 
    background-color: transparent;
    transition: .2s;
    font-weight: 600;
    font-size: .8em;
    color:white; 
    cursor: pointer;
  }
  .qtyButton span {margin-left: 4px; font-weight: 900; font-size: 1em; }
  .qtyButton img {width: 10px; margin-left: 4px;}
  .qtyButton:hover {background-color: rgba(0, 0, 0, .3);}
  .qtyButton:active {background-color: rgba(0, 0, 0, .8);}

</style>