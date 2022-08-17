import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformdemoComponent } from './reactiveformdemo/reactiveformdemo.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';

const routes: Routes = [
  {path:'reactiveform',component:ReactiveformdemoComponent},
  {path:'templateform',component:TemplatedrivenformComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
