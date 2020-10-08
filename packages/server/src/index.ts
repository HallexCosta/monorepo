import cors from 'cors'
import { routes } from './routes'

import { app } from './app'

app.use(cors())
app.use(routes)

app.listen(3333, () => {
  console.log('Server running')
})
