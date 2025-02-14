import Link from "next/link";

export interface NavItemInterface {
    url: string
    label: string
    isActive?: boolean
}


export default function NavItem({url, label, isActive}: NavItemInterface) {
    return (
        <li className="font-kufam">
            <Link href={url} className={`${isActive ? 'bg-white text-[#269E6D] px-8 py-2 rounded-md' : ''}`}>
                {label}
            </Link>
        </li>
    )
}