import uuidv4 from 'uuid/v4';
export default {
  create: function create() {
    return uuidv4();
  },
  v4: function v4() {
    return uuidv4();
  }
};