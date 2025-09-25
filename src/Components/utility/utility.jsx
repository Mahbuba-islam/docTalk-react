import { toast } from "react-toastify"

const getAppointment = () => {
    const appointment = localStorage.getItem('appointment')
    if(appointment){
       return JSON.parse(appointment)
    }
    else{
    return []
    }
}


const saveLocalStorage = (id) => {
  const appointment = getAppointment()
  if(!appointment.includes(id)){
//    toast('You have already book this appointment')
   appointment.push(id)

  }
  
  
  localStorage.setItem('appointment', JSON.stringify(appointment))
}

export{saveLocalStorage, getAppointment}