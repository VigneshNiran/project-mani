import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudComponent } from '../app/stud/stud.component';

const routes: Routes = [
  { path: 'student', component: StudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
