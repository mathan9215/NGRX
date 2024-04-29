import { blogModel, blogs } from './blog.model';

export const initialBlogState: blogs = {
  bloglist: [
    { id: 1, title: 'NGRX', description: 'state manage for angular apps' },
    { id: 2, title: 'Redux', description: 'state manage for React apps' },
    {id: 3,title: 'rxjs',description: 'state manage for angular apps using observables',},
  ],
};
