import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatGridListModule,
  MatCardModule,


} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  imports: [
    MatBadgeModule,
     MatButtonModule,
     MatToolbarModule,
     MatIconModule,
     MatSidenavModule,
     MatListModule,
     MatTabsModule,
     MatGridListModule,
     MatCardModule,
     MatDialogModule],
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule]
})

export class MaterialModule {}
