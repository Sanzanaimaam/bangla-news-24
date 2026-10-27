import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Headlines {
    id: string,
    title: string
}

const Marquee = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10")
    const marqueeData = await res.json()
    const headlines: Headlines[] = marqueeData.data
    console.log(marqueeData);
    return (
        <div className="border-y border-red-800 bg-red-700 text-white shadow-md">
            <div className="mx-auto flex h-11 max-w-7xl items-center gap-3 px-3 text-sm sm:h-12 sm:gap-4 sm:px-4 sm:text-base lg:px-6">
                <div className="flex shrink-0 items-center gap-2 rounded-sm bg-red-950 px-3 py-1.5 font-bold tracking-wide whitespace-nowrap shadow-inner sm:px-4">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                    </span>
                    সর্বশেষ সংবাদ
                </div>

                <MarqueeText direction="right" duration={30}>
                    {headlines.map((h) => (
                        <span key={h.id} className="inline-flex items-center">
                            <span className="font-medium">{h.title}</span>
                            <span className="mx-4 text-red-300 sm:mx-6"> • </span>
                        </span>
                    ))}
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;