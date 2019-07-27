import React from "react";
import TRComponent from "tm-react/src/artifacts/component/tr-component";
import {TRProps, TRState} from "tm-react/src/artifacts/model/tr-model";
import {TrFormDefinitionData} from "tm-react/src/artifacts/data/tr-form-definition-data";
import TRComponentState from "tm-react/src/artifacts/component/tr-component-state";
import {TRMessageData} from "tm-react/src/artifacts/data/tr-message-data";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader, Grid,
    MenuItem,
    TextField,
    Typography
} from "react-mui-ui/ui/ui-component";
import Select from '@material-ui/core/Select';


interface Props extends TRProps{}

class State extends TRComponentState{

}

export default class PanelView extends TRComponent<Props, State> {


    constructor(props: Props) {
        super(props);
    }


    render() {
        return (
            <React.Fragment>
                <Grid container spacing={0} component="span" justify="flex-end">
                    <Grid component="span" xs={1}></Grid>
                    <Grid component="span" xs={1}>
                        <Button color="primary" size="small" type="submit" variant="contained" children="save"/>
                        <Button color="secondary" size="small" variant="contained" children="Cancel"/>
                    </Grid>
                </Grid>


                <Card>
                    <CardHeader title="Update User"/>
                    <CardContent>
                        <Grid component="div" container spacing={3}>
                            <Grid item xs={12} component="div"><TextField {...this.handleInputDataChange("email")} type="email" label="Email Address" margin="normal" fullWidth /></Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container spacing={1} component="div" justify="flex-end">
                            <Grid component="div" item xs={1}>
                                <Button size="small" color="primary" type="submit" fullWidth variant="contained" children="save"/></Grid>
                            <Grid component="div" item xs={1}>
                                <Button color="secondary" size="small" fullWidth variant="contained" children="Cancel"/></Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </React.Fragment>
        );
    }


}