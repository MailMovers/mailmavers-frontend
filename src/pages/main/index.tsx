import { MainPageUIProps } from "@/type/main";
import BestProductsListPage from "../../components/component/best-products/best.products.container";
import BannerContainer from "../../components/component/banner/banner.container";
import FAQContainer from "../../components/info-desk/info-desk.container";
import CardUI from "../../components/component/banner/card.presenter";
import BottomBannerContainer from "../../components/component/bottom-banner/bottom-banner.container"

export default function MainPage(props: MainPageUIProps) {

    return (
        <>
            <BannerContainer />
            <BestProductsListPage {...props}/>
            <CardUI/>
            <BottomBannerContainer/>
            <FAQContainer />
        </>
    )
}

