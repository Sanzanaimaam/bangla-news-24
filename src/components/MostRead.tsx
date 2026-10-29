import Link from "next/link";

interface ImostRead{

    id:number,
    title:string,
    link:string
}


const MostRead = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read")
    const data = await res.json()
    const mostReadNews: ImostRead[] = data.data;
    return (
        <div>
            <h1 className="font-bold border-b-2 border-red-700">
                সর্বাধিক পঠিত
            </h1>
            <div className="grid gap-3">
                {
                    mostReadNews.map((news, i) => <Link key={news.id} href={news.link} target="_blank"
                        className="flex gap-2 items-center"> <p>{i + 1}</p> {news.title}</Link>)
                }
            </div>
        </div>
    );
};

export default MostRead;