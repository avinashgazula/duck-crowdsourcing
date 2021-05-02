import React, { useContext, useEffect } from 'react';
import '../App.css';
import { GlobalContext } from '../context/GlobalState';

export const Responses = () => {
    const { crowdsourceInfo, getCrowdsourcedInfo } = useContext(GlobalContext)

    useEffect(() => {
        getCrowdsourcedInfo()
    }, []);

    return (
        <>
            {
                crowdsourceInfo.length
                    ?
                    (<table id="responsesTable" className="table table-responsive-sm table-bordered border border-5" >
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Time of the day</th>
                                <th scope="col">Type of food</th>
                                <th scope="col">Location</th>
                                <th scope="col">Number of ducks fed</th>
                                <th scope="col">Quantity of food</th>
                            </tr>
                        </thead>
                        <tbody>
                            {crowdsourceInfo.length !== 0 && crowdsourceInfo.map((item) =>
                                <tr key={Math.random()}>
                                    <td>{item.timeOfDayFed}</td>
                                    <td>{item.foodFed}</td>
                                    <td>{item.locationFed}</td>
                                    <td>{item.countFed}</td>
                                    <td>{item.quantityFed}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>)
                    :
                    <p>Not enough data available</p>
            }
        </>
    )
}