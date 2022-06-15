import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
export default function Article() {
const {id} = useParams()
const url = "http://localhost:3000/articles/" + id
const {data: article , isPending, error} = useFetch(url)
console.log(article)
  return (<>
    {isPending && <div> Loading ...</div>}
    <div>Article Page {id}</div>
    <Link to="/articles">Go back</Link>
    {article && <div className="article">
    <h2>{article.title}</h2>
    <div>{article.body}</div></div>}</>
  )
}
