// import rehypeHighlight from 'rehype-highlight'
// import {compile} from '@mdx-js/mdx'

export default function codeHighlight(postObj) {
  // children[1].props.originalType
  postObj.forEach((val, idx) => {
    if (val.props.originalType === "pre") {
      console.log("highlight: ", postObj[idx].props.children.props.children)
    }
  });
}