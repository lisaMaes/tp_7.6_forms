import {FormControl} from "@angular/forms";
import _ from 'lodash';


/**
 * Le valeur du champ commennce-t-elle par nk-
 * @param {FormControl} control
 * @returns {{isPrefixNartawak: boolean}}
 */
export function knowledgeValid (control: FormControl) {

  let result:any;

  if(control.value === 'Javascript' || control.value === 'Angular' || control.value === 'TypeScript'){

    result = null;

  }else{

    result = {knowledgeValid : true};
  }

  return result;
};
