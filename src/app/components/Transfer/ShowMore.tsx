import * as React from 'react'
import {FunctionComponent} from "react";
import './ShowMoreStyles.module.scss'
import {Match} from "app/components/Transfer/Match";
import {CarsProps} from "app/components/Transfer/IslandContent";
import {clientInfo} from "app/components/Transfer/Interfaces";
export interface ShowMoreProps{
amount:number,
    identificatePol:string,
    baggage:string,
    car:string,
name:string,
    phone:string,
    mail:string
    nameSign:string,
    req:string
}



export const ShowMore:FunctionComponent<ShowMoreProps>=(props)=>{
    return(
        <div className="dropdown">
                <Match title={"total"}>

                    {props.amount} persons:
                    {props.identificatePol}
                </Match>
            <Match title={"baggage"}>
                {props.baggage}
            </Match>
            <Match title={"car"}>
                {props.car}
            </Match>
            <Match title={"client"}>
                {props.name}
                {props.phone}
                {props.mail}
            </Match>
            <Match title={"name sign"}>
                {props.nameSign}
            </Match>
            <Match title={"requeierennts"} >
                {props.req}

            </Match>
        </div>
    )
}
