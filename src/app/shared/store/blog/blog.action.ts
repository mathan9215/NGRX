import { createAction, props } from "@ngrx/store";
import { blogModel } from "./blog.model";

export const loadBlog=createAction('loadBlog');
export const allBlogs=createAction('allBlogs',props<{blogInput:blogModel}>());
export const addNewBlog=createAction('addNewBlog',props<{newBlog:blogModel}>());
export const updateBlog=createAction('updateBlog',props<{updateExistBlog:blogModel}>());