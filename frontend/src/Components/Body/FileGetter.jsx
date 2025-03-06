import { useState, useRef } from "react";
import Button from "../Buttons/Button";
import uploadIcon from "../../assets/icons/upload.svg";
import AiIcon from "../../assets/icons/generate.svg";

function FileGetter() {
  const [fileName, setFileName] = useState("Drop your file here");
  const fileInputRef = useRef();
  const [fileURL, setFileURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dropZoneRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setFileURL(url);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleGenerateWithAI = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === "application/pdf") {
      const file = files[0];
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setFileURL(url);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="my-5 flex items-center justify-center">
        <div
          className={`h-lg flex w-md items-center justify-between rounded-4xl ring-1 ${isDragging ? "ring-brand-pink bg-pink-50" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          ref={dropZoneRef}
        >
          <div className="px-6 text-sm font-light">{fileName}</div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="application/pdf"
          />
          <Button
            className="mx-2 my-2 h-12 items-center rounded-4xl"
            onClick={handleUploadClick}
            imgSrc={uploadIcon}
          >
            Upload File
          </Button>
        </div>
        <p className="pointer-events-none px-4 text-sm font-light"> OR </p>
        <Button
          className="h-12 items-center rounded-4xl"
          imgSrc={AiIcon}
          onClick={handleGenerateWithAI}
        >
          Generate with AI
        </Button>
      </div>
      <div className="shadow-brand-pink h-[700px] w-[700px] rounded-2xl bg-white shadow-md ring-1 ring-black ring-inset">
        {loading ? (
          <div className="flex h-full w-full flex-col items-center justify-center p-8">
            <div className="w-full animate-pulse space-y-6">
              <div className="mx-auto h-6 w-3/4 rounded bg-gray-200"></div>
              <div className="h-80 w-full rounded bg-gray-200"></div>
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-gray-200"></div>
                <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                <div className="h-4 w-4/6 rounded bg-gray-200"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-gray-200"></div>
                <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                <div className="h-4 w-4/6 rounded bg-gray-200"></div>
              </div>
              <div className="mx-auto h-10 w-1/3 rounded bg-gray-200"></div>
            </div>
          </div>
        ) : fileURL ? (
          <embed
            src={`${fileURL}#toolbar=0`}
            type="application/pdf"
            width="100%"
            height="100%"
            className="rounded-2xl"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Upload a PDF to view it here
          </div>
        )}
      </div>
    </div>
  );
}

export default FileGetter;
