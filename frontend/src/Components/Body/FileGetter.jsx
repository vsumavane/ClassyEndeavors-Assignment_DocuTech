import Button from "../Buttons/Button";

function FileGetter(){
    return(
        <>
        <div className="flex justify-center items-center my-5 ">
            <div className="flex justify-between items-center w-md ring-1 h-lg rounded-4xl">
                <p className="px-6 font-light text-sm pointer-events-none">
                    Drop your file here
                </p>
                <Button className="mx-2 my-2 rounded-4xl max-h-11">
                    Upload File
                    </Button>
            </div>
            <p className="px-4 font-light text-sm pointer-events-none"> OR </p>
            <Button className="rounded-4xl max-h-11">Generate with AI </Button>
        </div>
        </>
    )
}

export default FileGetter;