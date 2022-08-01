<template>
  <section id="ticketContent">
    <div id="ticketBox">
        <header>
          <h1><img src="../assets/blockchainrio.png" class="logoClient" />Blockchain Rio</h1>
          <h2><span>Pay Blockchain Rio</span> <strong>R$885.00</strong></h2>
        </header>
        <div class="tickets">
          <img src="../assets/card.jpeg" class="ticketCard" />
          <div class="ticketList">
            <ul>
              <li v-for="ticket in tickets">
                <titleBox>
                  <strong>{{ ticket.title }}</strong>
                  <span class="price">{{ vueNumberFormat(ticket.price, {prefix: "R$"}) }}</span>
                </titleBox>
                <button class="qtyButton" v-on:click.prevent="addQty"> 
                  Qtd <qtd>{{ ticket.qtd }}</qtd>
                  <img src="../assets/arrow-down.svg" />
                </button>
                <small>{{ ticket.description }}</small>
              </li>
            </ul>
            <p class="infoItem">Subtotal <span>{{ vueNumberFormat(this.subtotal, {prefix: "R$"}) }}</span></p>
            <p class="infoItem itemAddCode">
                <input class="addCode" placeholder="Add promotion code">
            </p>
            <p class="infoItem">Total due <strong class="hlTotal">{{ vueNumberFormat(this.totalDue, {prefix: "R$"}) }}</strong></p>
          </div>
        </div>
    </div>
  </section>
</template>


<script>
    export default {
        data(){
            return {
                subtotal: 885,
                totalDue: 885,
                tickets: [{
                        title: 'BlockchaIn Rio Festival Passaporte',
                        qtd: 1,
                        price: 590.00,
                        description: 'O maior festival de blockchain da América Latina, de 1 a 4 de setembro no Píer Mauá (RJ) | Direito ao BInRio NFT | De R$680 por R$590'
                    },
                    {
                        title: 'BlockchaIn Rio Festival Passaporte - Meia-Entrada',
                        qtd: 1,
                        price: 295.00,
                        description: 'Meia-entrada para estudantes e idosos | Último Lote Promocional - Direito ao BInRio NFT | De R$340 por R$295 | A entrada de menores seguirá a regulamentação do Estatuto da Criança e Adolescente (ECA)'
                    }
                ]
            }
        },
        methods: {
            addQty(){
                alert("dev")
            }
        }
    }
</script>



<style scoped>
  #ticketContent {
    padding:1.5em;
  }

  #ticketContent {
    color:white;
    display: flex;
    justify-content: right;
    align-items: center;
    position: relative;
    top:0;
    left: 0;
    width: 50vw;
    min-height: 100vh;
    background-color: #180f53;
    border-right: 10px solid rgba(0, 0, 0, .4);
    /* background: rgb(38,14,110); */
    background: rgb(39,15,113);
    background: -moz-linear-gradient(45deg, rgba(39,15,113,1) 30%, rgba(28,8,89,1) 90%);
    background: -webkit-linear-gradient(45deg, rgba(39,15,113,1) 30%, rgba(28,8,89,1) 90%);
    background: linear-gradient(45deg, rgba(39,15,113,1) 30%, rgba(28,8,89,1) 90%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#270f71",endColorstr="#1c0859",GradientType=1);
  }

  #ticketBox {max-width: 450px; }
  #ticketBox header {
    border-bottom: 1px dashed var(--color-white-opacity);
    padding: 0 1em 1em 1em; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

  h1 {
    /* margin-bottom: 1.5em;  */
    display: flex; 
    align-items: center; 
    font-weight: 700;
  }
  .logoClient {
    width: 55px;
    height: 55px;
    border-radius: 100%;
    /* border: 1px solid rgba(255, 255, 255, .15); */
    padding: .2em;
    margin: 0 .5em 0 -.4em;
    box-shadow: var(--color-white-opacity) 0 0 50px;
  }

  h2 {font-size: 1em; text-align: right; }
  h2 span {opacity: .5; font-size: .8em;}
  h2 strong {
    display: block;
    font-size: 1.4em;
    font-weight: 800;
  }
  .tickets {display: flex; padding:1em 0 1em 1em; }
  .tickets img {margin: .2em .5em 0 0; border-radius: 5px;}

  .ticketList ul li {
    list-style: none;
    padding: 1em;
    border-radius:.3em;
    margin-bottom: .5em;
    background: rgb(0,0,0);
    background: -moz-linear-gradient(100deg, rgba(0,0,0,0.1) 0%, rgba(32,9,94,0) 100%);
    background: -webkit-linear-gradient(100deg, rgba(0,0,0,0.1) 0%, rgba(32,9,94,0) 100%);
    background: linear-gradient(100deg, rgba(0,0,0,0.1) 0%, rgba(32,9,94,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#20095e",GradientType=1);
  }
  /* .ticketList ul li:last-child {margin-bottom: 1.5em;} */
  .ticketList ul strong {font-size:.9em; line-height: 1.4em; font-weight: 500; display: block; margin-bottom: .4em;}
  .ticketList ul small {font-size:.8em; opacity: .5; line-height: 1.4em; display: block;}
  .ticketList ul .price {font-size:.9em; margin-left: .5em;}

  .ticketList ul li titleBox {display: flex; justify-content: space-between;}

  .ticketList .infoItem {padding: .6em 1em;}
  .ticketList .infoItem * {font-size: .9em; }
  .ticketList strong {font-weight: 700; }
  .ticketCard {width: 40px; height: 40px;}
  .ticketList .infoItem .hlTotal {font-size:1em;}


  .infoItem {
    display: flex;
    justify-content: space-between;
  }

.itemAddCode {border: 1px dashed var(--color-white-opacity); border-width: 1px 0 1px 0;}

.addCode {
    display: flex; 
    align-items: center; 
    padding:.8em; 
    margin:0 0 0 -.4em;
    border: 0; 
    border-radius: 3px; 
    background-color: rgba(255, 255, 255, .08);
    transition: .2s;;
    font-weight: 700;
    font-size: .8em;
    color:white; 
    cursor: pointer;
}
.addCode:hover {opacity: .8;}
.addCode:focus,.addCode:active {
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
  .qtyButton qtd {margin-left: 4px; font-weight: 700; font-size: 1em; }
  .qtyButton img {width: 10px; margin-left: 4px;}
  .qtyButton:hover {background-color: rgba(0, 0, 0, .3);}
  .qtyButton:active {background-color: rgba(0, 0, 0, .8);}



  @media (max-width: 1024px) {
    #ticketContent {
        display: flex;
        justify-content: right;
        align-items: center;
        position: relative;
        width: 100%;
        background-color: #180f53;
        border:0;
        background: rgb(38,14,110);
    }
    #ticketBox {max-width: 100%; }
  }

</style>