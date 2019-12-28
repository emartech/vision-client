export const getters = {
  flipperOn: state => flipper => state.flippers.includes(flipper),
  flipperOff: state => flipper => !state.flippers.includes(flipper)
};
