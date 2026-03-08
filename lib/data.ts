export type NavItem = { label: string; href: string };
export type StepItem = { title: string; desc: string };
export type GalleryItem = { name: string; image: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "O nas", href: "#" },
  { label: "Galeria", href: "#" },
  { label: "Opinie", href: "#" },
  { label: "Kontakt", href: "#" },
];

export const steps: StepItem[] = [
  { title: "1. Wybierz wzór", desc: "Wybierz ulubiony motyw" },
  { title: "2. Dodaj dane", desc: "Podaj imię, datę, wagę i wzrost" },
  { title: "3. Odbierz gotową metryczkę", desc: "Otrzymaj śliczną metryczkę" },
];

export const galleryItems: GalleryItem[] = [
  { name: "Antosia", image: "/assets/posters/poster-antosia.svg" },
  { name: "Leon", image: "/assets/posters/poster-leon.svg" },
  { name: "Amelia", image: "/assets/posters/poster-amelia.svg" },
];
