/* https://www.youtube.com/watch?v=qy8PxD3alWw&ab_channel=ColtSteele  => موقع شرح تقنية Express Ts
 */
import express, { Express, Request, Response } from 'express';

// #region  {Global - var}
const port = 8000,
app: Express = express(),
server: Object;
// #endregion


// @desc   Create ....
// @route  get /
// @access public
app.get('/', (req: Request, res: Response) => {
  res.send(`
  HELLO FROM EXPRESS + TS! \n
  you now visit default root,\n
  The project was Done by hussein Apdo..
  `);
});

// @desc   Create ....
// @route  get /hi
// @access public
app.get('/hi', (req: Request, res: Response) => {
  res.send('Hi BomBa!!');
});


// @desc   listen app
// @access Private
server = app.listen(port, () => {
  // console.log(server.address());
  console.log(`now listening on port ${port}`);
});
