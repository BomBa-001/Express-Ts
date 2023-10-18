/* https://www.youtube.com/watch?v=qy8PxD3alWw&ab_channel=ColtSteele  => موقع شرح تقنية Express Ts
 */
import express, { Express, Request, Response } from 'express';
const port = 8000;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`
  HELLO FROM EXPRESS + TS! \n
  you now visit default root,\n
  The project was Done by hussein Apdo..
  `);
});

app.get('/hi', (req: Request, res: Response) => {
  res.send('Hi BomBa!!');
});

const server = app.listen(port, () => {
  // console.log(server.address());
  console.log(`now listening on port ${port}`);
});
