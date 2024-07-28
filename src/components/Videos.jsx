import { videos } from "../constants";
const Videos  = () => {
  return (
    <div className="grid grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-10 mt-5">
      {videos.map((video, index) => (
        <article key={index} className="space-y-2 w-full">
          <img src={video.img} className="w-full rounded-lg object-cover" />
          <div className="flex items-start gap-2">
            <img src={video.channelPf} className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="text-base font-medium text-zinc-50">{video.title}</h3>
              <p className="text-sm text-zinc-400 font-medium">{video.channel}</p>
              <p className="text-zinc-400 text-sm font-medium">
                {video.views} views • {video.date}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Videos;

