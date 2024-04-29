import { createFeatureSelector, createSelector } from "@ngrx/store";
import { blogModel, blogs } from "./blog.model";
import { state } from "@angular/animations";

const getBlogState=createFeatureSelector<blogs>('blog')

export const getBlogs=createSelector(getBlogState,(currentBlogState)=>{
    return currentBlogState.bloglist;
}
)

export const getBlogById = (blogId: number) => createSelector(
    getBlogState,
    (blogState) => blogState.bloglist.find((blog: blogModel) => blog.id === blogId) as blogModel
  );