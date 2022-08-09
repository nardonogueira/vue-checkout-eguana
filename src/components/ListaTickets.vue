<template>
    <div id="ticketBox">
        <header>
          <h1><img src="../assets/img/logo-blockchainrio.png" class="logoClient" />Blockchain Rio</h1>
          <h2><span>Pay Blockchain Rio</span> <strong>{{ vueNumberFormat(this.calcularTotal, {prefix: "R$"}) }}</strong></h2>
        </header>
        <div class="tickets">
          <img src="../assets/img/card.jpeg" class="ticketCard" />
          <div class="ticketList">
            <ul>
              <li v-for="(ticket, index) in Tickets">
                <Ticket
                  v-bind:ticket="ticket"
                  @updateTicket="updateInfoTicket(e)"
                />
              </li>
            </ul>

            <p class="infoItem">Subtotal <span>{{ vueNumberFormat(this.total, {prefix: "R$"}) }}</span></p>
            <p class="infoItem itemAddCode">
                <input
                  class="addCode"
                  v-model="promoCode"
                  v-bind:class="promoCode !== '' ? 'active' : ''"
                  placeholder="Add promotion code"
                  :readonly= "this.valDiscount > 0"
                />
                <Transition name="bounce">
                  <a href="" @click.prevent="calcDiscount" v-if="promoCode !== '' && this.valDiscount == 0"><img src="../assets/img/check.svg" /></a>
                </Transition>

                <Transition name="bounce">
                  <a href="" @click.prevent="removeDiscount" v-if="this.valDiscount > 0" class="removeCode"><img src="../assets/img/close.svg" /></a>
                </Transition>

            </p>
            <Transition name="bounce">
              <p
                v-if="this.messageCode != '' && this.promoCode !== '' && classMessageCode !== ''"
                class="infoItem messageCode"
                v-bind:class="classMessageCode"
              >{{ this.messageCode }}</p>
            </Transition>

            <Transition name="slide-fade">
              <p
                v-if="this.valDiscount > 0"
                class="infoItem"
              >Desconto cupom promocional
                <strong>{{ vueNumberFormat(this.valDiscount, {prefix: "R$"}) }}</strong>
              </p>
            </Transition>

            <p class="infoItem">Total due <strong class="hlTotal">{{ vueNumberFormat(this.calcularTotal, {prefix: "R$"}) }}</strong></p>
          </div>
        </div>
    </div>
</template>


<script>
  import Tickets from '../services/tickets'
  import Ticket from '../components/Ticket.vue'
  export default {
    data() {
      return {
          Tickets: [],
          promoCode: '',
          subtotal: 0,
          totalDue: 0,
          valDiscount: 0,
          discount: 0,
          typeDiscount: '',
          messageCode: '',
          classMessageCode: '',
          total: 0
      };
    },
    methods: {
      async ticketList() {
        await Tickets.list().then(result => {
          this.Tickets = result.data
        })
      },

      updateInfoTicket(updatedTicket) {
        this.qtd = updatedTicket
        this.total = this.totalTickets
      },

      async calcDiscount() {
        Tickets.getPromoCode(this.promoCode).then(result => {
          if (result.data.length > 0) {
            if (result.data[0].type === 'fixed') {
              this.discount = parseFloat(result.data[0].discount);
              this.typeDiscount = 'fixed'
              this.messageCode = "Cupom válido"
              this.classMessageCode = "messageCode-success";
            } else {
              this.discount = parseFloat(result.data[0].discount);
              this.typeDiscount = 'percent'
              this.messageCode = "Cupom válido"
              this.classMessageCode = "messageCode-success";
            }
          } else {
            this.valDiscount = 0
            this.discount = 0
            this.typeDiscount = ''
            this.messageCode = "Cupom não encontrado."
            this.classMessageCode = "messageCode-error"
          }
        })
      },

      removeDiscount() {
        this.promoCode = ''
        this.discount = 0
        this.valDiscount = 0
        this.messageCode = ''
        this.classMessageCode = ''
      }
    },
    components: {
        Ticket
    },
    created() {
      this.ticketList()
    },
    computed: {
      calcularTotal() {
        if (this.discount !== '') {
          if (this.typeDiscount === 'percent') {
            this.valDiscount = parseFloat((this.total * this.discount) / 100);
          } else {
            this.valDiscount = parseFloat(this.discount)
          }
        }
        return this.total - this.valDiscount
      },

      totalTickets() {
        return this.Tickets != undefined ? this.Tickets.map(ticket => (ticket.price * ticket.qtd)).reduce((total, amount) => total + amount) : 0
      }
    }
  }
</script>



<style scoped>
  #ticketBox {max-width: 450px; }
  #ticketBox header {
    border-bottom: 1px dashed var(--color-white-opacity);
    padding: 0 1em 1.5em 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    display: flex;
    align-items: center;
    font-size: 1.3em;
    font-weight: 900;
  }

  .logoClient {
    max-width: 55px;
    max-height: 55px;
    border-radius: 7px;
    padding: .2em;
    background-color: var(---backgroud-color-logo-client);
    margin: 0 10px 0 -.5em;
    box-shadow: var(--color-black-opacity) 0 0 50px;
  }

  h2 {font-size: 1em; text-align: right;}
  h2 span {opacity: .4; font-size: .7em;}
  h2 strong {
    display: block;
    font-size: 1.5em;
    line-height: 1em;
    font-weight: 800;
  }
  .tickets {display: flex; padding:1em .5em 1em 1em; }
  .tickets img {margin: .2em .5em 0 0; border-radius: 5px;}

  .ticketList ul li {
    list-style: none;
    padding: .5em;
    border-radius:.3em;
    margin-bottom: .5em;
    background: rgb(0,0,0);
    background: -moz-linear-gradient(100deg, rgba(0,0,0,0.1) 0%, rgba(32,9,94,0) 100%);
    background: -webkit-linear-gradient(100deg, rgba(0,0,0,0.1) 0%, rgba(32,9,94,0) 100%);
    background: linear-gradient(100deg, rgba(0,0,0,0.1) 0%, rgba(32,9,94,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#20095e",GradientType=1);
  }
  /* .ticketList ul li:last-child {margin-bottom: 1.5em;} */
  .ticketList .infoItem {padding: .5em;}
  .ticketList .infoItem strong {font-size: .9em; }
  .ticketList strong {font-weight: 700; }
  .ticketCard {width: 40px; height: 40px;}
  .ticketList .infoItem .hlTotal {font-size:1em; font-weight: 800;}

  .infoItem {
    display: flex;
    justify-content: space-between;
  }

.itemAddCode {
  border: 1px dashed var(--color-white-opacity);
  border-width: 1px 0 1px 0;
  margin: .5em 0;
  display: flex;
  width: 100%;
}
.itemAddCode a {
  display: flex;
  align-items: center;
  padding: 0 .8em;
  margin: 0;
  background-color: #FFF;
  border: 0;
  border-radius: 3px;
  font-weight: 700;
  font-size: .9em;
  margin-left:5px;
  background-color: var(---background-color-submit);
}
.itemAddCode a.removeCode {
  background-color: var(---background-color-error);
}
.itemAddCode a img {width: 22px; margin: 0;}

.addCode {
    display: flex;
    align-items: center;
    padding:.8em;
    border: 0;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, .15);
    transition: .2s;
    font-weight: 700;
    color:white;
    cursor: pointer;
    outline: none;
}
.addCode.active:read-only {cursor: default; font-style: italic; color:#777; }
.addCode:hover {opacity: .8;}
.addCode:focus,.addCode:active,.addCode.active {
    width:100%;
    cursor: text;
    background-color: #FFF;
    outline-color: #FFF;
    color:var(--vt-c-black-soft);
    opacity: 1;
}
.addCode::placeholder {
  color: inherit;
}
.addCode:focus::placeholder {
  color: var(--vt-c-black-softx);
}

.messageCode {
  font-size: .9em;
  margin: 0 5px 1em 5px;
  background-color: var(--color-black-opacity-hover);
  border-radius:7px;
}
.messageCode-success {
  color: var(---background-color-success);
  font-weight:700;
}
.messageCode-error {
  color: var(---background-color-error);
}

  .qtyButton {
    display: flex;
    align-items: center;
    padding:.3em 0 .3em .4em;
    margin:0 0 .4em -.4em;
    border: 0;
    border-radius: 3px;
    background-color: transparent;
    transition: .2s;
    font-weight: 700;
    font-size: .8em;
    color:white;
    cursor: pointer;
  }
  .qtyButton span {margin-left: 4px; font-weight: 700; font-size: 1em; }
  .qtyButton img {width: 10px; margin-left: 4px;}
  .qtyButton:hover {background-color: rgba(0, 0, 0, .3);}
  .qtyButton:active {background-color: rgba(0, 0, 0, .8);}

</style>