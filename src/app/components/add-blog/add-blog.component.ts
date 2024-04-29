import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addNewBlog, updateBlog } from 'src/app/shared/store/blog/blog.action';
import { blogModel } from 'src/app/shared/store/blog/blog.model';
import { GlobalState } from 'src/app/shared/store/global/global.state';
import { BlogComponent } from '../blog/blog.component';
import { getBlogById } from 'src/app/shared/store/blog/blog.selector';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  blogData!: blogModel;
  editData: any = {};
  title!: string;
  description!: string;
  id!: number;
  header: string = "Add New Blog:";
  blogForm!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private store: Store<GlobalState>,
    private blogComponent: BlogComponent
  ) { }

  ngOnInit(): void {
    this.blogForm = this.builder.group({
      id: this.builder.control(0),
      title: this.builder.control('', Validators.required),
      description: this.builder.control('', Validators.required)
    });

    this.blogComponent.objectEmitter.subscribe(obj => {
      this.editData = obj;
      const id: number = this.editData.id;
      if (this.editData.title) {
        this.header = this.editData.title;
        this.store.select(getBlogById(this.editData.id)).subscribe(data => {
          this.blogData = data;
          this.blogForm.setValue({
            id: this.blogData.id,
            title: this.blogData.title,
            description: this.blogData.description
          });
        });
      }
    });
  }

  addBlog() {
    if (this.blogForm.valid) {
      const _blogInput: blogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string
      };
debugger
      if (Object.keys(this.editData).length !== 0) {
        if (this.editData.isEdit) {
          const _updateBlogInput: blogModel = {
            id: this.editData.id,
            title: this.blogForm.value.title as string,
            description: this.blogForm.value.description as string
          };
          this.store.dispatch(updateBlog({ updateExistBlog: _updateBlogInput }));
          this.editData={}
        }
      } else {
        
        this.store.dispatch(addNewBlog({ newBlog: _blogInput }));
      }
      this.blogForm.reset();
      this.header = "Add New Blog:";
    }
  }
}
