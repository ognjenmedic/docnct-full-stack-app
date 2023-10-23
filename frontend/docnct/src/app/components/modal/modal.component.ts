import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { SlideInAnimation } from "src/app/shared/slide-in.animation";
import { AnimationEvent } from "@angular/animations";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
  animations: [SlideInAnimation],
})
export class ModalComponent implements OnInit {
  @Output() closed = new EventEmitter<void>();
  // Add this flag to control the animation state
  isExiting = false;

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.isExiting = true; // Start the exit animation
  }

  animationDone(event: AnimationEvent) {
    if (event.toState === "void" || this.isExiting) {
      this.closed.emit();
    }
    this.isExiting = false;
  }

  startExitAnimation() {
    this.onClose();
  }
}
