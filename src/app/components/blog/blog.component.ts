import { Component, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { blogModel } from 'src/app/shared/store/blog/blog.model';
import { getBlogs } from 'src/app/shared/store/blog/blog.selector';
import { GlobalState } from 'src/app/shared/store/global/global.state';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {

  objectEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private store: Store<GlobalState> ) {}

  blogs !: blogModel[]
  

  ngOnInit(): void {
    this.store.select(getBlogs).subscribe(data => {
      this.blogs=data
    });
  }

  EditBlog(blogId: number) {
    this.dataSend(blogId,'Edit Blog:',true);

    }
    
  dataSend(blogId: number, title: string, isEdit: boolean){
      const data={
        id:blogId as number,
        title:title as string,
        isEdit:isEdit
      };
      this.objectEmitter.emit(data)
    };

 

}
