import React,{useState} from 'react'
import {AppController} from './app.controller'
import { TodoModelModule } from './model/Todo'
export default function HelloWorld() {
  const [jsonData,setJsonData] = useState<TodoModelModule.Todo>()
  async function fetchJsonData() {
    let data: TodoModelModule.Todo = await AppController.helloWorld()
    setJsonData(data)
  }
  return (
    <div>
      <button
        onClick={fetchJsonData}
      >Hello</button>
      <p>
        {jsonData?.id}
        {jsonData?.title}
        {jsonData?.userId}
        {jsonData?.completed}
      </p>
      </div>
  )
}