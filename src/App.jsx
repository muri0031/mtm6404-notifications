import React, { useState } from 'react';
import './App.css'
import notificationData from './notifications';


/*Break into components*/

/*************Heading*************/
const NotificationsHeading = ({heading, style}) => {
  return <h1 style={style}>{heading}</h1>
}
/************ID*****************/
function Id ({id}) {
  return <h3 className=" rounded text-center text-black bg-body-secondary mt-2 me-5 ms-5"> {id}</h3>
}

/**********Name************/
function Name ({name}) {
  return <h2 className='text-center'> {name}</h2>
}

/*********Notificacion*********/
function Message ({message}) {
  return <p>{message}</p>
}

/***********clear**************/
function Clear ({clear}) {
  return (
    <div className="d-flex justify-content-center mb-2">
    <button className='btn btn-secondary' onClick={clear}>Clear</button>
    </div>
  )

}

/********ClearAll****************/
function ClearAll ({clearAll}) {
  return (
    <div className="d-flex justify-content-center">
    <button className='btn-lg btn btn-outline-secondary mb-5' onClick={clearAll}>Clear All</button>
    </div>
  )
}
/*********AllNotifications*****/
function Notifications ( {notifications, onClear}) {

return (
    <div>
      {notifications.map((notification) => (
        <div className='bg-dark-subtle m-4 p-1 text-center rounded border border-end-0' key={notification.id}>
          <Id id={notification.id} />
          <Name name={notification.name} />
          <Message message={notification.message} />
          <Clear clear={() => onClear(notification.id)} />
        </div>
        
      ))}
    </div>
  )
}

/**************Display number of notifications************/
function DisplayNotifications ({notifications}) {
return(
  <p className='fs-2 text-center mt-4 mb-4 bg-dark text-white'>
   {notifications.length > 1 ? `You have ${notifications.length} notifications`
   : `You don't have notifications`} </p>
)
}



function App() {

  const style = { 
    fontWeight: 'bold', 
    fontSize: '45px',
    textAlign: 'center'
  }
  
  const [notifications, setNotifications] = React.useState(notificationData)
  const clearAll = () => {
    setNotifications([])
  }
  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id))
  }


  return (
    <>
      
      <NotificationsHeading heading="Notifications" style={style} />
      <DisplayNotifications notifications={notifications}/>
      <Notifications notifications={notifications} onClear={clearNotification}/>
      <ClearAll clearAll={clearAll} />
      </>

    
  )
}
export default App
