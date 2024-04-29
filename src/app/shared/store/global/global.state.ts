import { blogModel, blogs } from "../blog/blog.model";
import { countermodel } from "../counter/counter.model";

export interface GlobalState{
    counter:countermodel,
    blog:blogs
}