import { promises as fs } from 'fs';
import path from 'path'
import grayMatter from 'gray-matter';
// import rehypeHighlight from 'rehype-highlight'
// import {compile} from '@mdx-js/mdx'

const postsDirectory = path.join(process.cwd(), 'pages/posts');

export default async function getPosts(sorted = false) {
  const filenames = await fs.readdir(postsDirectory);

  const files = await Promise.all(filenames.map(async filename => {
    const filePath = path.join(postsDirectory, filename)
    const content = await fs.readFile(filePath, 'utf8')
    const matter = grayMatter(content);
    return {
      filename,
      matter,
      content
    }
  }));

  const posts = files.map(file => {
    return {
      title: file.matter.data.title,
      date: file.matter.data.date,
      gist: file.matter.data.gist,
      topics: file.matter.data.topics,
      updated: file.matter.data.updated,
      path: `/posts/${file.filename.replace('.mdx', '')}`,
      id: file.filename.replace('.mdx', ''),
      matter: file.matter,
      content: file.content
    }
  });

  if (sorted) {
    return posts.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } else {
    return posts;
  }
}