import { Component, ElementRef } from '@angular/core';
import { CardComponent } from '../../shared/component/card/card.component';
import { DividedSectionComponent } from '../../shared/component/divided-section/divided-section.component';
import { ServicesComponent } from '../../shared/services/services.component';
import { ContactUsComponent } from '../../shared/component/contact-us/contact-us.component';
import { ProgramsComponent } from '../../shared/component/programs/programs.component';
import { CounterDirective } from '../../directive/counter.directive';

@Component({
  selector: 'app-home',
  imports: [
    CardComponent,
    DividedSectionComponent,
    ServicesComponent,
    ContactUsComponent,
    ProgramsComponent,
    CounterDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const sections = this.el.nativeElement.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing once it animates
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    sections.forEach((section: HTMLElement) => observer.observe(section));
  }
}
