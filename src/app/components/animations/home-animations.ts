import { trigger, state, style, transition, animate } from "@angular/animations";

export let fade = 
trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate(5000) 
  ])
])

export let fade1 = 
trigger('fade1', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate(10000)
  ])
])