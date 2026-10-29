import Image from "next/image";

interface News {
    id: number,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    firstPublished: string
}

// Formats the date if it can be parsed, otherwise shows the original string.
const formatDate = (value: string) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
};

const MainNews = ({ news }: { news: News[] }) => {

    const [firstNews, ...otherNews] = news ?? []; // first news is featured, the rest go to the side

    // Safe empty state: nothing to destructure, so don't crash
    if (!firstNews) {
        return (
            <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <p className="border-y border-neutral-200 py-10 text-center font-serif text-lg text-neutral-500">
                    No news available right now.
                </p>
            </section>
        );
    }

    return (
        <section className="mx-auto w-full max-w-7xl bg-white px-4 py-8 text-neutral-900 sm:px-6 sm:py-10 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-0">

                {/* Featured story */}
                <article className="group lg:col-span-8 lg:border-r lg:border-neutral-200 lg:pr-10">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                        <Image
                            src={firstNews.imageUrl}
                            alt={firstNews.title}
                            fill
                            priority
                            sizes="(min-width: 1280px) 760px, (min-width: 1024px) 62vw, 100vw"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        />
                    </div>

                    <div className="mt-6 max-w-3xl">
                        <p className="text-sm font-semibold text-red-700">
                            {firstNews.category}
                        </p>
                        <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-neutral-900 decoration-neutral-900 decoration-2 underline-offset-4 transition-colors group-hover:underline sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                            {firstNews.title}
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                            {firstNews.description}
                        </p>
                        <time
                            dateTime={firstNews.firstPublished}
                            className="mt-5 block border-t border-neutral-200 pt-4 text-sm text-neutral-500"
                        >
                            {formatDate(firstNews.firstPublished)}
                        </time>
                    </div>
                </article>

                {/* Secondary stories */}
                {otherNews.length > 0 && (
                    <aside
                        aria-label="More news"
                        className="lg:col-span-4 lg:pl-10"
                    >
                        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-1">
                            {otherNews.slice(0, 4).map((takeNews, index) => (
                                <article
                                    key={takeNews.id}
                                    className={`group border-t border-neutral-200 py-5 ${
                                        index < 2 ? "md:first:border-t md:last:border-t" : ""
                                    } ${index === 0 ? "lg:border-t-0 lg:pt-0" : ""} ${
                                        index === 1 ? "md:border-t-0 md:pt-0 lg:border-t lg:pt-5" : ""
                                    } ${index === 0 ? "md:border-t-0 md:pt-0" : ""}`}
                                >
                                    <p className="text-sm font-semibold text-red-700">
                                        {takeNews.category}
                                    </p>
                                    <h3 className="mt-1.5 font-serif text-xl font-bold leading-snug text-neutral-900 decoration-neutral-900 decoration-1 underline-offset-4 transition-colors group-hover:underline">
                                        {takeNews.title}
                                    </h3>
                                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-600">
                                        {takeNews.description}
                                    </p>
                                    <time
                                        dateTime={takeNews.firstPublished}
                                        className="mt-3 block text-xs text-neutral-500"
                                    >
                                        {formatDate(takeNews.firstPublished)}
                                    </time>
                                </article>
                            ))}
                        </div>
                    </aside>
                )}
            </div>
        </section>
    );
};

export default MainNews;


// import Image from "next/image";
// interface News{
//     id:number,
//     title:string,
//     description:string,
//     category:string,
//     imageUrl:string,
//     firstPublished:string
// }

// const MainNews = ({ news }: { news: News[] }) => {

//     const [firstNews, ...otherNews]=news //news[0] মানে প্রথম news and baki other gulo o chole ashbe
//     // const firstNews=news[0] //news[0] মানে প্রথম news
//     // const otherNews=news.slice(1)//first news bade baki gulo dekhabe
//     console.log(firstNews)
//     return (
//         <div className=" flex gap-2">
//             <div className="card bg-base-100 w-96 shadow-sm">
//                 <figure>
//                     <Image
//                     height={500}
//                     width={500}
//                         src={firstNews.imageUrl}
//                         alt="" />
//                 </figure>
//                 <div className="card-body">
//                     <p className="text-red-600 font-semibold">{firstNews.category}</p>
//                     <h2 className="card-title">{firstNews.title}</h2>
//                     <p>{firstNews.description}</p>
//                     <div className="card-actions justify-end">
//                         {firstNews.firstPublished}
//                     </div>
//                 </div>
//             </div>
//             <div>
                
//                 {
//                     otherNews.slice(0,4).map(takeNews=> <div className=" card bg-base-100 border border-gray-300 py-5 px-2 mb-2 mt-2" key={takeNews.id}>
//                         <p>{takeNews.category}</p>
//                         <div>
//                             {takeNews.title}
//                         </div>
//                     </div>)
//                 }
                
//             </div>
//         </div>
//     );
// };

// export default MainNews;