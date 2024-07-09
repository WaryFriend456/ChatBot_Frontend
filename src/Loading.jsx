import { Typography } from "@material-tailwind/react";

export default function Loading() {
    return (
        // <div className="max-w-full animate-pulse">
        //   <Typography
        //     as="div"
        //     variant="h1"
        //     className="mb-4 h-3 w-56 rounded-full bg-gray-300"
        //   >
        //     &nbsp;
        //   </Typography>
        //   <Typography
        //     as="div"
        //     variant="paragraph"
        //     className="mb-2 h-2 w-72 rounded-full bg-gray-300"
        //   >
        //     &nbsp;
        //   </Typography>
        //   <Typography
        //     as="div"
        //     variant="paragraph"
        //     className="mb-2 h-2 w-72 rounded-full bg-gray-300"
        //   >
        //     &nbsp;
        //   </Typography>
        //   <Typography
        //     as="div"
        //     variant="paragraph"
        //     className="mb-2 h-2 w-72 rounded-full bg-gray-300"
        //   >
        //     &nbsp;
        //   </Typography>
        //   <Typography
        //     as="div"
        //     variant="paragraph"
        //     className="mb-2 h-2 w-72 rounded-full bg-gray-300"
        //   >
        //     &nbsp;
        //   </Typography>
        // </div>
        
        <div className="relative flex w-64 animate-pulse gap-2">
            <div className="h-12 w-12 rounded-full bg-slate-400" style={{ backgroundColor : 'gray'}}></div>
            <div className="flex-1">
                <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg" style={{ backgroundColor : 'gray'}}></div>
                <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm" style={{ backgroundColor : 'gray'}}></div>
            </div>
            <div className="absolute bottom-1 right-0 h-4 w-4 rounded-full bg-slate-400" style={{ backgroundColor : 'gray'}}></div>
        </div>
    );
}