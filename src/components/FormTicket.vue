<template>
    <div id="formBox">
        <form action="#" @submit="onSubmit">

            <p>
                <a href="#" class="gPay" @click="onDev()">
                    <img src="../assets/g-pay.svg" />
                </a>
            </p>

            <div class="divLine">
                <hr>
                Or pay another way
                <hr>
            </div>

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

            <p>
                <label for="inpMail">Email</label>
                <input type="text" class="frmControl" id="inpMail" />
            </p>

            <Transition name="slide-fade" appear >
                <div v-if="this.pay_card">
                    <div>
                        <label>Card information</label>
                        <p>
                            <input type="text" class="frmControl" name="" placeholder="1234 1234 1234 1234" />
                        </p>
                        <p class="dFlex spcInp">
                            <input type="text" class="frmControl" name="" placeholder="MM / YY" />
                            <input type="text" class="frmControl" name="" placeholder="CVC" />
                        </p>
                        <p>
                            <input type="text" class="frmControl" name="" placeholder="Name on card" />
                        </p>
                    </div>

                    <div>
                        <label>Billing address</label>
                        <p>
                            <select name="" class="frmControl" id="">
                                <option value="">Country</option>
                            </select>
                        </p>
                        <p>
                            <input type="text" class="frmControl" @keyup="fillAddress()" id="inpAddress" placeholder="Address" name="address" />
                        </p>
                        <div v-if="this.addressFilled">
                            <p>
                                <input type="text" class="frmControl" placeholder="Address line 2" name="addressLine2" />
                            </p>
                            <p class="dFlex spcInp">
                                <input type="text" class="frmControl" placeholder="Neighborhood" name="" />
                                <input type="text" class="frmControl" placeholder="City" name="" />
                            </p>
                            <p class="dFlex spcInp">
                                <select name="" class="frmControl" id="">
                                    <option value="">State</option>
                                </select>
                            </p>
                            <p>
                                <input type="text" class="frmControl" placeholder="Postal code" name="" />
                            </p>
                        </div>
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
                this.addressFilled = false
            },
            fillAddress() {
                this.addressFilled = document.getElementById("inpAddress").value != "" ? true : false
            },
            showFields(e) {
                this.addressFilled = true
            },
            onSubmit(e){
                e.preventDefault()
            },
            onDev() {
                e.preventDefault()
            }
        }
    }
</script>

<style scoped>

    #formBox {width: 90%;}
    #formBox p {padding-bottom: .5em;}

    h3 {
        margin-bottom: .4em; 
        font-weight: 600; 
        font-size: .9em;
    }

    .gPay {
        display: flex; 
        justify-content: center;
        background-color: #222; 
        padding: .8em; 
        margin-bottom: 1em; 
        border-radius:4px;
        transition: .15s;
    }

    .boxPayMethod {
        padding: .5em 0;
    }
    .payMethod {
        display: flex; 
        justify-content: space-between;
    }
    .payMethod span {
        font-size:.8em;
        opacity:.6;
    }
    .payMethod button {
        display: flex;
        align-items: center;
        background-color: #FFF;
        transition: .2s;
        /* padding:1em; */
        color: rgba(0, 0, 0, .6);
        cursor: pointer;
    }
    .payMethod button:first-child {
        margin-right: 8px;
    }
    .payMethod button.active, .payMethod button.active:hover {
        border-color: rgba(0, 0, 0, .8);
        color: rgba(0, 0, 0, 1);
        font-weight: 600;
    }
    .payMethod img {
        width:25px; 
        height:20px; 
        margin-right: .1em; 
        opacity:.4;
    }
    .payMethod button.active img {
        opacity:1;
    }
    .showFields {
        font-size: .8em; 
        margin-left: 10px;
    }

</style>