import router from 'Routes/router'
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from 'Controllers/todos'

router.get('/todos', getTodos)

router.post('/todos', createTodo)

router.patch('/todos/:id', updateTodo)

router.delete('/todos/:id', deleteTodo)
