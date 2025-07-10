import { useRecoilValue } from 'recoil'
import { loginModalState } from '@_atom/Modal'
import Modal from '@_componentsModal/login/login'

export default function Login(){
    const isOpen = useRecoilValue(loginModalState)
    return (
        <>
            {isOpen && <Modal />}
        </>
    )
}