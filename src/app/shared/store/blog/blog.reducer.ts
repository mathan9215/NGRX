import { createReducer, on } from '@ngrx/store';
import { initialBlogState } from './blog.state';
import { addNewBlog, allBlogs, loadBlog, updateBlog } from './blog.action';


const _blogReducer = createReducer(
  initialBlogState,
  on(loadBlog, (state) => {
    return {
      ...state
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
  })
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}

