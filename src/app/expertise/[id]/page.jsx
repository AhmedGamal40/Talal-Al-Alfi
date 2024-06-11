 "use client"
import React from 'react'
import { useParams } from "next/navigation";
import ExpertiseId from "../../Components/Expertise/ExpertiseId"
function Page() {
    const { id } = useParams();
   
  return (
    <div>
        <ExpertiseId id={id}/>
    </div>
  )
}

export default Page