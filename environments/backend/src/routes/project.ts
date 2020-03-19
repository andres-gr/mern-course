import router from 'Routes/router'
import { getProject } from 'Controllers/project'

router.get('/project', getProject)
