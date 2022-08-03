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
  <div class="App-Background"></div>
</template>


<style scoped>
.App-Background {
    width: 50vw;
    height: 100vh;
    position: fixed;
    z-index: 0;
    
    border-right: 10px solid rgba(0, 0, 0, .4);
    background: -moz-linear-gradient(45deg, rgba(11,75,139,0) 50%, rgba(0,0,0,0.3000849697885196) 100%);
    background: -webkit-linear-gradient(45deg, rgba(11,75,139,0) 50%, rgba(0,0,0,0.3000849697885196) 100%);
    background: linear-gradient(45deg, rgba(11,75,139,0) 50%, rgba(0,0,0,0.3000849697885196) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0b4b8b",endColorstr="#000000",GradientType=1);
    background-color: var(--background-color-client);
}

  #ticketContent {
    z-index: 1;
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
    /* background: rgb(11,75,139); */
    /* background-color: #300a62; */
  }

  #formContent {
    padding:2em 1.5em;
    display: flex;
    /* align-items: center; */
    justify-content: center;
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
        background-color: var(--background-color-client);
    }
    #ticketBox {
      max-width: 100%;
    }
    #formContent {
      padding: 1.5em .5em;
      margin:0 auto;
      height: auto;
      max-width: 100vw;
    }
  }

</style>