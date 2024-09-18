import MyPageLayout from "@/components/mypage/MyPageLayout";
import ProfilePageContainer from "@/components/views/mypage/Profile/Profile.container";


export default function page () {
    return(
        <MyPageLayout>
            <ProfilePageContainer />
        </MyPageLayout>
    )
}