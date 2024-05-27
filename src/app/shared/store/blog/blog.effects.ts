import { Injectable } from "@angular/core";
import { MasterService } from "../../master.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LOAD_BLOG_SUCCESS, loadBlog, loadBlogSuccess } from "./blog.action";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";


@Injectable()
export class BlogEffects{

    constructor(private masterServices:MasterService,private action$:Actions){}
    
    _blog=createEffect(()=>
        this.action$.pipe(
            ofType(loadBlog),
            exhaustMap((action)=>{
                console.log(action);
                return this.masterServices.getAllBlogs().pipe(
                    map((data)=>{
                        return loadBlogSuccess({bloglist:data})
                    }),
                    catchError(()=>EMPTY)
                )
            })
        )

    )

}