import SectionContainer from "@/components/shared/SectionContainer";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <SectionContainer className="max-w-4xl pt-24 pb-32">
      <article className="space-y-8">
        <span className="text-[var(--primary)] font-bold uppercase tracking-widest">Case Study</span>
        <h1 className="text-6xl font-bold leading-tight">{params.slug.replace(/-/g, ' ')}</h1>
        <div className="aspect-[21/9] bg-[var(--section)] rounded-3xl" />
        <div className="prose prose-lg max-w-none text-[var(--text-body)]">
           <p className="text-xl leading-relaxed">
              Detailed blog post content about {params.slug} will go here. 
              This is a placeholder for the full article.
           </p>
        </div>
      </article>
    </SectionContainer>
  );
}
