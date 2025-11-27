import React from 'react'
import CounterWithoutHook from './hooks/CounterWithoutHook.jsx'
import CounterWithUseState from './hooks/CounterWithUseState.jsx'
import CounterWithUseEffect from './hooks/counterWithUseEffect.jsx'
import CounterWithUseRef from './hooks/CounterWithUseRef.jsx'

export default function HooksContainer() {
  return (
    <div>
        <CounterWithoutHook/>
        <CounterWithUseState/>
        <CounterWithUseEffect/>
        <CounterWithUseRef/>
    </div>
  )
}
