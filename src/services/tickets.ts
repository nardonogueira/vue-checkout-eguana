import api from '../services/api';

export default {
    list:() => {
        return api.get('tickets')
    },

    getPromoCode:(code) => {
        return api.get('promo_codes?code=' + code)
    },

    postOrders:(params) => {
        return api.post('orders', params)
    },
}