import { MainPageUIProps } from "@/type/main";
import BestProductsListPage from "./component/best-products/best.products.container";
import BannerContainer from "./component/banner/banner.contaner";
import FAQContainer from "../info-desk/info-desk.container";

export default function MainPage(props: MainPageUIProps) {

    return (
        <>
            <BannerContainer />
            <BestProductsListPage {...props}/>
            <FAQContainer />
        </>
    )
}


