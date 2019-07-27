import React from 'react';
import TRReactComponent from "tm-react/src/artifacts/framework/tr-react-component";
import TRLayoutRenderer from "tm-react/src/artifacts/component/tr-layout-rander";

export default class MyLayout extends TRReactComponent<any, any> {

    render() {
        const {component, route, appConfig} = this.props;
        return (
            <React.Fragment>
                <TRLayoutRenderer route={route} appConfig={appConfig} component={component}/>
        </React.Fragment>
        );
    }

}