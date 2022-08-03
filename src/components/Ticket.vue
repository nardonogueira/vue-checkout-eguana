<template>
    <section>
        <strong>{{ ticket.title }}</strong>
        <span class="price">{{ vueNumberFormat(ticket.price, {prefix: "R$"}) }}</span>
    </section>
 
    <p class="qtySelect">
        <label>Qtd</label>
        <select name="" v-model="ticket.qtd">
            <option
                v-for="index in 10"
                :value="index"
            >{{ index }}</option>
        </select>
    </p>

    <small>{{ ticket.description }}</small>
</template>


<script>
    export default {
        name: 'Ticket',
        props: {
            ticket: {},
            indexTicket: ""
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

    .qtySelect {
        display: flex;
        font-size: .9em;
        margin-bottom: .5em;
    }
    .qtySelect select, .qtySelect select:focus, .qtySelect select:active  {
        margin-left: 4px;
        background: var(--color-black-opacity);
        color: #FFF;
        font-size: .9em;
        font-weight: 600;
        border: 0;
        outline: none;
        cursor: pointer;
    }
    .qtySelect select:hover {
        background: var(--color-black-opacity-hover);
    }

</style>