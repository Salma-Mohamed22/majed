import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective {
  @Input() startCount: number = 0; // Starting value
  @Input() targetCount: number = 1000; // Final value
  @Input() duration: number = 1000; // Duration in milliseconds
  @Input() delay: number = 0; // Optional delay before the animation starts

  private interval: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Automatically trigger the counter animation when the directive initializes
  ngOnInit(): void {
    setTimeout(() => {
      this.animateCount(this.startCount, this.targetCount, this.duration);
    }, this.delay);
  }

  private animateCount(start: number, target: number, duration: number) {
    const steps = Math.abs(target - start) / (duration / 10);
    const increment = target > start ? steps : -steps;
    let currentCount = start;

    this.interval = setInterval(() => {
      currentCount += increment;

      if ((increment > 0 && currentCount >= target) || (increment < 0 && currentCount <= target)) {
        currentCount = target;
        this.clearInterval();
      }

      this.updateCount(Math.round(currentCount));
    }, 10);
  }

  private updateCount(count: number) {
    const formattedCount = count.toLocaleString();
    this.renderer.setProperty(this.el.nativeElement, 'textContent', formattedCount);
  }

  private clearInterval() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
