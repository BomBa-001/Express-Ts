import { Router, Request, Response } from "express";
import post from "../models/post";
import createPostDto from "../dtos/create-post.dto";

const routes = Router();


//#region [ Database ]

  // @desc   fake table posts database
  // @access Private
  const posts = [
    {_id: 1, title:`post 01` , body:`about post 01 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam, reprehenderit debitis nam suscipit cumque, optio ea velit quam nostrum ipsam. Ex iste illo voluptate provident molestiae aliquam hic ab?`, _created_at:`Tuesday, 01/16/2024, 10:42:53`, _updated_at:`Tuesday, 01/16/2024, 10:42:53`},
    {_id: 2, title:`post 02` , body:`about post 02 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam, reprehenderit debitis nam suscipit cumque, optio ea velit quam nostrum ipsam. Ex iste illo voluptate provident molestiae aliquam hic ab?`, _created_at:`Tuesday, 01/16/2024, 10:42:53`, _updated_at:`Tuesday, 01/16/2024, 10:42:53`},
    {_id: 3, title:`post 03` , body:`about post 03 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam, reprehenderit debitis nam suscipit cumque, optio ea velit quam nostrum ipsam. Ex iste illo voluptate provident molestiae aliquam hic ab?`, _created_at:`Tuesday, 01/16/2024, 10:42:53`, _updated_at:`Tuesday, 01/16/2024, 10:42:53`},
    {_id: 4, title:`post 04` , body:`about post 04 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam, reprehenderit debitis nam suscipit cumque, optio ea velit quam nostrum ipsam. Ex iste illo voluptate provident molestiae aliquam hic ab?`, _created_at:`Tuesday, 01/16/2024, 10:42:53`, _updated_at:`Tuesday, 01/16/2024, 10:42:53`},
    {_id: 5, title:`post 05` , body:`about post 05 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam, reprehenderit debitis nam suscipit cumque, optio ea velit quam nostrum ipsam. Ex iste illo voluptate provident molestiae aliquam hic ab?`, _created_at:`Tuesday, 01/16/2024, 10:42:53`, _updated_at:`Tuesday, 01/16/2024, 10:42:53`},
    {_id: 6, title:`post 06` , body:`about post 06 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam, reprehenderit debitis nam suscipit cumque, optio ea velit quam nostrum ipsam. Ex iste illo voluptate provident molestiae aliquam hic ab?`, _created_at:`Tuesday, 01/16/2024, 10:42:53`, _updated_at:`Tuesday, 01/16/2024, 10:42:53`},
    {_id: 7, title:`post 07` , body:`about post 07 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam, reprehenderit debitis nam suscipit cumque, optio ea velit quam nostrum ipsam. Ex iste illo voluptate provident molestiae aliquam hic ab?`, _created_at:`Tuesday, 01/16/2024, 10:42:53`, _updated_at:`Tuesday, 01/16/2024, 10:42:53`},
    {_id: 8, title:`post 08` , body:`about post 08 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam, reprehenderit debitis nam suscipit cumque, optio ea velit quam nostrum ipsam. Ex iste illo voluptate provident molestiae aliquam hic ab?`, _created_at:`Tuesday, 01/16/2024, 10:42:53`, _updated_at:`Tuesday, 01/16/2024, 10:42:53`},
    {_id: 9, title:`post 09` , body:`about post 09 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam, reprehenderit debitis nam suscipit cumque, optio ea velit quam nostrum ipsam. Ex iste illo voluptate provident molestiae aliquam hic ab?`, _created_at:`Tuesday, 01/16/2024, 10:42:53`, _updated_at:`Tuesday, 01/16/2024, 10:42:53`},
    {_id:10, title:`post 10` , body:`about post 10 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam, reprehenderit debitis nam suscipit cumque, optio ea velit quam nostrum ipsam. Ex iste illo voluptate provident molestiae aliquam hic ab?`, _created_at:`Tuesday, 01/16/2024, 10:42:53`, _updated_at:`Tuesday, 01/16/2024, 10:42:53`},
  ];

//#endregion

//#region [ routes ]

  // @desc   GET - get all posts
  // @access public
  routes.get(`/`,(req:Request,res:Response) => {
    try {
      // res.status(200).json({status:200,message:`Success`,data:posts});
      SuccessFn(res,posts);
    } catch (error) {
      // res.status(400).json({status:400,message:`Error`,error});
      ErrorFn(res,error,400);
    }
  })

  // @desc   POST - Create a new post
  // @access public
  routes.post(`/`,(req:Request,res:Response) => {
    try {
      const {title,body}=req.body as createPostDto;
      
      const newPost = new post(title,body);
      posts.push(newPost);/* code insert in Database */
      SuccessFn(res,newPost,201);
    } catch (error) {
      ErrorFn(res,error,400);
    }
  })

//#endregion

//#region [ Functions-Global ]

  // @desc   Success
  // @access public
  function SuccessFn(res:Response,data:any,status:number=200) {
      return res.status(status).json({status,message:`Success`,data});
  }

  // @desc   Error
  // @access public
  function ErrorFn(res:Response,error:any,status:number=400) {
      return res.status(status).json({status,message:`Error`,error});
  }

//#endregion

export default routes;