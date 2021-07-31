import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPosts } from './store/posts.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app2';
  constructor(private http : HttpClient, private store: Store<{posts:{posts: any}}>){}
  posts: any




  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(Response => {
      if(Response){
      }
      this.posts=Response;
      this.store.dispatch(getPosts({posts: this.posts}))
    });



  }
}
