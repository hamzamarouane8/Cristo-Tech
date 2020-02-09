import { saveAs } from 'file-saver';
export default {
  openDialog: function openDialog(url, name) {
    saveAs(url, name);
  }
};