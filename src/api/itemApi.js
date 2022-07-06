import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/items/";

export function getItems() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getItemByGuid(guid) {
  return fetch(baseUrl + "?guid=" + guid)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((items) => {
        if (items.length !== 1) throw new Error("Item not found: " + guid);
        return items[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveItem(item) {
  return fetch(baseUrl + (item.guid || ""), {
    method: item.guid ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ item })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteItem(itemGuid) {
  return fetch(baseUrl + itemGuid, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
