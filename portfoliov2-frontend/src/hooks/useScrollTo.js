import React from 'react'
import { useNavigate } from 'react-router-dom'

const useScrollTo = (id) => {
  const navigate = useNavigate()

  return [
    () => 
        {
            navigate('/')
            while (document.getElementById(id) == null) {
                console.log("here")
                if(document.getElementById(id)) {
                    document.getElementById(id).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })  
                }
            }
        }
  ]
}

export default useScrollTo