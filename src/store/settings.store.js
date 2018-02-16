export const state = {
  restTime: 180,
  unit: 'kg',
  increment: 1.5
}
export const getters = {
  restTime: state => state.restTime,
  unit: state => state.unit,
  increment: state => state.increment
}
export const mutations = {}
export const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
