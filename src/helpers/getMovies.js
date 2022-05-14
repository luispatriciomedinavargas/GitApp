export const getGifs=async(search)=>{
    const url=`http://api.tvmaze.com/search/shows?q=${encodeURI(search)}`
  const reps = await fetch(url);
  const data = await reps.json();
  const searched = data.map(a=>{
    return{
      id:a.show.id,
      name:a.show.name,
      rating: a.show.rating.average,
      image:a.show.image.original,
      summary:a.show.summary
    }
  })
  return searched;
}