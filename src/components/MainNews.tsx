import Image from "next/image";
interface News{
    id:number,
    title:string,
    description:string,
    category:string,
    imageUrl:string,
    firstPublished:string
}

const MainNews = ({ news }: { news: News[] }) => {

    const [firstNews, ...otherNews]=news //news[0] মানে প্রথম news and baki other gulo o chole ashbe
    // const firstNews=news[0] //news[0] মানে প্রথম news
    // const otherNews=news.slice(1)//first news bade baki gulo dekhabe
    console.log(firstNews)
    return (
        <div className=" flex gap-2">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                    height={500}
                    width={500}
                        src={firstNews.imageUrl}
                        alt="" />
                </figure>
                <div className="card-body">
                    <p className="text-red-600 font-semibold">{firstNews.category}</p>
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>
                    <div className="card-actions justify-end">
                        {firstNews.firstPublished}
                    </div>
                </div>
            </div>
            <div>
                
                {
                    otherNews.slice(0,4).map(takeNews=> <div className=" card bg-base-100 border border-gray-300 py-5 px-2 mb-2 mt-2" key={takeNews.id}>
                        <p>{takeNews.category}</p>
                        <div>
                            {takeNews.title}
                        </div>
                    </div>)
                }
                
            </div>
        </div>
    );
};

export default MainNews;