import dispatcher from "../appDispatcher";
import * as itemApi from "../api/itemApi";
import actionTypes from "./actionTypes";


export function saveItem(item) {
    return itemApi.saveItem(item).then(savedItem => {
      // Hey dispatcher, go tell all the stores that a course was just created.
      dispatcher.dispatch({
        actionType: item.guid
          ? actionTypes.UPDATE_ITEM
          : actionTypes.CREATE_ITEM,
        item: savedItem
      });
    });
  }
  
  export function loadItems() {
    return itemApi.getItems().then(items => {
      dispatcher.dispatch({
        actionType: actionTypes.LOAD_ITEMS,
        items: items
      });
    });
  }

  export function loadItemByGuid(guid) {
    return itemApi.getItemByGuid(guid).then(item => {
      dispatcher.dispatch({
        actionType: actionTypes.LOAD_ITEM,
        item: item
      });
    });
  }
  
  export function deleteItem(guid) {
    return itemApi.deleteItem(guid).then(() => {
      dispatcher.dispatch({
        actionType: actionTypes.DELETE_ITEM,
        guid: guid
      });
    });
  }