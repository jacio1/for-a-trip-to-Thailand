import { CpuIcon } from "lucide-react";

export default function AdWrapper(){
    return(
        <div className=" flex items-center border-b w-full pb-3 mt-3 gap-2" style={{borderColor: 'rgba(43, 43, 43, 0.8)'}}>
            <div className="w-12 h-12 flex items-center justify-center rounded-3xl default-wrap shrink-0" style={{background: 'rgba(31, 31, 31, 0.8)'}}>
                <CpuIcon className="text-(--svg-filler)"/>
            </div>
            <div className="flex flex-col gap-2 ">
                <h2 className="font-semibold text-base">Ad title in one row. Ad title in one row</h2>
                <p className="font-medium text-xs text-(--text-sub)">Ad longest description in 3 rows max. Ad longes...</p>
            </div>
        </div>
    )
}