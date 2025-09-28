
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

const deleteAppointmentFromLS = (id) => {
  console.log(id)
  const appointments = getAppointment()
  console.log(appointments)
  const left = appointments.filter(appointmentId => parseInt(appointmentId) !== id)
  console.log(left)
  localStorage.setItem('appointment',JSON.stringify(left))
}

export{saveLocalStorage, getAppointment,deleteAppointmentFromLS }