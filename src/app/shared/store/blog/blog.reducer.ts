import { createReducer, on } from '@ngrx/store';
import { initialBlogState } from './blog.state';
import { addNewBlog, allBlogs, deleteBlog, loadBlog, loadBlogSuccess, updateBlog } from './blog.action';
import { blogModel } from './blog.model';


const _blogReducer = createReducer(
  initialBlogState,
  on(loadBlog, (state) => {
    console.log('load blog()');
    return {
      ...state
    };
  }),
  on(loadBlogSuccess, (state,action) => {
    console.log('load blog success');
    
    return {
      ...state,
      bloglist:[...action.bloglist]
    };
  }),
  on(allBlogs, (state,action) => {
    const _blog={...action.blogInput}
    return {
      ...state,
      bloglist:[...state.bloglist,_blog]
    };
  }),
  on(addNewBlog, (state,action) => {
    const _blog={...action.newBlog};
    _blog.id=state.bloglist.length+1;
    return {
      ...state,
      bloglist:[...state.bloglist,_blog]
    };
  }),
  on(updateBlog, (state,action) => {
    const _blog={...action.updateExistBlog};
    const updatedBlog=state.bloglist.map(blog=>{
      return blog.id===_blog.id?_blog:blog
    })
        return {
      ...state,
      bloglist:updatedBlog
    };
  }),
  on(deleteBlog, (state,action) => {

    const updatedBlog=state.bloglist.filter((blog:blogModel)=>{
      return blog.id !== action.blogId
    })
      return {
      ...state,
      bloglist:updatedBlog
    };
  })
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}

