import React from 'react';

import Image from 'next/image';

import VideoDialog from '@/components/VideoDialog';

const VideoThumbnail = ({ src }: { src?: string }) => {
  let [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <VideoDialog isOpen={isOpen} setIsOpen={setIsOpen} src={src} />
      <div
        className="bg-black bg-opacity-50 flex place-content-center rounded-xl"
        style={{ height: 250 }}
      >
        <button className="flex-1" onClick={() => setIsOpen(true)}>
          <Image src="/images/video-icon.svg" width={90} height={90} />
        </button>
      </div>
    </>
  );
};

export default VideoThumbnail;
