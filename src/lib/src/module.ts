import { NgModule } from '@angular/core';

// import { LibComponent } from './component/lib.component';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [],
  providers: [AuthService],
  exports: []
})
export class AuthModule { }
