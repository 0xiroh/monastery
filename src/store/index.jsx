import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  alert: { show: false, msg: '', link:'', color: '' },
  loading: { show: false, msg: '' },
  tx: '',
  contract: null,
  maxSupply: 100,
  connectedAccount: '',
  nfts: [],
})

const setAlert = (msg, link, color = 'green') => {
  setGlobalState('alert', { show: true, msg, color })
  setTimeout(() => {
    setGlobalState('alert', { show: false, msg: '', color })
    setGlobalState('loading', false)
  }, 12000)
}

const setTx = (tx) => {
  setGlobalState('tx', tx.toString());
}

const setLoadingMsg = (msg) => {
  const loading = getGlobalState('loading')
  setGlobalState('loading', { ...loading, msg})
}

export {
  useGlobalState,
  setGlobalState,
  getGlobalState,
  setAlert,
  setLoadingMsg,
  setTx
}