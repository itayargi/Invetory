import {action, makeObservable, observable} from 'mobx';
import {STATE_STATUS} from '../utils/constant';
import {Inventory} from '../utils/types';
import {getInvetoryRequest} from '../api/api';
import {logDev} from '../utils/utils';

class InvetoryData {
  stateStatus;
  invetoryData: Inventory[];
  invetoryObj: any;

  constructor() {
    this.stateStatus = STATE_STATUS.EMPTY;
    this.invetoryData = [];
    this.invetoryObj = {};

    makeObservable(this, {
      stateStatus: observable,
      invetoryData: observable,
      invetoryObj: observable,
      reset: action,
      setStateStatus: action,
      updateInvetory: action,
      updateInvetoryObj: action,
    });
  }
  setStateStatus(status: string) {
    this.stateStatus = status;
  }
  updateInvetory(data: Inventory[]) {
    this.invetoryData = data;
  }
  updateInvetoryObj(val: any) {
    this.invetoryObj = {...this.invetoryObj, ...val};
  }
  async getDataFromSheets() {
    try {
      this.setStateStatus(STATE_STATUS.PENDING);
      const res = await getInvetoryRequest();
      let {values} = res;
      const myValues = [...values];
      const headers = myValues.shift();
      const data = {
        headers: headers,
        data: myValues,
      };
      let [, ...invetoryData] = values.map((data: Inventory[]) => ({
        name: data[0],
        age: data[1],
      }));
      this.updateInvetoryObj(data);
      this.updateInvetory(invetoryData);
      this.setStateStatus(STATE_STATUS.SUCCESS);
    } catch (error) {
      this.setStateStatus(STATE_STATUS.ERROR);
      logDev('error getDataFromSheets: ', error);
    }
  }
  reset() {}
}

export const InvetoryStore = new InvetoryData();
