import { PROP_WITH_CHILDREN } from "../interfacesAndTypes/types";

export default function Header({ img, children }: PROP_WITH_CHILDREN) {
    return <header>
        <img src={img.src} alt={img.alt} />
        {children}
    </header>
}   