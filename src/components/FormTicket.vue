<template>
    <div id="formBox">
        <form action="#" @submit.prevent="onSubmit">

            <p>
                <a href="" class="gPay" @click.prevent="">
                    <img src="../assets/img/g-pay.svg" />
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
                        <img src="../assets/img/credit-card-black-2.svg" /> Cartão
                    </button>
                    <button
                        class="frmControl"
                        v-bind:class="[pay_boleto ? 'active' : null, '']"
                        @click.prevent="changePayBoleto()"
                    >
                        <img src="../assets/img/barcode-lines-svgrepo-com.svg" /> Boleto
                    </button>
                </p>
            </div>

            <p>
                <label>Email</label>
                <input type="text" class="frmControl" v-model="email" />
            </p>

            <Transition name="slide-fade" appear>
                <div v-if="this.pay_card">
                    <div>
                        <label>Card information</label>
                        <p>
                            <input type="text" class="frmControl" v-model="card_number" placeholder="1234 1234 1234 1234" v-mask="'#### #### #### ####'" />
                        </p>
                        <p class="dFlex spcInp">
                            <input type="text" class="frmControl" v-model="due_date" name="" placeholder="MM / YY" v-mask="'## / ##'" />
                            <input type="text" class="frmControl"  v-model="card_cvv" placeholder="CVV" v-mask="'###'" />
                        </p>
                        <p>
                            <input type="text" class="frmControl" v-model="card_holder_name" placeholder="Name on card" />
                        </p>
                    </div>
                </div>
            </Transition>

            <Transition name="slide-fade">
                <div v-if="this.pay_boleto">
                    <p>
                        <label>Name</label>
                        <input type="text" class="frmControl" v-model="name" />
                    </p>
                    <p>
                        <label>CPF/CNPJ</label>
                        <input type="text" class="frmControl" placeholder="" v-model="cpfCnpj" />
                    </p>
                </div>
            </Transition>

            <label>Billing address</label>
            <p>
                <select name="" class="frmControl" v-model="country">
                    <option value="">Country</option>
                </select>
            </p>
            <p>
                <input
                    type="text"
                    class="frmControl"
                    v-model="address"
                    @keyup="fillAddress"
                    placeholder="Address"
                    name="address"
                />
            </p>
            
            <Transition name="slide-fade">
                <div v-if="addressFilled">
                    <p>
                        <input type="text" class="frmControl" placeholder="Address line 2" name="addressLine2" v-model="address2" />
                    </p>
                    <p class="dFlex spcInp">
                        <input type="text" class="frmControl" placeholder="Neighborhood" name="" v-model="neighborhood" />
                        <input type="text" class="frmControl" placeholder="City" name="" v-model="city" />
                    </p>
                    <p class="dFlex spcInp">
                        <select name="" class="frmControl" v-model="state">
                            <option value="">State</option>
                        </select>
                    </p>
                    <p>
                        <input type="text" class="frmControl" placeholder="Postal code" name="" v-model="postal_code" />
                    </p>
                </div>
            </Transition>
            
            <Transition name="slide-fade">
                <p v-if="!addressFilled">
                    <a href="#" @click.prevent="showFields" class="showFields">Enter address manually</a>
                </p>
            </Transition>

            <p>
                <input type="submit" class="submitButton" value="Pay" />
            </p>

        </form>
    </div>
</template>


<script>
    import Swal from 'sweetalert2'
    import Tickets from '../services/tickets'
    export default {
        data(){
            return {
                pay_card: true,
                pay_boleto: false,
                addressFilled: false,
                name: '',
                cpfCnpj: '',
                email: '',
                card_number: '',
                due_date: '',
                card_cvv: '',
                card_holder_name: '',
                address: '',
                address2: '',
                neighborhood: '',
                city: '',
                state: '',
                postal_code: '',
                country: ''
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
                this.addressFilled = this.address !== '' ? true : false
            },
            showFields() {
                this.addressFilled = true
            },
            onSubmit() {
                console.log(this.promoCode);
                Tickets.postOrders({
                    pay_card: this.pay_card,
                    pay_boleto: this.pay_boleto,
                    email: this.email,
                    name: this.name,
                    cpfCnpj: this.cpfCnpj,
                    card_number: this.card_number,
                    due_date: this.due_date,
                    card_cvv: this.card_cvv,
                    card_holder_name: this.card_holder_name,
                    country: this.country,
                    address: this.address,
                    address2: this.address2,
                    neighborhood: this.neighborhood,
                    city: this.city,
                    state: this.state,
                    postal_code: this.postal_code,
                    promo_code: "",
                    country: '',
                    discount: 0,
                    tickets: [{
                        "id": 1,
                        "quantity": 10,
                        "price": 100
                    }]
                }).then(result => {
                    if (result.status === 201) {
                        this.name = '',
                        this.cpfCnpj = '',
                        this.email = '',
                        this.card_number = '',
                        this.due_date = '',
                        this.card_cvv = '',
                        this.card_holder_name = '',
                        this.address = '',
                        this.address2 = '',
                        this.neighborhood = '',
                        this.city = '',
                        this.state = '',
                        this.postal_code = '',
                        this.country = '',
                        Swal.fire({
                            icon: 'success',
                            // title: 'Sucesso!',
                            text: 'Sua compra foi realizada com sucesso',
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            // title: 'Campo obrigatório',
                            text: result.data.message,
                        })
                    }

                })
            },
        },
    }
</script>


<style scoped>
    #formBox {width: 90%; max-width: 400px;}
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
        transition: .1s;
    }
    .gPay:hover, .gPay:focus {opacity: .9;}

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