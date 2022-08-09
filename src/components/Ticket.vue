<template>
    <section>
        <strong>{{ ticket.title }}</strong>
        <span class="price">{{ vueNumberFormat(this.priceCalculated, {prefix: "R$"}) }}</span>
    </section>

    <p class="qtySelect">
        Qtd
        <vue-number-input
            v-model="ticket.qtd"
            :min="1"
            :max="20"
            class="vueNumberInput"
            size="small"
            @update:model-value="onUpdate"
            @change="onChange"
            @input="onInput"
            @update-ticket="updateTicket"
            controls
        ></vue-number-input>
    </p>
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
                priceCalculated: this.ticket.price
            }
        },
        methods: {
            onUpdate() {
                this.priceCalculated = this.ticket.qtd * this.ticket.price
                this.$emit('updateTicket', this.ticket)
            },
        }
    }
</script>


<style scoped>
    strong {
        font-size:.9em;
        line-height: 1.4em;
        font-weight: 500;
        margin-bottom: .4em;
    }
    small {
        font-size:.8em;
        opacity: .5;
        line-height: 1.4em;
    }
    .price {
        font-size:.9em;
        margin-left: .5em;
    }
    section {display: flex; justify-content: space-between;}
    .vue-number-input, .vue-number-input {
        margin-left:10px;
    }
    .qtySelect {
        display: flex;
        align-items: center;
        margin-bottom: .5em;
        font-size: .8em;
    }
</style>