import * as React from 'react'
import {FunctionComponent, useState} from "react";
import {Content} from "app/components/Transfer/Content";
import {Header} from "app/components/Transfer/Header";
import './TransferStyles.module.scss'

import svg1 from '/app/svg/25/disabled.svg'
import svg2 from'/app/app/svg/20/calendar-1.svg'
import svg3 from'/app/app/svg/20/calendar-5.svg'
import svg4 from'/app/app/svg/30/clock-1.svg'
import svg5 from'/app/app/svg/30/clock-2.svg'
import svg6 from'/app/app/svg/30/passenger.svg'
import svg7 from'/app/app/svg/30/disabled.svg'
import svg from '/app/svg/25/disabled.svg'
import {Current} from "app/components/Transfer/Current/Current";
import {FormContainer} from "app/components/Transfer/FormContainer";
import {OrderEnt} from "app/components/Transfer/Entities";


export interface TransferProps{

}

export const Transfer:FunctionComponent<TransferProps>=()=>{


        const [current,setCurrent]=useState()
        const [request,setRequest]=useState()
    const [pushCurrent,setPushCurrent]=useState()
    return(
        <div className={"Transfer"}>
            <Header current={()=>setCurrent(true)} request={()=>setRequest(true)}/>
            <FormContainer/>

            {OrderEnt.map(item =>
                <React.Fragment key={item.id}>
                    <Content
                            salary={item.salary}
                             RetTrnsfStart={item.RetTrnsfStart} ReqInfoStart={item.ReqInfoStart}
                             ReqInfoEnd={item.ReqInfoEnd} RetTrnsfEnd={item.RetTrensfEnd}
                             places={item.places}
                             req={item.requeierennts}
                             baggage={item.baggage} car={item.car} phone={item.client.phone}
                             mail={item.client.mail} amount={item.total} identificatePol={item.identificatePol}
                             nameSign={item.nameSign} name={item.client.name}

                     />
                </React.Fragment>
            )
            }


        </div>
    )
}
