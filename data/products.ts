export interface Product {
  id: string
  category: string
  name: string
  description: string
  image: string
  price?: string
}

export interface GalleryImage {
  id: string
  title: string
  image: string
  description: string
}

export const CATEGORIES = ["All", "School Uniforms", "Industrial Uniforms", "Safety Shoes", "Aprons & Accessories"]

export const PRODUCTS: Product[] = [
  {
    id: "1",
    category: "School Uniforms",
    name: "Primary School Uniform Set",
    description: "Comfortable and durable uniform for primary school students",
    image: "/primary-school-uniform-white-navy.jpg",
  },
  {
    id: "2",
    category: "School Uniforms",
    name: "Secondary School Uniform",
    description: "Professional uniform set for secondary school students",
    image: "/secondary-school-uniform-formal.jpg",
  },
  {
    id: "3",
    category: "Industrial Uniforms",
    name: "Factory Worker Uniform",
    description: "Heavy-duty uniform designed for industrial workers",
    image: "/industrial-worker-uniform-safety.jpg",
  },
  {
    id: "4",
    category: "Industrial Uniforms",
    name: "Corporate Office Uniform",
    description: "Professional uniform for corporate office staff",
    image: "/corporate-office-uniform-professional.jpg",
  },
  {
    id: "5",
    category: "Safety Shoes",
    name: "Steel Toe Safety Shoes",
    description: "Protective safety shoes with steel toe cap",
    image: "/steel-toe-safety-shoes-black.jpg",
  },
  {
    id: "6",
    category: "Safety Shoes",
    name: "Slip-Resistant Work Shoes",
    description: "Professional slip-resistant work shoes for safety",
    image: "/slip-resistant-work-shoes.jpg",
  },
  {
    id: "7",
    category: "Aprons & Accessories",
    name: "Kitchen Chef Apron",
    description: "Durable apron for kitchen and culinary professionals",
    image: "/kitchen-chef-apron-white.jpg",
  },
  {
    id: "8",
    category: "Aprons & Accessories",
    name: "Industrial Work Apron",
    description: "Heavy-duty work apron with multiple pockets",
    image: "/industrial-work-apron-safety.jpg",
  },
]

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    title: "School Uniforms Collection",
    image: "/school-uniforms-collection-display.jpg",
    description: "Our premium school uniforms collection",
  },
  {
    id: "2",
    title: "Industrial Safety Wear",
    image: "/industrial-safety-wear-products.jpg",
    description: "High-quality industrial safety uniforms",
  },
  {
    id: "3",
    title: "Professional Workwear",
    image: "/professional-workwear-display.jpg",
    description: "Professional workwear for various industries",
  },
  {
    id: "4",
    title: "Safety Equipment",
    image: "/safety-equipment-shoes-display.jpg",
    description: "Complete safety equipment and protective wear",
  },
   {
    id: "5",
    title: "Protective Gear",
    image: "protective.jpg",
    description: "Complete safety equipment and protective wear",
  },
   {
    id: "6",
    title: "Industrial Uniform",
    image: "industrial.jpg",
    description: "Complete safety  and protective wear",
  },
]

export const COMPANY_INFO = {
  name: "Bhairav Textorium",
  tagline: "Uniforms & Safety Wear Specialists",
  address: "Peenya, Bengaluru, India",
  phone: "+91 7947141026",
  whatsapp: "+91-7947141026",
  email: "enquiry@bhairavtextorium.com",
  description:
    "Bhairav Textorium has been serving the uniform and safety wear industry for over 20 years. We provide high-quality uniforms for schools, industries, and professional organizations across Bengaluru.",
  mission:
    "Our mission is to provide affordable, durable, and professionally designed uniforms that meet international safety standards while maintaining exceptional quality and customer service.",
}
