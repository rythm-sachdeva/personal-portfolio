// app/blog/[slug]/page.tsx
import { cardContent } from "@/globals/Card-Content";
import BlogPost from "@/components/BlogPost";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;   
}

const WorkPage = async ({ params }: Props) => {
  const { slug } = await params;     

  const post = cardContent.find((card) => card.id === slug);

  if (!post) return notFound();

  return (
    <>
      <BlogPost post={post} />
    </>
  );
}

export default WorkPage;