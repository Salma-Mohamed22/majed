import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  imports: [CommonModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent {
  programs = [
    {
      title: "المطاعم والكافيهات",
      items: [
        { name: "خدمة الاون لاين", exists: true },
        { name: "الاصناف", exists: true },
        { name: "حركة المخازن", exists: true },
        { name: "الحسابات", exists: true },
        { name: "تطبيقات الجوال", exists: false },
        { name: "تطبيقات الويب", exists: false },
        { name: "خدمة الدعم الفني", exists: true }
      ]
    },
    {
      title: "المخازن والحسابات",
      items: [
        { name: "خدمة الاون لاين", exists: true },
        { name: "الاصناف", exists: true },
        { name: "حركة المخازن", exists: true },
        { name: "الحسابات", exists: true },
        { name: "تطبيقات الجوال", exists: false },
        { name: "تطبيقات الويب", exists: true },
        { name: "خدمة الدعم الفني", exists: true }
      ]
    },
    {
      title: "النسخه الذهبيه",
      items: [
        { name: "خدمة الاون لاين", exists: true },
        { name: "الاصناف", exists: true },
        { name: "حركة المخازن", exists: true },
        { name: "الحسابات", exists: true },
        { name: "تطبيقات الجوال", exists: true },
        { name: "تطبيقات الويب", exists: true },
        { name: "خدمة الدعم الفني", exists: true }
      ]
    }
  ];
}
