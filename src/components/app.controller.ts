import { AppService } from "./app.service";
import { TodoModelModule } from "./model/Todo";

export module AppController{
  export async function helloWorld() {
    let response: TodoModelModule.Todo = await AppService.fetchJsonData()
    return response
  }
}
