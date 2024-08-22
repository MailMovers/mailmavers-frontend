import { MainPageUIProps } from "@/type/main";
import BestProductsListPage from "./component/best-products/best.products.container";

export default function MainPage(props: MainPageUIProps) {

    return (
        <>
            <BestProductsListPage {...props}/>
        </>
    )
}


