
export type GraniteProduct = {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  applications: string[];
  finishes: string[];
  images: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

// Temporary sample images.
// Replace these with actual granite photographs when available.
const sampleImages = {
  black: [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
  ],
  white: [
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
  ],
  brown: [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  ],
  other: [
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
  ],
};

type ProductEntry = {
  name: string;
  slug: string;
  category: string;
  description: string;
  imageGroup: keyof typeof sampleImages;
};

const productEntries: ProductEntry[] = [
  // Existing website products
  {
    name: "GD Brown Granite",
    slug: "gd-brown-granite",
    category: "Brown Granite",
    description: "GD Brown Granite brings a warm brown stone character to projects seeking a rich and grounded visual finish.",
    imageGroup: "brown",
  },
  {
    name: "Black Galaxy Granite",
    slug: "black-galaxy-granite",
    category: "Black Granite",
    description: "Black Galaxy Granite is presented for designs that favour a dramatic dark surface with a distinctive visual presence.",
    imageGroup: "black",
  },
  {
    name: "Colonial White Granite",
    slug: "colonial-white-granite",
    category: "White Granite",
    description: "Colonial White Granite offers a light-toned stone option for interiors and architectural spaces with a calm appearance.",
    imageGroup: "white",
  },

  // Rajasthan Granite Brochure
  {
    name: "Thunder Black Granite",
    slug: "thunder-black-granite",
    category: "Black Granite",
    description: "Thunder Black Granite features a dark visual character suited to bold stone selections and contemporary design concepts.",
    imageGroup: "black",
  },
  {
    name: "Majestic Black Granite",
    slug: "majestic-black-granite",
    category: "Black Granite",
    description: "Majestic Black Granite is a dark stone option for projects looking for a strong and elegant surface appearance.",
    imageGroup: "black",
  },
  {
    name: "River Black Granite",
    slug: "river-black-granite",
    category: "Black Granite",
    description: "River Black Granite displays a flowing dark-stone character that can add visual movement to architectural surfaces.",
    imageGroup: "black",
  },
  {
    name: "Galaxy Rajasthan Granite",
    slug: "galaxy-rajasthan-granite",
    category: "Black Granite",
    description: "Galaxy Rajasthan Granite presents a dark, distinctive look for projects seeking a striking granite surface.",
    imageGroup: "black",
  },
  {
    name: "Pearl Black Granite",
    slug: "pearl-black-granite",
    category: "Black Granite",
    description: "Pearl Black Granite brings a refined dark appearance to spaces where a sophisticated stone finish is desired.",
    imageGroup: "black",
  },
  {
    name: "Rajasthan Black Granite",
    slug: "rajasthan-black-granite",
    category: "Black Granite",
    description: "Rajasthan Black Granite is a versatile dark-coloured option for a range of residential and commercial design schemes.",
    imageGroup: "black",
  },
  {
    name: "Rajasthan Black Granite (Blue Dot)",
    slug: "rajasthan-black-blue-dot-granite",
    category: "Black Granite",
    description: "Rajasthan Black Granite (Blue Dot) is listed as a distinct blue-dot variant in the Rajasthan granite collection.",
    imageGroup: "black",
  },
  {
    name: "Forest Black Granite",
    slug: "forest-black-granite",
    category: "Black Granite",
    description: "Forest Black Granite offers a deep, dramatic stone appearance for statement surfaces and interior design projects.",
    imageGroup: "black",
  },
  {
    name: "Crystal Blue Granite",
    slug: "crystal-blue-granite",
    category: "Blue Granite",
    description: "Crystal Blue Granite introduces a blue-toned stone option for designs that call for a distinctive colour palette.",
    imageGroup: "other",
  },
  {
    name: "Fish Black Granite",
    slug: "fish-black-granite",
    category: "Black Granite",
    description: "Fish Black Granite is included in the dark granite range for projects seeking a characterful black stone surface.",
    imageGroup: "black",
  },
  {
    name: "Lapatro Black Granite",
    slug: "lapatro-black-granite",
    category: "Black Granite",
    description: "Lapatro Black Granite offers another dark-toned choice within the Rajasthan collection for varied architectural applications.",
    imageGroup: "black",
  },
  {
    name: "Markino Black Granite",
    slug: "markino-black-granite",
    category: "Black Granite",
    description: "Markino Black Granite is a dark stone selection for projects built around understated and sophisticated surfaces.",
    imageGroup: "black",
  },
  {
    name: "Metz Granite",
    slug: "metz-granite",
    category: "Multi-colour Granite",
    description: "Metz Granite has a distinctive visual identity in the collection, making it an option for expressive stone design schemes.",
    imageGroup: "other",
  },
  {
    name: "Ktize Granite",
    slug: "ktize-granite",
    category: "Brown Granite",
    description: "Ktize Granite is featured in the Rajasthan colour granite range for projects seeking a rich, warm stone appearance.",
    imageGroup: "brown",
  },
  {
    name: "Pebble Black Granite",
    slug: "pebble-black-granite",
    category: "Black Granite",
    description: "Pebble Black Granite stands out through its pebble-like visual pattern and dark overall stone character.",
    imageGroup: "black",
  },
  {
    name: "Teak Wood Granite",
    slug: "teak-wood-granite",
    category: "Brown Granite",
    description: "Teak Wood Granite brings a wood-inspired colour character to natural stone surfaces and design applications.",
    imageGroup: "brown",
  },
  {
    name: "Kashmiri Gold Granite",
    slug: "kashmiri-gold-granite",
    category: "Gold Granite",
    description: "Kashmiri Gold Granite adds a golden-toned stone option to projects looking for warmth and a distinctive natural surface.",
    imageGroup: "brown",
  },
  {
    name: "Chima Granite",
    slug: "chima-granite",
    category: "Pink Granite",
    description: "Chima Granite offers a pink-toned appearance for spaces where a softer and warmer granite colour is preferred.",
    imageGroup: "other",
  },
  {
    name: "Apple Green Granite",
    slug: "apple-green-granite",
    category: "Green Granite",
    description: "Apple Green Granite brings a green colour direction to the collection for distinctive interior and architectural concepts.",
    imageGroup: "other",
  },
  {
    name: "Devda Green Granite",
    slug: "devda-green-granite",
    category: "Green Granite",
    description: "Devda Green Granite is a green-toned natural stone choice for projects seeking an earthy colour statement.",
    imageGroup: "other",
  },
  {
    name: "Magma Gold Granite",
    slug: "magma-gold-granite",
    category: "Gold Granite",
    description: "Magma Gold Granite combines a bold colour identity with a warm visual character for standout stone applications.",
    imageGroup: "brown",
  },
  {
    name: "Piccasso Pink Granite",
    slug: "piccasso-pink-granite",
    category: "Pink Granite",
    description: "Piccasso Pink Granite brings a pink-led palette to the collection for projects that favour expressive natural stone.",
    imageGroup: "other",
  },
  {
    name: "Rosy Pink Granite",
    slug: "rosy-pink-granite",
    category: "Pink Granite",
    description: "Rosy Pink Granite offers a gentle pink appearance for designs seeking a warm and welcoming stone surface.",
    imageGroup: "other",
  },
  {
    name: "Lakha Red Granite",
    slug: "lakha-red-granite",
    category: "Red Granite",
    description: "Lakha Red Granite adds a strong red colour option to the collection for distinctive architectural settings.",
    imageGroup: "other",
  },
  {
    name: "Multi Brown Granite",
    slug: "multi-brown-granite",
    category: "Brown Granite",
    description: "Multi Brown Granite features a varied brown colour character for projects that call for depth and visual variation.",
    imageGroup: "brown",
  },
  {
    name: "Multi Red Granite",
    slug: "multi-red-granite",
    category: "Red Granite",
    description: "Multi Red Granite is a red-toned option for creating bold surfaces and adding colour to stone-led design projects.",
    imageGroup: "other",
  },
  {
    name: "Tiger Skin Granite",
    slug: "tiger-skin-granite",
    category: "Brown Granite",
    description: "Tiger Skin Granite is presented for its distinctive patterned appearance and expressive natural stone character.",
    imageGroup: "brown",
  },
  {
    name: "Tiger Granite",
    slug: "tiger-granite",
    category: "Brown Granite",
    description: "Tiger Granite offers a bold patterned look for projects where the stone surface is intended to become a focal point.",
    imageGroup: "brown",
  },
  {
    name: "Gem Red Granite",
    slug: "gem-red-granite",
    category: "Red Granite",
    description: "Gem Red Granite brings a rich red-toned option to the collection for warm and visually confident spaces.",
    imageGroup: "other",
  },
  {
    name: "Khalda Red Granite",
    slug: "khalda-red-granite",
    category: "Red Granite",
    description: "Khalda Red Granite is a red granite selection for projects seeking a strong colour presence in natural stone.",
    imageGroup: "other",
  },
  {
    name: "Viscount White Granite",
    slug: "viscount-white-granite",
    category: "White Granite",
    description: "Viscount White Granite features a light stone palette for interiors and architectural spaces with a refined look.",
    imageGroup: "white",
  },

  // South Granite Brochure
  {
    name: "Steel Grey Granite",
    slug: "steel-grey-granite",
    category: "Grey Granite",
    description: "Steel Grey Granite provides a grey-toned option for contemporary projects seeking a balanced and understated surface.",
    imageGroup: "other",
  },
  {
    name: "Ash Black Granite",
    slug: "ash-black-granite",
    category: "Black Granite",
    description: "Ash Black Granite offers a muted dark appearance for projects that prefer a subtle alternative to deep black stone.",
    imageGroup: "black",
  },
  {
    name: "Silver Galaxy Granite",
    slug: "silver-galaxy-granite",
    category: "Black Granite",
    description: "Silver Galaxy Granite brings a silver-accented dark stone appearance to distinctive interior and architectural designs.",
    imageGroup: "black",
  },
  {
    name: "Absolute Black Granite",
    slug: "absolute-black-granite",
    category: "Black Granite",
    description: "Absolute Black Granite is known for its striking black appearance and timeless design appeal. It is a considered choice for flooring, countertops, wall cladding and other architectural applications where a bold, clean stone surface is desired.",
    imageGroup: "black",
  },
  {
    name: "Blue Pearl Granite",
    slug: "blue-pearl-granite",
    category: "Blue Granite",
    description: "Blue Pearl Granite introduces a blue-toned visual character for projects seeking a distinctive and contemporary natural stone.",
    imageGroup: "other",
  },
  {
    name: "Belvedere Granite",
    slug: "belvedere-granite",
    category: "Multi-colour Granite",
    description: "Belvedere Granite is a distinctive selection in the South granite range for projects that favour expressive natural patterns.",
    imageGroup: "other",
  },
  {
    name: "Alaska Gold Granite",
    slug: "alaska-gold-granite",
    category: "Gold Granite",
    description: "Alaska Gold Granite brings a golden colour direction to interiors and architectural concepts seeking warmth and character.",
    imageGroup: "brown",
  },
  {
    name: "Azul White Granite",
    slug: "azul-white-granite",
    category: "White Granite",
    description: "Azul White Granite offers a light-toned stone option for designs that call for a bright and composed visual finish.",
    imageGroup: "white",
  },
  {
    name: "Alaska White Granite",
    slug: "alaska-white-granite",
    category: "White Granite",
    description: "Alaska White Granite is a light-coloured choice for projects seeking an open, clean and elegant stone appearance.",
    imageGroup: "white",
  },
  {
    name: "Alpine White Granite",
    slug: "alpine-white-granite",
    category: "White Granite",
    description: "Alpine White Granite adds another light granite option to the range for bright and refined architectural settings.",
    imageGroup: "white",
  },
  {
    name: "Albus White Granite",
    slug: "albus-white-granite",
    category: "White Granite",
    description: "Albus White Granite is suited to design concepts built around a soft, light-toned natural stone palette.",
    imageGroup: "white",
  },
  {
    name: "Himalayan Granite",
    slug: "himalayan-granite",
    category: "Brown Granite",
    description: "Himalayan Granite brings a richly varied colour pattern to projects seeking a natural stone with a distinctive presence.",
    imageGroup: "brown",
  },
  {
    name: "Ivory White Granite",
    slug: "ivory-white-granite",
    category: "White Granite",
    description: "Ivory White Granite offers an ivory-led colour palette for interiors seeking a warm alternative to stark white surfaces.",
    imageGroup: "white",
  },
  {
    name: "Imperial Red Granite",
    slug: "imperial-red-granite",
    category: "Red Granite",
    description: "Imperial Red Granite makes a confident colour statement for projects where red natural stone is a central design feature.",
    imageGroup: "other",
  },
  {
    name: "Kashmir White Granite",
    slug: "kashmir-white-granite",
    category: "White Granite",
    description: "Kashmir White Granite provides a light-coloured stone choice for interiors and architectural projects with a timeless aesthetic.",
    imageGroup: "white",
  },
  {
    name: "Moon White Granite",
    slug: "moon-white-granite",
    category: "White Granite",
    description: "Moon White Granite offers a soft light-toned appearance for spaces designed around a calm and balanced palette.",
    imageGroup: "white",
  },
  {
    name: "Shiva Gold Granite",
    slug: "shiva-gold-granite",
    category: "Gold Granite",
    description: "Shiva Gold Granite adds a warm golden stone option to the collection for projects seeking a distinctive natural finish.",
    imageGroup: "brown",
  },
  {
    name: "Pink Juparana Granite",
    slug: "pink-juparana-granite",
    category: "Pink Granite",
    description: "Pink Juparana Granite brings a patterned pink stone appearance to projects looking for a decorative surface.",
    imageGroup: "other",
  },
  {
    name: "Lavendra Blue Granite",
    slug: "lavendra-blue-granite",
    category: "Blue Granite",
    description: "Lavendra Blue Granite offers a blue-toned colour option for distinctive interiors and architectural stone selections.",
    imageGroup: "other",
  },
  {
    name: "Paradiso Granite",
    slug: "paradiso-granite",
    category: "Brown Granite",
    description: "Paradiso Granite features a distinctive colour composition for projects that call for a decorative and expressive stone surface.",
    imageGroup: "brown",
  },
  {
    name: "Shivakashi Pink Granite",
    slug: "shivakashi-pink-granite",
    category: "Pink Granite",
    description: "Shivakashi Pink Granite is a pink-toned selection for projects seeking a warm and recognisable natural stone appearance.",
    imageGroup: "other",
  },
  {
    name: "Tan Brown Granite",
    slug: "tan-brown-granite",
    category: "Brown Granite",
    description: "Tan Brown Granite combines a deep brown colour direction with a distinctive natural pattern, making it a versatile option for residential and commercial design projects.",
    imageGroup: "brown",
  },
  {
    name: "River White Granite",
    slug: "river-white-granite",
    category: "White Granite",
    description: "River White Granite offers a flowing light-toned appearance for projects seeking a bright natural stone surface with visual movement.",
    imageGroup: "white",
  },
  {
    name: "Monalisa White Granite",
    slug: "monalisa-white-granite",
    category: "White Granite",
    description: "Monalisa White Granite is a light-coloured selection for refined interiors and architectural projects with a clean stone aesthetic.",
    imageGroup: "white",
  },
  {
    name: "Meera White Granite",
    slug: "meera-white-granite",
    category: "White Granite",
    description: "Meera White Granite completes the light granite range with a subtle appearance suited to elegant and understated design concepts.",
    imageGroup: "white",
  },
];

function createProduct(entry: ProductEntry): GraniteProduct {
  const imageList = sampleImages[entry.imageGroup];

  return {
    id: entry.slug,
    name: entry.name,
    slug: entry.slug,
    category: entry.category,
    shortDescription: entry.description,
    description: entry.description,

    features: [
      `Distinctive ${entry.name} appearance`,
      "Natural stone character",
      "Product selection subject to current availability",
    ],

    applications: [
      "Flooring",
      "Wall cladding",
      "Kitchen countertops",
      "Residential and commercial interiors",
    ],

    finishes: [
      "Polished",
      "Honed",
      "Leather",
    ],

    images: imageList,

    seo: {
      title: `${entry.name} | NM SONS Granite`,
      description: `Explore ${entry.name} from NM SONS Granite. Enquire about product images, available finishes, specifications and export requirements.`,
      keywords: [
        entry.name,
        `${entry.name} exporter`,
        `${entry.name} supplier`,
        "Indian granite exporter",
      ],
    },
  };
}

export const products: GraniteProduct[] = productEntries.map(createProduct);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductSlugs() {
  return products.map((product) => product.slug);
}
