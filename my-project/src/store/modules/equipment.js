import axios from 'axios';

export default {
  namespaced: true,
  state: {
    equipment: null,
  },
  mutations: {
    update(state, equipment) {
      state.equipment = equipment;
    },
    editName(state, item) {
      const changed = state.equipment.find(e => e.id === item.id);
      if (changed.id) {
        changed.name = item.name;
      }
    },
    add(state, equipment) {
      state.equipment.push(equipment);
    },
    remove(state, id) {
      state.equipment = state.equipment.filter(e => e._id !== id);
    },
  },
  actions: {
    getAll({ commit }) {
      return axios.get('/api/equipment')
        .then((result) => {
          console.log(result);
          commit('update', result.data);
        })
        .catch(console.error);
    },
    create({ commit }, equipment) {
      return axios.post('api/equipment', equipment)
        .then(() => commit('add', equipment));
    },
    delete({ commit }, id) {
      return axios.delete(`api/equipment/${id}`).then((response) => {
        commit('remove', id);
      });
    },
    edit({ commit }, item) {
      return axios.put('api/equipment', item)
        .then((response) => {
          if (response.data.ok === 1) {
            commit('editName', item);
            return true;
          }
          return false;
        });
    },
  },
};
