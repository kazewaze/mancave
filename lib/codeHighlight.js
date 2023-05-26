import rehypeHighlight from 'rehype-highlight'
import {compile} from '@mdx-js/mdx'

export default async function codeHighlight(postObj) {
  var updatedCode = '';
  var codeBlocks = [];
  postObj.forEach((val, idx) => {
    if (val.props.originalType === "pre") {
      updatedCode = `~~~py
      ${postObj[idx].props.children.props.children}
      ~~~`;
      codeBlocks.push({"idx": idx, "codeBlock": updatedCode});
    }
  });

  for (var i = 0; i <= codeBlocks.length-1; i++) {
    postObj[codeBlocks[i]["idx"]].props.children.props.children = String(await compile(codeBlocks[i]["codeBlock"], {rehypePlugins: [rehypeHighlight]}));
  }

  return postObj;
}