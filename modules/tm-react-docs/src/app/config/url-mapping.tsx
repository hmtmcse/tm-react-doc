import React from 'react';
import TRURLMapping from "tm-react/src/artifacts/config/tr-url-mapping";
import TRLayoutInfoData from "tm-react/src/artifacts/data/view/tr-layout-info-data";
import MyLayout from "../view/layouts/my-layout";


const MyView = React.lazy(() => import('../view/my-view'));
const Form = React.lazy(() => import('../../demo/form-demo'));
const AllUI = React.lazy(() => import('../../demo/tr-all-ui'));

export default class URLMapping extends TRURLMapping {

    public getLayoutsAndPages(): Array<TRLayoutInfoData> {
        let pageWithLayout: Array<TRLayoutInfoData> = [];

        let publicLayoutInfo: TRLayoutInfoData = new TRLayoutInfoData();
        publicLayoutInfo.layout = MyLayout
        publicLayoutInfo.addPageInstance("/form", Form);
        publicLayoutInfo.addPageInstance("/", AllUI);
        publicLayoutInfo.addPageInstance("/other", MyView);
        pageWithLayout.push(publicLayoutInfo);

        return pageWithLayout
    }

}