import * as React from 'react'
import {ChangeEvent, FunctionComponent, useState} from 'react'

import "./ContentStyles.module.scss"
import {FormContainer} from "app/components/Transfer/FormContainer";
import {Island} from "app/components/Island/Island";
import {TitleIsland} from "app/components/Transfer/TitleIsland";
import {IslandContent} from "app/components/Transfer/IslandContent";
import {SetThePrice} from "app/components/Transfer/SetThePrice";
import {ButtonType} from "app/components/form/Button";
import {ShowMore} from "app/components/Transfer/ShowMore";
import {OrderEnt} from "app/components/Transfer/Entities";

export interface ContentProps{

    pushToCurrent?:()=>void
    salary:number|null
    amount:number,
    identificatePol:string,
    baggage:string,
    car:string,
    name:string,
    phone:string,
    mail:string
    nameSign:string,
    req:string
    ReqInfoStart:string|Date,
    ReqInfoEnd:string|Date,
    places:number,
    RetTrnsfStart:string|Date,
    RetTrnsfEnd:string|Date
}

export const Content:FunctionComponent<ContentProps>=(props)=>{
    const [select,setSelect]=useState()
    const [input,setInput]=useState()
    const [handleClick,setHandleClick]=useState()
    const [dropdown,setDropdown]=useState()
    const [pushToCurrent,setPushToCurrent]=useState()
    return(
        <div className={"containerContent"}>


                <Island>

                    <TitleIsland  fromPlace={"Gomel,Park Festivalnuy"}
                                  to={"Minsk,Manejskaya Street"}/>
                    <IslandContent  select={(e: ChangeEvent<HTMLSelectElement>)=>setSelect(e.target.value)}
                                    input={(e: ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)}
                                    renderForm={handleClick}
                                    dropdown={()=>setDropdown(!dropdown)}
                                    isFixed={true}
                                    salary={props.salary}
                                    pushToCurrent={props.pushToCurrent}
                                     ReqInfoStart={props.ReqInfoStart}
                                    ReqInfoEnd={props.ReqInfoEnd}
                                    RetTrnsfEnd={props.RetTrnsfStart}
                                    RetTrnsfStart={props.RetTrnsfEnd}
                                    places={props.places}
                    />
                    {

                        !handleClick&&props.salary===null?
                        <React.Fragment>
                        {select && input ? <SetThePrice disabled={false} type={ButtonType.MAIN}
                                                        handleClick={() => setHandleClick(true)}/>
                            : <SetThePrice disabled={true} type={ButtonType.__VK}
                                           text={"choose a car and set the price"}/>}
                        </React.Fragment>
                        :
                        null


                    }
                    {
                        handleClick?
                            <div  className={"showMoreString"}>
                                <div onClick={()=>setDropdown(!dropdown)}>Show more</div>
                                <div className="pointerBorder"/>

                            </div>
                            :
                            null
                    }
                    {
                        dropdown?
                            <ShowMore amount={props.amount}
                                      baggage={props.baggage}
                                      car={props.car}
                                      name={props.name}
                                      phone={props.phone}
                                      mail={props.mail}
                                      identificatePol={props.identificatePol}
                                      nameSign={props.nameSign}
                                      req={props.req}/>
                            :
                            null
                    }


                </Island>


        </div>
    )
}
