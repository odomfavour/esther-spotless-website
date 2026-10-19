export interface Testimonial {
  name: string;
  text: string;
  image?: string;
}

// Transcribed from the client-provided review cards. David Ufada's duplicate is included once.
// Add an approved image URL to each entry when customer portraits are available.
export const customerTestimonials: Testimonial[] = [
  {
    name: "Esther Joshua",
    text: "I'm happy I chose you. I've seen pictures and videos and you did an amazing job.",
  },
  {
    name: "Prosper Ekanem",
    text: "I highly recommend. You guys did a great job.",
  },
  {
    name: "Mrs. Cecilia",
    text: "I'm shocked at the service you render. You truly beat my expectation. Thank you.",
  },
  {
    name: "Udom Paul",
    text: "The house is heaven on earth after cleaning. You are dedicated and hardworking. You will go places with your work. Thank you.",
  },
  {
    name: "Mr. David Ufada",
    text: "Satisfied is an understatement. Your work made me crave to come back home. Everywhere is just sparkling. I'm definitely calling for your service again. It was indeed a spotless touch. Thank you.",
  },
  {
    name: "Martins Bespoke",
    text: "They did a fantastic work on my space. I recommend them always.",
  },
  {
    name: "Mr. Ogochukwu",
    text: "Thank you so much for the great job you did in our compound. You put your heart and soul into it and gave us the best. Thank you so much for going the extra mile. God bless you.",
  },
];
