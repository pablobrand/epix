import { getYouTubeID } from '@/lib/youtube';

const YouTubeVideo = (props) => {
  const { src } = props;

  const youTubeID = getYouTubeID(src);

  return (
    <div className="mb-4 aspect-w-16 aspect-h-9">
      {youTubeID && (
        <iframe
          src={`https://www.youtube.com/embed/${youTubeID}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeVideo;
