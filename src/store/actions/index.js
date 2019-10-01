import {INCREMENT} from '../../constants'

export default {
    [INCREMENT]: (store) => {
        store.commit('increment')
    }
}