import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DockerizedComponent } from './dockerized/dockerized.component';

const routes: Routes = [
  { path: '', component: DockerizedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
