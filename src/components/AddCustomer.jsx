import React, { useState } from 'react';
import { Input, Checkbox } from '@progress/kendo-react-inputs';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Form, Field } from '@progress/kendo-react-form';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import FormContainer from '../common/FormContainer';
import Axios from 'axios';
// import history from '../common/history';
import { useHistory } from "react-router-dom";


const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) => (emailRegex.test(value) ? "" : "یک ایمیل معتبر وارد کنید.");

const EmailInput = (fieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Input {...others} />
            {
                visited && validationMessage &&
                (<div className={"k-required"}>{validationMessage}</div>)
            }
        </div>
    );
};

const AddCustomer = (props) => {
    let history = useHistory();

    const initialForm = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        adress: '',
        city: '',
        state: ''
    };
    const [showDialog, setShowDialog] = useState(false)

    const toggleDialog = () => {
        setShowDialog(!showDialog);
    }

    const handleSubmit = (dataItem) => {

        console.log(dataItem);
        let formObject = {
            firstName: dataItem.firstName,
            lastName: dataItem.lastName,
            email: dataItem.email,
            phone: dataItem.phone,
            adress: dataItem.adress,
            city:dataItem.city,
            state:dataItem.state
        }
        console.log(formObject);


        Axios.post("http://localhost:61580/api/Customers", formObject).then(result => {

            history.push('/Customers');
        });

        // alert(JSON.stringify(dataItem, null, 2))
    }

    return (
        <div dir="rtl" className="k-rtl">
        <div className="container-fluid">
            {showDialog && <Dialog onClose={toggleDialog}>
                <p style={{ margin: "25px", textAlign: "center" }}>The form is successfully submitted!</p>
                <DialogActionsBar>
                    <button className="k-button" onClick={toggleDialog}>OK</button>
                </DialogActionsBar>
            </Dialog>}
            <div className='row my-4'>
                <FormContainer>
                    <Form
                        initialValues={initialForm}
                        onSubmit={handleSubmit}
                        render={(formRenderProps) => (
                            <form onSubmit={formRenderProps.onSubmit} className={'k-form'}>
                                <fieldset>
                                    <legend>ثبت کاربر</legend>
                                    <div>
                                        <Field name={'firstName'} component={Input} label={'نام شما'} />
                                    </div>
                                    <div>
                                        <Field name={'lastName'} component={Input} label={'نام خانوادگی'} />
                                    </div>
                                    {/* <div style={{ marginTop: "1rem" }}>
                                        <Field name={'dateOfBirth'} component={DatePicker} label={'Date of Birth'} />
                                    </div> */}
                                    <div>
                                        <Field name={"email"} type={"email"} component={EmailInput} label={"ایمیل"} validator={emailValidator} />
                                    </div>
                                    <div>
                                        <Field name={'phone'} component={Input} label={'شماره همراه'} />
                                    </div>
                                    <div>
                                        <Field name={'adress'} component={Input} label={'آدرس'} />
                                    </div>
                                    <div>
                                        <Field name={'city'} component={Input} label={'شهر'} />
                                    </div>
                                    <div>
                                        <Field name={'state'} component={Input} label={'استان'} />
                                    </div>
                                </fieldset>

                                {/* <fieldset>
                                    <legend>Credentials</legend>
                                    <div>
                                        <Field name={'userName'} component={Input} label={'Username'} placeholder="Your username" />
                                    </div>
                                    <div>
                                        <Field name={'password'} component={Input} label={'Password'} placeholder="Your password" />
                                    </div>
                                    <div style={{ marginTop: "1rem" }}>
                                        <Field name={'twoFactor'} component={Checkbox} label={'Enable two-factor authentication'} />
                                    </div>
                                </fieldset> */}
                                <p><br/></p>
                                <div className="text-right">
                                    <button type="button" className="k-button" onClick={formRenderProps.onFormReset}>پاک کردن</button> &nbsp;
                                    <button type="submit" className="k-button k-primary" disabled={!formRenderProps.allowSubmit}>ثبت</button>
                                </div>
                            </form>
                        )} />
                </FormContainer>
            </div>
        </div>
        </div>
    )
}

export default AddCustomer;