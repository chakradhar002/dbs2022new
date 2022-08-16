import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PipesComponent } from './pipes/pipes.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';


const routes: Routes = [

{path:'interpolation',component:InterpolationComponent},
{path:'propertybinding',component:PropertybindingComponent},
{path:'eventbinding',component:EventbindingComponent},
{path:'pipes',component:PipesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
