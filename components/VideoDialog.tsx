import { Dialog } from '@headlessui/react';

import YouTubeVideo from '@/components/YouTubeVideo';

const VideoDialog = ({ isOpen, setIsOpen, src }) => {
  return (
    <Dialog
      className="fixed z-10 inset-0 overflow-y-auto"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="flex justify-center mt-10">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="relative bg-white rounded flex-1 max-w-lg mx-auto">
          <Dialog.Title className="text-right px-4 py-2 text-3xl border-b">
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
          </Dialog.Title>
          <div className="px-4">
            <YouTubeVideo src={src} />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default VideoDialog;
