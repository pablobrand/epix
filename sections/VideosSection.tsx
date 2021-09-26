import Container from '@/components/Container';
import VideoThumbnail from '@/components/VideoThumbnail';

const VideosSection = () => {
  return (
    <>
      <section className="text-white mb-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                src: 'https://www.youtube.com/watch?v=5Peo-ivmupE',
              },
              {
                src: 'https://www.youtube.com/watch?v=5Peo-ivmupE',
              },
              {
                src: 'https://www.youtube.com/watch?v=5Peo-ivmupE',
              },
              {
                src: 'https://www.youtube.com/watch?v=5Peo-ivmupE',
              },
              {
                src: 'https://www.youtube.com/watch?v=5Peo-ivmupE',
              },
              {
                src: 'https://www.youtube.com/watch?v=5Peo-ivmupE',
              },
              {
                src: 'https://www.youtube.com/watch?v=5Peo-ivmupE',
              },
              {
                src: 'https://www.youtube.com/watch?v=5Peo-ivmupE',
              },
              {
                src: 'https://www.youtube.com/watch?v=5Peo-ivmupE',
              },
              {
                src: 'https://www.youtube.com/watch?v=5Peo-ivmupE',
              },
              {
                src: 'https://www.youtube.com/watch?v=5Peo-ivmupE',
              },
              {
                src: 'https://www.youtube.com/watch?v=5Peo-ivmupE',
              },
            ].map((video, i) => (
              <VideoThumbnail key={i} src={video.src} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default VideosSection;
