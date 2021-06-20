import check from 'check-types';
import { isEmptyValue } from './isEmptyValue';
export var getFileLink = function getFileLink(file) {
  return new Promise(function (resolve) {
    if (!check.string(file) && !isEmptyValue(file)) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        resolve(reader.result);
      };
    } else if (check.string(file)) {
      resolve(file);
    }
  });
};