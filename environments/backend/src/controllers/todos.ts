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
import { ReqHandler } from 'Utils/types'

const TODOS: Todo[] = []

const createTodo: ReqHandler<never, PostTodoResponse> = (req, res) => {
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

const getTodos: ReqHandler<never, GetTodosResponse> = (_req, res) => {
  res
    .status(200)
    .json({
      message : 'Fetched all todos',
      todos   : TODOS,
    })
    .end()
}

const updateTodo: ReqHandler<TodosIdPatchRequest, PatchTodoResponse> = (req, res) => {
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

const deleteTodo: ReqHandler<TodosIdDeleteRequest, DeleteTodoResponse> = (req, res) => {
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
