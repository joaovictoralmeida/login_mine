export interface LoginItemInterface {
    type: string
    label: string
}

export default function LoginItem({type, label}: LoginItemInterface) {
    return(
        <div className="flex flex-col gap-2 w-full">
            <label className="text-white">{label}</label>
            <input className="bg-[#262626] h-[48px] px-4 py-3 text-[#BAACAC] rounded-sm border border-[#414141] focus:outline-none " type={type} />
        </div>
    )
}