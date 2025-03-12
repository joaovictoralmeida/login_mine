import Image from "next/image"
import Logo from "@/public/images/logo-solo.svg"
import LoginItem, { LoginItemInterface } from "../LoginItem";
import Link from "next/link";

export default function Login() {

    const items: LoginItemInterface[] = [
        {
            label: "E-Mail",
            type: "email"
        },
        {
            label: "Senha",
            type: "password"
        }
    ]

    return(
        <div className="flex justify-center font-kufam">
            <div className="flex justify-center items-center w-[1216px] py-10 mac:w-11/12 ">
                <form className="flex flex-col gap-10 bg-[#262626]/80 w-[456px] mdd:w-[375px] rounded-xl px-10 py-8  border border-[#737373] ">
                    <div className="flex justify-center">
                        <Image
                            src={Logo}
                            alt="Logo"
                        />
                    </div>
                    {items.map((item, index) => (
                        <LoginItem
                            key={index}
                            label={item.label}
                            type={item.type}
                        />
                    ))}
                    <div>
                        <input type="checkbox" />
                        <label className="text-white pl-3">Lembrar minha senha</label>
                    </div>
                    <button className="bg-[#269E6D] text-white text-xl py-3 w-full font-semibold rounded-md hover:bg-[#135038] transition-colors mdd:text-lg">Entrar na conta</button>
            
                    <div className="flex justify-center">
                        <Link className="text-[#269E6D] hover:border-b-2 hover:border-[#269E6D]" href="/">
                            Esqueceu a senha?
                        </Link>
                    </div>
            
                </form>
            </div>
        </div>
    )
}