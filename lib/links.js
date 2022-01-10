import Link from 'next/link'

export default function links(linksArray) {
  if (!typeof linksArray === 'object') {
     return "Must provide an array of links.";
  }

  return linksArray.map(item => {
    return (
      <li key={item + "Key"}>
        <Link href={"/" + item.toLowerCase()}>
          <a>
            {item}
          </a>
        </Link>
      </li>
    );
  });
}