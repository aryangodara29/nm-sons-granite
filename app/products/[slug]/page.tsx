
export const instant = false;
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getProductBySlug,
  getProductSlugs,
} from "../../data/products";

import ProductDetailClient from "./ProductDetailClient";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate individual product URLs
export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({
    slug,
  }));
}

// Generate unique SEO metadata for every product
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | NM SONS Granite",
      description: "The requested granite product could not be found.",
    };
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,

    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      type: "website",
      images: [
        {
          url: product.images[0],
          alt: `${product.name} granite`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.seo.title,
      description: product.seo.description,
      images: [product.images[0]],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

// Render the individual product page
export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
