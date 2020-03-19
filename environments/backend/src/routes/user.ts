import router from 'Routes/router'
import { getUser } from 'Controllers/user'

router.get('/user', getUser)
