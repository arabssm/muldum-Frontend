import { useRecoilValue } from 'recoil'
import { whereismypasswordModalState } from '../../atom/Modal'
import Modal from '../../component/modal/password/password'



export default function Login(){
    const isOpen = useRecoilValue(whereismypasswordModalState)
    return (
        <>
         {isOpen && <Modal />}
        </>
    )
}



