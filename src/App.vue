<script>
import ListaTickets from "./components/ListaTickets.vue";
import FormTicket from "./components/FormTicket.vue";

export default {
  components: {
    ListaTickets,
    FormTicket
  }
}
</script>

<template>
  <section id="ticketContent">
    <ListaTickets />
  </section>
  <section id="formContent">
    <FormTicket />
  </section>
</template>


<style scoped>
  #ticketContent {
    padding:2em 1.5em 1.5em 1.5em;
  }

  #ticketContent {
    color:white;
    display: flex;
    /* align-items: center; */
    justify-content: right;
    position: relative;
    top:0;
    left: 0;
    width: 50vw;
    height: 100vh;
    border-right: 10px solid rgba(0, 0, 0, .4);
    background: rgb(11,75,139);
    background: -moz-linear-gradient(45deg, rgba(11,75,139,0) 50%, rgba(0,0,0,0.3000849697885196) 100%);
    background: -webkit-linear-gradient(45deg, rgba(11,75,139,0) 50%, rgba(0,0,0,0.3000849697885196) 100%);
    background: linear-gradient(45deg, rgba(11,75,139,0) 50%, rgba(0,0,0,0.3000849697885196) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0b4b8b",endColorstr="#000000",GradientType=1);
    /* background-color: #300a62; */
  }

  #formContent {
    padding:2em 1.5em;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    /* position: relative; */
    top:0;
    right: 0;
    max-width: 50vw;
    height: 100%;
    min-height: 100vh;
    background-color: #FFF;
  }

  @media (max-width: 1024px) {
    #ticketContent {
        display: flex;
        justify-content: right;
        align-items: center;
        position: relative;
        width: 100%;
        border:0;
        height: auto;
    }
    #ticketBox {
      max-width: 100%;
    }
    #formContent {
      padding: 1.5em .5em;
      margin:0 auto;
      height: auto;
      max-width: 100vw;
      /* align-items: center; */
    }
  }

</style>