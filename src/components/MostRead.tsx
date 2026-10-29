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
        <div className="w-full">
            <h1 className="relative mb-2 border-b border-neutral-200 pb-3 text-lg font-bold text-neutral-900 sm:text-xl">
                সর্বাধিক পঠিত
                <span className="absolute -bottom-px left-0 h-0.5 w-16 bg-red-700" />
            </h1>
            <div className="grid divide-y divide-neutral-200">
                {
                    mostReadNews.map((news, i) => <Link key={news.id} href={news.link} target="_blank"
                        className="group flex items-start gap-3 py-3 transition-colors duration-200 sm:gap-4 sm:py-3.5"> <p className="w-8 shrink-0 text-2xl font-bold leading-none text-neutral-300 transition-colors duration-200 group-hover:text-red-700 sm:text-3xl">{i + 1}</p> <span className="text-sm font-medium leading-relaxed text-neutral-800 transition-colors duration-200 group-hover:text-red-700 sm:text-base">{news.title}</span></Link>)
                }
            </div>
        </div>
    );
};

export default MostRead;