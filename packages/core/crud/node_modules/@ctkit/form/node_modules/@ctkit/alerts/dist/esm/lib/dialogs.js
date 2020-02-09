import swal from 'sweetalert';
import get from 'lodash.get';
import Promise from 'bluebird';
export default {
  confirm: function confirm(title, text, props) {
    return new Promise(function (resolve) {
      swal({
        title: title,
        text: text,
        icon: get(props, 'danger') ? "warning" : null,
        buttons: get(props, 'buttons') || ["Non, annuler!", "Oui, continuer"],
        dangerMode: get(props, 'danger') || false
      }).then(function (value) {
        if (value) {
          resolve();
        }
      });
    });
  }
};