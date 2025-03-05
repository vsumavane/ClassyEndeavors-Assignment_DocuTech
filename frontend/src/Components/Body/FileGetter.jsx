import { useState, useRef} from "react";
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
            <div className="flex justify-center items-center my-5">
                <div 
                    className={`flex justify-between items-center w-md ring-1 h-lg rounded-4xl ${isDragging ? 'ring-brand-pink bg-pink-50' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    ref={dropZoneRef}
                >
                    <div className="px-6 font-light text-sm">
                        {fileName}
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="application/pdf"
                    />
                    <Button 
                        className="mx-2 my-2 rounded-4xl items-center h-12"
                        onClick={handleUploadClick}
                        imgSrc={uploadIcon}
                    >
                        Upload File
                    </Button>
                </div>
                <p className="px-4 font-light text-sm pointer-events-none"> OR </p>
                <Button 
                    className="rounded-4xl items-center h-12" 
                    imgSrc={AiIcon} 
                    onClick={handleGenerateWithAI}
                >
                    Generate with AI
                </Button>
            </div>
            <div className="w-[700px] h-[700px] rounded-2xl bg-white ring-inset ring-1 ring-black shadow-md shadow-brand-pink">
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-full w-full p-8">
                        <div className="animate-pulse w-full space-y-6">
                            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
                            <div className="h-80 bg-gray-200 rounded w-full"></div>
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                            </div>
                            <div className="h-10 bg-gray-200 rounded w-1/3 mx-auto"></div>
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
                    <div className="flex items-center justify-center h-full text-gray-400">
                        Upload a PDF to view it here
                    </div>
                )}
            </div>
        </div>
    );
}

export default FileGetter;