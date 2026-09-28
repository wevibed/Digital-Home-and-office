export const SITE = {
  brand: "DIGITAL HOME & OFFICE",
  shortBrand: "DIGITAL HOME & OFFICE",
  tagline: "Reliable Tech For Your Home & Office",
  eyebrow: "Tech for work. Life. Everything.",
  subtagline: "Computers, electronics and everyday technology to keep you connected, productive and entertained.",
  addressLine1: "Eastgate Market, Stall D2",
  addressLine2: "Harare, Zimbabwe",
  hours: "Message us for current hours",
  status: "Fast Delivery · Message Us On WhatsApp",
  whatsapp: "263773819195",
  phoneDisplay: "077 381 9195",
  instagram: "",
  facebook: "",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Eastgate+Market+Harare",
};

export const IMAGES = {
  hero: "/hero-tech.png",
  laptop: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  phone: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
  monitor: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg",
  accessories: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
  printer: "https://images.pexels.com/photos/392228/pexels-photo-392228.jpeg",
  networking: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg",
};

export const CATEGORIES = [
  { name: "Laptops", image: IMAGES.laptop },
  { name: "Phones & Tablets", image: IMAGES.phone },
  { name: "Monitors", image: IMAGES.monitor },
  { name: "Accessories", image: IMAGES.accessories },
  { name: "Printers", image: IMAGES.printer },
  { name: "Networking", image: IMAGES.networking },
];

export function whatsappLink(message = "Hi Digital Home & Office! I'd like to enquire about your products.") {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryLink(product) {
  return whatsappLink(`Hi Digital Home & Office! I'm interested in the ${product.name}. Is it currently available?`);
}
