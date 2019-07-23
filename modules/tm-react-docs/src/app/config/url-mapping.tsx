import React from 'react';
import TRURLMapping from "tm-react/src/artifacts/config/tr-url-mapping";
import TRLayoutInfoData from "tm-react/src/artifacts/data/view/tr-layout-info-data";


const MyLayout = React.lazy(() => import('../view/layouts/my-layout'));
const MyView = React.lazy(() => import('../view/my-view'));
const Demo = React.lazy(() => import('react-mui-ui/ui/tr-ui-demo'));
const Form = React.lazy(() => import('react-mui-ui/demo/form-demo'));

export default class URLMapping extends TRURLMapping {

    public getLayoutsAndPages(): Array<TRLayoutInfoData> {
        let pageWithLayout: Array<TRLayoutInfoData> = [];

        let publicLayoutInfo: TRLayoutInfoData = new TRLayoutInfoData();
        publicLayoutInfo.layout = MyLayout
        publicLayoutInfo.addPageInstance("/form", Form);
        publicLayoutInfo.addPageInstance("/", Demo);
        publicLayoutInfo.addPageInstance("/other", MyView);
        pageWithLayout.push(publicLayoutInfo);

        return pageWithLayout
    }

}