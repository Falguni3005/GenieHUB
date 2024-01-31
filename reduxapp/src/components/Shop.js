import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'
export default function Shop() {
  const dispatch = useDispatch();
  const {withDrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch);
  const balance = useSelector(state=>state.amount)
  return (
    <div>
        <h2 className="my-3">Deposit/Withdraw Money</h2>
        <button className="btn btn-primary mx-2 my-2" onClick={()=>{withDrawMoney(100)}}>-</button>
         Update Balance ({balance})
        <button className="btn btn-primary mx-2 my-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}
