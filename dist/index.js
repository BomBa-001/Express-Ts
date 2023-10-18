"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* https://www.youtube.com/watch?v=qy8PxD3alWw&ab_channel=ColtSteele  => موقع شرح تقنية Express Ts
 */
const express_1 = __importDefault(require("express"));
// #region  {Global - var}
const port = 8000, app = (0, express_1.default)(), server;
// #endregion
// @desc   Create ....
// @route  get /
// @access public
app.get('/', (req, res) => {
    res.send(`
  HELLO FROM EXPRESS + TS! \n
  you now visit default root,\n
  The project was Done by hussein Apdo..
  `);
});
// @desc   Create ....
// @route  get /hi
// @access public
app.get('/hi', (req, res) => {
    res.send('Hi BomBa!!');
});
// @desc   listen app
// @access Private
server = app.listen(port, () => {
    // console.log(server.address());
    console.log(`now listening on port ${port}`);
});
