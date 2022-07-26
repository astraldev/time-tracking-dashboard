const imgList = ["icon-exercise.svg", 'icon-play.svg', 'icon-self-care.svg', 'icon-social.svg', 'icon-study.svg', 'icon-work.svg']
const colors  = ["lime-green", 'soft-blue', 'soft-orange', 'violet', 'light-red-2', 'light-red-1']
export function parser(data){
  let res = JSON.parse(JSON.stringify(data));

  res.forEach((data)=>{
    data.img = imgList.filter((img) => img.includes(data.title.toLowerCase().replace(" ", "-")))[0]
    console.log(data.img)
  })

  res = res.filter((data)=> data !== undefined)

  return res;
}
export function getCardColor(image){
  let position = imgList.indexOf(image)
  console.log(position)
  return colors[position]
}