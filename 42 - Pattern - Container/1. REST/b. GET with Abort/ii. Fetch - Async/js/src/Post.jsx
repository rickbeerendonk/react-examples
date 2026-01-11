/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

function Post({ body, title }) {
  return (
    <>
      <h1>{title}</h1>
      <main>{body}</main>
    </>
  );
}

export default Post;
