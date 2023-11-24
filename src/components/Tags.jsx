function Tags(tabTags) {
  const listeTags = tabTags.tags

  let tagsLi = listeTags.map((tag, index) => <li key={index}>{tag}</li>)

  return (
    <>
      <ul className="listeTags">{tagsLi}</ul>
    </>
  )
}

export default Tags
