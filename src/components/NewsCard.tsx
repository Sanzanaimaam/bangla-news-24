import Image from "next/image";
interface Inews{
    id:number,
    title:string,
    description:string,
    category:string,
    imageUrl:string,
    imageAlt:string,
    firstPublished:string
}
const NewsCard = ({news}: { news: Inews }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image
                    height={500}
                    width={500}
                    src={news.imageUrl}
                    alt={news.imageAlt}
                />
            </figure>
            <div className="card-body">
                <p className="text-red-600 font-semibold">{news.category}</p>
                <h2 className="card-title">{news.title}</h2>
                <p>{news.description}</p>
                <div className="card-actions justify-end">
                    {news.firstPublished}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;