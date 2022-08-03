<template>
    <div id="ticketBox">
        <header>
          <!-- https://blockchainrio.com.br/wp-content/uploads/2022/05/BlockchainRio_logo-3.png -->
          <h1><img src="../assets/blockchainrio.png" class="logoClient" />Blockchain Rio</h1>
          <h2><span>Pay Blockchain Rio</span> <strong>{{ vueNumberFormat(this.totalDue, {prefix: "R$"}) }}</strong></h2>
        </header>
        <div class="tickets">
          <img src="../assets/card.jpeg" class="ticketCard" />
          <div class="ticketList">
            <ul>
              <li v-for="(ticket, index) in tickets">
                <Ticket v-bind:ticket="ticket" v-bind:indexTicket="index" />
              </li>
            </ul>
            <p class="infoItem">Subtotal <span>{{ vueNumberFormat(this.subtotal, {prefix: "R$"}) }}</span></p>
            <p class="infoItem itemAddCode">
                <input 
                  class="addCode" 
                  id="promoCode"
                  v-bind:class="promotionCodeFilled ? 'active' : ''"
                  @keyup="fillCode"
                  placeholder="Add promotion code"
                >
            </p>
            <p class="infoItem">Total due <strong class="hlTotal">{{ vueNumberFormat(this.totalDue, {prefix: "R$"}) }}</strong></p>
          </div>
        </div>
    </div>
</template>


<script>
    import Ticket from '../components/Ticket.vue'
    export default {
        data() {
            return {
                promotionCodeFilled: false,
                subtotal: 885,
                totalDue: 885,
                tickets: [{
                        title: "BlockchaIn Rio Festival Passaporte",
                        qtd: 1,
                        price: 590,
                        description: "O maior festival de blockchain da América Latina, de 1 a 4 de setembro no Píer Mauá (RJ) | Direito ao BInRio NFT | De R$680 por R$590"
                    }, {
                        title: "BlockchaIn Rio Festival Passaporte - Meia-Entrada",
                        qtd: 1,
                        price: 295,
                        description: "Meia-entrada para estudantes e idosos | Último Lote Promocional - Direito ao BInRio NFT | De R$340 por R$295 | A entrada de menores seguirá a regulamentação do Estatuto da Criança e Adolescente (ECA)"
                    }
                ]
            };
        },
        methods: {
          fillCode(){
              this.promotionCodeFilled = document.getElementById("promoCode").value !== "" ? true : false
            },
        },
        created() {
          this.promotionCodeFilled = false
        },
        components: {
            Ticket
        },
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
    background-color: #FFF;
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
  .ticketList .infoItem * {font-size: .9em; }
  .ticketList strong {font-weight: 700; }
  .ticketCard {width: 40px; height: 40px;}
  .ticketList .infoItem .hlTotal {font-size:1em; font-weight: 800;}


  .infoItem {
    display: flex;
    justify-content: space-between;
  }

.itemAddCode {border: 1px dashed var(--color-white-opacity); border-width: 1px 0 1px 0; margin: .5em 0; }

.addCode {
    display: flex;
    align-items: center;
    padding:.8em;
    /* margin:0 0 0 -.4em; */
    border: 0;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, .15);
    transition: .2s;;
    font-weight: 700;
    font-size: .8em;
    color:white;
    cursor: pointer;
}
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