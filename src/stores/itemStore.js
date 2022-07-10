import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _items = [];
let _item={};

class ItemStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getItems() {
    return _items;
  }

  getItemByGuid(guid) {
    _item=_items.find(item => item.guid === guid);
    return _item;
  }
}

const store = new ItemStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.DELETE_ITEM:
      _items = _items.filter(
        item => item.guid !== action.guid
      );
      store.emitChange();
      break;
    case actionTypes.CREATE_ITEM:
      _items.push(action.item);
      store.emitChange();
      break;
    case actionTypes.UPDATE_ITEM:
      _items = _items.map(item =>
        item.guid === action.item.guid ? action.item : item
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_ITEMS:
      _items = action.items;
      store.emitChange();
      break;
      case actionTypes.LOAD_ITEM:
      _item = action.item;
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});

export default store;
