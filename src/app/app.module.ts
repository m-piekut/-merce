import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JwPaginationModule } from 'jw-angular-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { HeaderComponent } from './components/header/header.component';
import { PostInfoComponent } from './components/post-info/post-info.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';






const appRoutes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'post/:id', component: PostInfoComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostItemComponent,
    HeaderComponent,
    PostInfoComponent,




  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    FormsModule,
    JwPaginationModule,
    NoopAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
