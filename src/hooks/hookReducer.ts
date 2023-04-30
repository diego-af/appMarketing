import { useState, useEffect } from "react";


type Product = {
  id:number,
  name: string
}
interface State {
  product:Product[];
}

type TodoListAction =
  | { type: 'ADD_PRODUCT'; payload: string }
  | { type: 'REMOVE_PRODUCT'; payload: number };



export function reducer(state:State, action: TodoListAction) {
    switch (action.type) {
      case "ADD_PRODUCT":
        return {...state };
      case "REMOVE_PRODUCT":
        return {  };
      default:
        return state;
    }
  }

 