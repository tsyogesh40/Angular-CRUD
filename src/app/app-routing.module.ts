import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetUsersComponent } from './get-users/get-users.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';

const routes: Routes = [
  {path:'',component:GetUsersComponent},
  { path: 'getusers', component: GetUsersComponent },
  { path: 'createusers', component: CreateUsersComponent },
  { path: 'updateusers/:id', component: UpdateUsersComponent },
  { path: 'deleteusers', component: DeleteUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
