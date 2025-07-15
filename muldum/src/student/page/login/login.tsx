import { useRecoilValue } from 'recoil'
import { loginModalState } from '@_all/atom/Modal'
import Modal from '@_component/modal/login/login'

export default function Login(){
    const isOpen = useRecoilValue(loginModalState)
    return (
        <>
            {isOpen && <Modal />}
        </>
    )
}