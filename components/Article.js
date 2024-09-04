import Link  from "next/link"


export const Article = ({art}) => {
  return (
    <>
    
    <Link href="/article/[id]" as={`/article/${art.id}`}> 
    {art.title} <br /><br />
    </Link>

    </>
  )
}
