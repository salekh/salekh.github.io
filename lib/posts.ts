import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostData {
    id: string;
    date: string;
    title: string;
    content: string;
    readingTime: string;
    aiOverview?: string;
    [key: string]: any;
}

export function getSortedPostsData() {
    // Get file names under /content/posts
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Try to extract date from filename if not in frontmatter
        // Standard Jekyll format: YYYY-MM-DD-title.md
        let date = matterResult.data.date;
        if (!date) {
            const match = fileName.match(/^(\d{4}-\d{2}-\d{2})-/);
            if (match) {
                date = match[1];
            }
        }

        // Calculate reading time
        const wordCount = matterResult.content.split(/\s+/g).length;
        const readingTime = Math.ceil(wordCount / 200) + ' min read';

        // Combine the data with the id
        return {
            id,
            date: date ? new Date(date).toISOString() : new Date().toISOString(),
            title: matterResult.data.title || id,
            readingTime,
            aiOverview: matterResult.data.aiOverview,
            ...matterResult.data,
        } as PostData;
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            slug: fileName.replace(/\.md$/, ''),
        };
    });
}

export async function getPostData(slug: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Try to extract date from filename if not in frontmatter
    let date = matterResult.data.date;
    if (!date) {
        const match = slug.match(/^(\d{4}-\d{2}-\d{2})/);
        if (match) {
            date = match[1];
        }
    }

    // Calculate reading time
    const wordCount = matterResult.content.split(/\s+/g).length;
    const readingTime = Math.ceil(wordCount / 200) + ' min read';

    // Return data with content
    return {
        id: slug,
        content: matterResult.content,
        date: date ? new Date(date).toISOString() : new Date().toISOString(),
        title: matterResult.data.title || slug,
        readingTime,
        aiOverview: matterResult.data.aiOverview,
        ...matterResult.data,
    };
}
