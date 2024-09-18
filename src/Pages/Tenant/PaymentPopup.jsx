
import React from 'react'
import "./PaymentPopUp.css"
const PaymentPopup = ({ closePopup }) => {
  return (
    <div className="PaymentPopupOverlay">
      <div className="PaymentFormWrapper">
      <div className="payFormHeader">
        <h3 className="CloseButton" onClick={closePopup}>X</h3>
        </div>
      <form action="">
        <div className="InputPayForm">
                <div className='payInput'>
                  <p>First Name</p>
                  <input type="text"/>
                </div>
                <div className='payInput'>
                  <p>Last Name</p>
                  <input type="text"  />
                </div>

                <div className='payInput'>
                  <p>Amount</p>
                  <input type="text"  />
                </div>
                <div className='payInput'>
                  <p>Payment Method</p>
                  <select name="select" id="">
                  <option value="">select</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="card">Card</option>
                  </select>
                  </div>
                <div className='payInput' >
                  <p>Notes <span>(optional)</span></p>
                  <input type="text"  style={{height:"65"}}/>
                </div>
                
                </div>
                <div className="payButton">
                    <button>pay</button>
                </div>
              </form>
               
      </div>
    </div>
  )
}

export default PaymentPopup