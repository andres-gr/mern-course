import {
  RequestHandler,
  Response,
} from 'express'
import uniqueId from 'lodash/uniqueId'
import {
  TodosIdDeleteRequest,
  TodosIdPatchRequest,
} from 'Api/apis'
import {
  DeleteTodoResponse,
  GetTodosResponse,
  PatchTodoResponse,
  PostTodoResponse,
  Todo,
  TodoContent,
} from 'Api/models'
import { ApiParams } from 'Utils/types'

const TODOS: Todo[] = []

const createTodo: RequestHandler = (req, res: Response<PostTodoResponse>) => {
  const body = req.body as { text: string }
  const newTodo: Todo = {
    id   : uniqueId('todo_id_'),
    text : body.text,
  }

  TODOS.push(newTodo)

  res
    .status(201)
    .json({
      message : 'Created new todo',
      todo    : newTodo,
    })
    .end()
}

const getTodos: RequestHandler = (_req, res: Response<GetTodosResponse>) => {
  res
    .status(200)
    .json({
      message : 'Fetched all todos',
      todos   : TODOS,
    })
    .end()
}

const updateTodo: RequestHandler<ApiParams<TodosIdPatchRequest>> = (req, res: Response<PatchTodoResponse>) => {
  const {
    params: { id: todoId },
  } = req
  const { text } = req.body as TodoContent
  const index = TODOS.findIndex(({ id }) => id === todoId)
  if (index < 0) throw new Error('No todo found!')
  if (text) {
    TODOS[index] = {
      ...TODOS[index],
      text,
    }
    res
      .status(200)
      .json({
        message : 'Updated todo',
        todo    : TODOS[index],
      })
      .end()
  }
}

const deleteTodo: RequestHandler<ApiParams<TodosIdDeleteRequest>> = (req, res: Response<DeleteTodoResponse>) => {
  const {
    params: { id: todoId },
  } = req
  const index = TODOS.findIndex(({ id }) => id === todoId)
  if (index < 0) throw new Error('No todo found!')
  const [todo] = TODOS.splice(index, 1)
  res
    .status(200)
    .json({
      message: 'Todo deleted!',
      todo,
    })
    .end()
}

export {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
}
