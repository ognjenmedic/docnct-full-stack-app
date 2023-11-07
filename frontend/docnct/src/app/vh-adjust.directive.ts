import { Directive, HostListener, Renderer2, ElementRef } from "@angular/core";

@Directive({
  selector: "[appVhAdjust]",
})
export class VhAdjustDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    this.adjustVh();
  }

  ngOnInit(): void {
    this.adjustVh();
  }

  private adjustVh(): void {
    const vh = window.innerHeight / 100;
    this.renderer.setStyle(this.el.nativeElement, "--vh", `${vh}px`);
  }
}
