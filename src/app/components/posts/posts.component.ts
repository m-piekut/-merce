import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post}  from '../../Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:any = [];//wszystkie posty
  postsSlice = [] // wycinek postów, w zależności od numeru strony
  pageSize = 4; //ile postów na stronie
  howManyPages: number

  event: any = {
    length: this.posts.length,
    pageIndex: 1,
    pageSize: this.pageSize,
    previousPageIndex: 0
  }

  startIndex = this.event.pageIndex * this.event.pageSize;

  pageUp(){
    let arrowLeft: any = document.querySelector('.pagination__arrowLeft')
    let arrowRight: any = document.querySelector('.pagination__arrowRight')


    this.startIndex = this.event.pageIndex * this.event.pageSize;
    let endIndex = this.startIndex + this.event.pageSize;
    this.event.pageIndex = this.event.pageIndex +1,

    this.event.previousPageIndex = this.event.pageIndex  -1
    this.postsSlice = this.posts.slice(this.startIndex, endIndex)


    console.log(this.event);
    console.log(this.event.pageIndex);


    //wyłączanie strzałek
    if(this.event.pageIndex >= 1) { arrowLeft.removeAttribute('disabled', 'true') }
    if(this.event.pageIndex === this.howManyPages) { arrowRight.setAttribute('disabled', 'true') }
  }



  pageDown(){
    let arrowLeft: any = document.querySelector('.pagination__arrowLeft')
    let arrowRight: any = document.querySelector('.pagination__arrowRight')


    this.startIndex = this.event.pageIndex * this.event.pageSize -(this.event.pageSize*2);
    let endIndex = this.startIndex + this.event.pageSize;


    this.event.pageIndex= this.event.pageIndex -1,

    this.event.previousPageIndex= this.event.pageIndex + 1

    this.postsSlice = this.posts.slice(this.startIndex, endIndex)


    //wyłączanie strzałek
    if(this.event.pageIndex === 1) { arrowLeft.setAttribute('disabled', 'true') }
    if(this.event.pageIndex <= this.howManyPages) { arrowRight.removeAttribute('disabled', 'true') }

  }

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(Response => {
      if(Response){
      }
      console.log(Response)
      this.posts=Response;
      this.postsSlice = this.posts.slice(0,4)
      if(this.posts.length % this.pageSize >0){
        this.howManyPages = Math.floor(this.posts.length / this.pageSize) +1
      }else{
        this.howManyPages = this.posts.length / this.pageSize
      }
    });


  }

}
