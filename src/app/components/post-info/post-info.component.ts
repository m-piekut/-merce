import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.scss']
})
export class PostInfoComponent implements OnInit {
  @Input() comment: any
  postInfo: any ;
  id: any;
  url: any
  comments: any;
  displayElement = false

  name: string;
  email: string;
  body: string;


  showForm(){
    this.displayElement = !this.displayElement
  }
  onSubmit=() => {
    if(!this.name){
      alert('Prosze uzupełnić nazwę!')
      return;
    }
    if(!this.email){
      alert('Prosze uzupełnić email!')
      return;
    }
    if(!this.body){
      alert('Prosze uzupełnić treść!')
      return;
    }

    const newComment = {
      name: this.name,
      email: this.email,
      body: this.body,
    }
    this.comments.push(newComment)

    this.displayElement= false

    this.name = ''
    this.email = ''
    this.body = ''
  }

  constructor(private http : HttpClient, private router :ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id
    this.url = "https://jsonplaceholder.typicode.com/posts/" + this.id;
    this.http.get(this.url)
    .subscribe(Response => {
      if(Response){
      }
      this.postInfo=Response;
    });

    this.http.get(this.url + '/comments')
    .subscribe(Response => {
      if(Response){

      }

      this.comments=Response;
    });



  }

}
