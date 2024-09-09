import { MainPageUIProps } from "@/type/main";
import BestProductsListPage from "../../components/component/best-products/best.products.container";
import BannerContainer from "../../components/component/banner/banner.container";

import CardUI from "../../components/component/banner/card.presenter";
import BottomBannerContainer from "../../components/component/bottom-banner/bottom-banner.container"
import BestReviews from "../../components/component/reviews/reviews.container"


export default function MainPage(props: MainPageUIProps) {

    return (
        <>
            <BannerContainer />
            <BestProductsListPage {...props}/>
            <BottomBannerContainer/>
            <CardUI/>
            <BestReviews/>

        </>
    )
}

