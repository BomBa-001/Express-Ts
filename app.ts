// require('dotenv').config({ path: __dirname+'/.env' }); /* if use lang (.js) to use file .env*/
import 'dotenv/config';                                /* if use lang (.ts) to use file .env*/

import express from "express";
const app = express();

//#region [ Middlewares ]
  
  // @desc   app.use(middleware : express.json())
  // @access Private
  app.use(express.json());

//#endregion

//#region [ routes ]

  // @desc   postRoute
  // @access public
  import postRoute from './routes/postRoute';
  app.use(`/api/posts`,postRoute);

//#endregion

//#region [ Running The Server ]

  // @desc   PORT to run The Server
  // @access Private
  const PORT:number =  +(process.env.PORT as string) || 3000;

  // @desc   Running The Server
  // @access Private
  app.listen(PORT,()=>console.log(`Server is listening on ${PORT}`));

//#endregion