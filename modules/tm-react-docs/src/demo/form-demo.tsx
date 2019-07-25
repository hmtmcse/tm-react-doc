import React from "react";
import TRComponent from "tm-react/src/artifacts/component/tr-component";
import {TRProps, TRState} from "tm-react/src/artifacts/model/tr-model";
import {TrFormDefinitionData} from "tm-react/src/artifacts/data/tr-form-definition-data";
import TRComponentState from "tm-react/src/artifacts/component/tr-component-state";
import {TRMessageData} from "tm-react/src/artifacts/data/tr-message-data";
import {Button, MenuItem, TextField} from "react-mui-ui/ui/ui-component";
import Select from '@material-ui/core/Select';


interface Props extends TRProps{}

class State extends TRComponentState{

}

export default class FormDemo extends TRComponent<Props, State> {


    constructor(props: Props) {
        super(props);
        this.addFormDefinition("email", new TrFormDefinitionData({
            required: true,
            errorMessage: "Please Enter Email Address",
        }));
        this.addFormDefinition("password", new TrFormDefinitionData({
            required: true,
            errorMessage: "Please Enter Password",

        }));
    }

    onSubmit (event: any){
        event.preventDefault();
        this.validateFormInput();
        console.log(this.state.formData);
    }

    render() {

        const currencies = [
            {
                value: 'USD',
                label: '$',
            },
            {
                value: 'EUR',
                label: '€',
            },
            {
                value: 'BTC',
                label: '฿',
            },
            {
                value: 'JPY',
                label: '¥',
            },
        ];

        return (
            <React.Fragment>
                <form onSubmit={(event: any) => {
                    this.onSubmit(event)
                }} noValidate>
                    {/*<TextField {...this.handleInputDataChange("email")} label="Email Address"/>*/}
                    {/*<br/>*/}
                    {/*<TextField {...this.handleInputDataChange("password")} type="password" label="Password"/>*/}

                    <Select
                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                        }}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <TextField {...this.handleInputDataChange("email")} type="email" label="Email Address" margin="normal" fullWidth required/>

                    <TextField {...this.handleInputDataChange("password")} type="password" label="Password" margin="normal" fullWidth required/>


                    <br/>


                    <TextField {...this.handleInputDataChange("file")} type="file" label="file"/><br/>
                    <TextField {...this.handleInputDataChange("file")} type="file" label="file" inputProps={{
                        'multiple': true,
                    }}/><br/>
                    <br/>
                    <br/>
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </React.Fragment>
        );
    }


}