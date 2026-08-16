import { articles } from "@/data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-background min-h-[50vh]">
      <h1 className="text-3xl font-heading font-extrabold text-foreground mb-2">
        {article.title}
      </h1>
      <p className="text-muted-foreground font-sans">
        Article detail page foundation is ready.
      </p>
    </main>
  );
}
