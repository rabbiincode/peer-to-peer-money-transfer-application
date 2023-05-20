export interface Card {
  service: string,
  image: string,
  background: string,
  hover: string
}

export interface Slider {
  image: string,
  title: string,
  content: string,
  color: string
}

export interface Accordion {
  position: string,
  title: string,
  content: string
}

export interface Team {
  name: string,
  position: string,
  image: string
  github: string
  twitter: string
  linkedIn: string
}