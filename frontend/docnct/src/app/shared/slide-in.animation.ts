import {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition,
} from "@angular/animations";

export const SlideInAnimation = [
  trigger("slideIn", [
    transition(":enter", [
      style({ transform: "translateX(100%)" }),
      animate("300ms ease-in", style({ transform: "translateX(0%)" })),
    ]),
    transition(":leave", [
      animate("300ms ease-out", style({ transform: "translateX(100%)" })),
    ]),
  ]),
];
