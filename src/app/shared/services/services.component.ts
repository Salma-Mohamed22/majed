import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: {title:string , img:string}[] = [
    { title: "تصميم المواقع الإلكترونيه", img: "service1.jpeg" },
    { title: "خدمات الهوست والإضافه", img: "service2.jpeg" },
    { title: "تصميم برامج محاسبيه ", img: "service3.jpg" },
    { title: "تصميم برامج تجاريه", img: "service4.webp" },
    { title: "تصميم برامج الجوال ", img: "service5.webp" },
    { title: "التسويق الإلكتروني", img: "service6.webp" }
  ];
}
