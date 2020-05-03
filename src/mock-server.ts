import { setupWorker, rest } from 'msw'

const worker = setupWorker(
  rest.post('/api/login', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'Logged in successfully!',
      }),
    )
  }),
)

worker.start()
