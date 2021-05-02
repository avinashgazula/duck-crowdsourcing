import React, { useContext, useState } from 'react';
import '../App.css';
import { TIME_VALIDATION_ERROR } from '../config/constants';
import { GlobalContext } from '../context/GlobalState';
import { Alert } from './Alert';

export const SubmitResponse = () => {
    const defaultFormData = {
        timeOfDayFed: '',
        foodFed: '',
        locationFed: '',
        countFed: '',
        quantityFed: '',
        repeatSchedule: false,
        repeatFor: 1
    }
    const [formData, setFormData] = useState(defaultFormData);
    const [validationError, setValidationError] = useState('');
    const { message, submitCrowdsourceInfo } = useContext(GlobalContext)
    const { timeOfDayFed, foodFed, locationFed, countFed, quantityFed, repeatSchedule, repeatFor } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleCheckbox = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.checked })
    };

    const onSubmit = async e => {
        e.preventDefault();

        let timeList = timeOfDayFed.split(':')
        console.log(timeList.length !== 2, parseInt(timeList[0]), parseInt(timeList[1]));
        if ((timeList.length === 2 && parseInt(timeList[0]) <= 23 && parseInt(timeList[1]) <= 59)) {
            submitCrowdsourceInfo(formData)
            setFormData(defaultFormData)
            setValidationError('')
        } else {
            setValidationError(TIME_VALIDATION_ERROR)
        }
    }
    return (
        <div className="container mx-auto">
            {message ? <Alert message={message} /> : null}
            <form onSubmit={onSubmit}>
                <div className="form-group row">
                    <label htmlFor="timeOfDayFed" id="label-name" className="col-sm-3 col-form-label">
                        What time are the ducks fed?
            		</label>
                    <div className="col-sm-6 input-box">
                        <input type="time"
                            name="timeOfDayFed"
                            value={timeOfDayFed}
                            onChange={e => handleChange(e)}
                            required
                            className="form-control"
                            aria-labelledby="timeOfDayFed"
                            placeholder="Time of day fed (00:00 - 23:59)" />
                    </div>

                </div>
                <div className="form-group row">
                    <label htmlFor="foodFed" id="label-name" className="col-sm-3 col-form-label">
                        What food are the ducks fed?
            		</label>
                    <div className="col-sm-6 input-box">
                        <input type="text"
                            name="foodFed"
                            value={foodFed}
                            onChange={e => handleChange(e)}
                            required
                            className="form-control"
                            placeholder="Type of food" />
                    </div>

                </div>
                <div className="form-group row">
                    <label htmlFor="locationFed" id="label-locationFed" className="col-sm-3 col-form-label">
                        Where are the ducks fed?
            		</label>
                    <div className="col-sm-6 input-box">
                        <input type="text"
                            name="locationFed"
                            value={locationFed}
                            onChange={e => handleChange(e)}
                            required
                            className="form-control"
                            placeholder="Location" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="countFed" id="label-countFed" className="col-sm-3 col-form-label">
                        How many ducks are fed?
            		</label>
                    <div className="col-sm-6 input-box">
                        <input type="number"
                            min="0"
                            name="countFed"
                            value={countFed}
                            onChange={e => handleChange(e)}
                            required
                            className="form-control"
                            placeholder="Number of ducks" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="quantityFed" id="label-quantityFed" className="col-sm-3 col-form-label">
                        How much food are the ducks fed?
            		</label>
                    <div className="col-sm-6 input-box">
                        <input type="number"
                            min="0"
                            name="quantityFed"
                            value={quantityFed}
                            onChange={e => handleChange(e)}
                            required
                            className="form-control"
                            placeholder="Quantity (oz)" />
                    </div>

                </div>

                <div className="form-group row">
                    <label className=" col-sm-3 form-check-label" htmlFor="repeatSchedule">
                        Repeat Schedule?
        			</label>
                    <div className="col-sm-6">
                        <div className="form-check">
                            <input type="checkbox"
                                name="repeatSchedule"
                                value={repeatSchedule}
                                onChange={e => handleCheckbox(e)}
                                className="form-check-input" />
                        </div>
                    </div>
                </div>

                {
                    repeatSchedule ?
                        (<div className="form-group row">
                            <label htmlFor="repeatFor" id="label-repeatFor" className="col-sm-3 col-form-label">
                                Repeat for how many days?
           					 </label>
                            <div className="col-sm-6 input-box">
                                <input type="number"
                                    min="0"
                                    name="repeatFor"
                                    value={repeatFor}
                                    onChange={e => handleChange(e)}
                                    className="form-control"
                                    placeholder="Quantity" />
                            </div>

                        </div>)
                        :
                        <br />
                }
                <p className="validation-error">{validationError}</p>
                <button type="submit" className="btn btn-success btn-margin">Submit</button>
            </form>
        </div >
    );
}