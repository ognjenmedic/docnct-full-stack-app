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
      animate("400ms ease-in-out", style({ transform: "translateX(0%)" })),
    ]),
    transition(":leave", [
      style({ transform: "translateX(0%)" }),

      animate("400ms ease-in-out", style({ transform: "translateX(100%)" })),
    ]),
  ]),
];
