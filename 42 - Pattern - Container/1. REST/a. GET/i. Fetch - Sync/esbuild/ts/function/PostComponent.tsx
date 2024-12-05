/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

interface PostComponentProps {
  id: number;
  title: string;
}

function PostComponent({ id, title }: PostComponentProps) {
  return <li value={id}>{title}</li>;
}

export default PostComponent;
