import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelestialsComponent } from '@/app/celestials/celestials.component';
import { CelestialFormComponent } from '@/app/celestials/celestial-form/celestial-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/celestials', pathMatch: 'full', component: CelestialsComponent },
  { path: 'celestials', component: CelestialsComponent },
  { path: 'celestials/new', component: CelestialFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
