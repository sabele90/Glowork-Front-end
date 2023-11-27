import { useEffect, useRef } from "react";

const UploadImage = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dfwcnoezy",
        unloadPreset: "th0kbznl",
      },
      function (error, result) {}
    );
  }, []);

  return <button onClick={() => widgetRef.current.open()}>Upload</button>;
};

export default UploadImage;
