import { createAction, props } from "@ngrx/store";
import { blogModel } from "./blog.model";

export const LOAD_BLOG_SUCCESS="[Blog Page] loadBlogSuccess"
export const loadBlog=createAction('loadBlog');

export const loadBlogSuccess= createAction(LOAD_BLOG_SUCCESS,props<{bloglist:blogModel[]}>())
export const allBlogs=createAction('allBlogs',props<{blogInput:blogModel}>());
export const addNewBlog=createAction('addNewBlog',props<{newBlog:blogModel}>());
export const updateBlog=createAction('updateBlog',props<{updateExistBlog:blogModel}>());
export const deleteBlog=createAction('deleteBlog',props<{blogId:number}>());