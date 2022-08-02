<template>
    <section id="formContent">
        <div id="formBox">
            <form action="#" @submit="onSubmit">

                <p>
                    <label for="inpMail">Email</label>
                    <input type="text" class="frmControl" id="inpMail" />
                </p>

                <div class="boxPayMethod">
                    <h3>
                        Payment method
                    </h3>
                    <p class="payMethod">
                        <button
                            class="frmControl"
                            v-bind:class="[pay_card ? 'active' : null, '']"
                            @click.prevent="changePayCard()"
                        >
                            <img src="../assets/credit-card-black-2.svg" /> Cartão
                        </button>
                        <button
                            class="frmControl"
                            v-bind:class="[pay_boleto ? 'active' : null, '']"
                            @click.prevent="changePayBoleto()"
                        >
                            <img src="../assets/barcode-lines-svgrepo-com.svg" /> Boleto
                        </button>
                    </p>
                </div>

                <Transition name="slide-fade" appear >
                    <div v-if="this.pay_card">
                        <p>
                            <label for="inpName">Name on card</label>
                            <input type="text" class="frmControl" id="inpName" name="" />
                        </p>
                        <div>
                            <label for="inpCpfCnpj">Billing address</label>
                            <p class="frmControlGroup">
                                <select name="" class="frmControl" id="">
                                    <option value="">Teste</option>
                                </select>
                                <input type="text" class="frmControl" @keyup="fillAddress()" id="inpAddress" placeholder="Address" name="address" />
                                <input v-if="this.addressFilled" type="text" class="frmControl" placeholder="Address line 2" name="addressLine2" />
                                <input v-if="this.addressFilled" type="text" class="frmControl" placeholder="Neighborhood" name="" />
                                <input v-if="this.addressFilled" type="text" class="frmControl" placeholder="City" name="" />
                                <select v-if="this.addressFilled" name="" class="frmControl" id="">
                                    <option value="">State</option>
                                </select>
                                <input v-if="this.addressFilled" type="text" class="frmControl" placeholder="Postal code" name="" />
                            </p>
                            <p>
                                <a v-if="!this.addressFilled" href="#" @click.prevent="showFields" class="showFields">Enter address manually</a>
                            </p>
                        </div>
                    </div>
                </Transition>

                <Transition name="slide-fade">
                    <div v-if="this.pay_boleto">
                        <p>
                            <label for="inpName">Name</label>
                            <input type="text" class="frmControl" id="inpName" />
                        </p>
                        <p>
                            <label for="inpCpfCnpj">CPF/CNPJ</label>
                            <input type="text" class="frmControl" placeholder="" name="cpfCnpj" />
                        </p>
                    </div>
                </Transition>

                <p>
                    <input type="submit" class="submitButton" value="Pay" />
                </p>
            </form>
        </div>
    </section>
</template>


<script>
    export default {
        data(){
            return {
                pay_card: true,
                pay_boleto: false,
                addressFilled: false
            }
        },
        methods: {
            changePayCard(){
                this.pay_card = true
                this.pay_boleto = false
            },
            changePayBoleto(){
                this.pay_card = false
                this.pay_boleto = true
            },
            fillAddress() {
                this.addressFilled = document.getElementById("inpAddress").value != "" ? true : false
            },
            showFields(e) {
                this.addressFilled = true
            },
            onSubmit(e){
                e.preventDefault()
                // alert("DEV")
            }
        }
    }
</script>

<style scoped>
#formContent {
    padding:1.5em;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    position: relative;
    top:0;
    right: 0;
    max-width: 500px;
    height: 100vh;
    background-color: #FFF;
  }

  #formBox {width: 90%;}
  #formBox p {padding-bottom: .5em;}


h3 {margin-bottom: .4em; font-weight: 600; font-size: .9em;}
  .boxPayMethod {padding: 1em 0;}
  .payMethod {display: flex; justify-content: space-between;}
  .payMethod span {
    font-size:.8em;
    opacity:.6;
  }
  .payMethod button {
    display: flex;
    align-items: center;
    background-color: #FFF;
    transition: .2s;
    padding:1em;
    color: rgba(0, 0, 0, .4);
    cursor: pointer;
  }
  .payMethod button:first-child {margin-right: 8px;}
  .payMethod button.active, .payMethod button.active:hover {
    border-color: rgba(0, 0, 0, .8);
    color: rgba(0, 0, 0, 1);
    font-weight: 600;
  }
  .payMethod img {width:25px; height:20px; margin-right: .1em; opacity:.4;}
  .payMethod button.active img {opacity:1;}
  .showFields {font-size: .8em; margin-left: 10px;}



  @media (max-width: 1024px) {
    #formContent {
        padding: 2em;
        margin:0 auto;
        height: auto;
        align-items: center;
    }
  }

</style>