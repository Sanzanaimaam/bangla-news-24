import NewsCard from '@/components/NewsCard';
interface Inews{
    id: number,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string,
    firstPublished: string
}

const CategoryNews = async ({params}: {params: Promise<{catagoryId: string}>}) => {
    const {catagoryId}=await params
    const res=await fetch (`https://news-api-v2.vercel.app/api/category/${catagoryId}`)
    const data=await res.json()
    const categoryNews=data.data
    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <h2 className="mb-8 border-b border-gray-200 pb-4 text-3xl font-bold tracking-tight text-gray-900">{data.title}</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {
                    categoryNews.map((news: Inews) => <NewsCard key={news.id} news={news} />)
                }
            </div>
        </div>
    );
};

export default CategoryNews;