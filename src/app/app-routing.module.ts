import { StoreComponent } from './components/store/store.component';
import { TeamComponent } from './components/team/team.component';
import { JourneyComponent } from './components/journey/journey.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'journey',component:JourneyComponent},
  {path:'team',component:TeamComponent},
  {path:'store',component:StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
