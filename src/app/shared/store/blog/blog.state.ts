import { blogModel, blogs } from './blog.model';

export const initialBlogState: blogs = {
  bloglist: [
    { id: 1, title: 'NGRX', description: 'state manage for angular apps' }
  ],
};
