interface Feature {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

interface Slide {
  backgroundImage: string;
  features: Feature[];
}

interface MovingTextItem {
  text: string;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}