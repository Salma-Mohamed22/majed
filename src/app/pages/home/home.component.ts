import { Component } from '@angular/core';
import { CardComponent } from '../../shared/component/card/card.component';
import { DividedSectionComponent } from '../../shared/component/divided-section/divided-section.component';
import { ServicesComponent } from '../../shared/services/services.component';
import { ContactUsComponent } from '../../shared/component/contact-us/contact-us.component';
import { ProgramsComponent } from '../../shared/component/programs/programs.component';

@Component({
  selector: 'app-home',
  imports: [
    CardComponent,
    DividedSectionComponent,
    ServicesComponent,
    ContactUsComponent,
    ProgramsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
