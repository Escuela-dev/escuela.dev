export interface Frontmatter {
    title: string;
    ogImage?: string;
    description: string;
    author: string;
    publishDate: string;
    slug: string;
    featured: boolean;
    draft: boolean;
    tags: string[];
}