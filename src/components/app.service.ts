import { ConStantModule } from "../constant";
import { TodoModelModule } from "./model/Todo";

export module AppService{
  export async function fetchJsonData(){
    let json:TodoModelModule.Todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
    return json
  }
}