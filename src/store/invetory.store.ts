import {action, makeObservable, observable} from 'mobx';
import {STATE_STATUS} from '../utils/constant';
import {Inventory} from '../utils/types';

class InvetoryData {
  stateStatus;
  invetoryData: Inventory[];

  constructor() {
    this.stateStatus = STATE_STATUS.EMPTY;
    this.invetoryData = [];
    makeObservable(this, {
      stateStatus: observable,
      invetoryData: observable,
      reset: action,
      setStateStatus: action,
      updateInvetory: action,
    });
  }
  setStateStatus(status: string) {
    this.stateStatus = status;
  }
  updateInvetory(data: Inventory[]) {
    this.invetoryData = data;
  }
  reset() {}
}

export const InvetoryStore = new InvetoryData();
