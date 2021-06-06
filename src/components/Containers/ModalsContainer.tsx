import React, { useMemo } from 'react'
import ModalPickGDriveFolder from '../Modals/ModalPickGDriveFolder/index'

const ModalsContainer: React.FC = () => {
  const Modals = useMemo(() => [ModalPickGDriveFolder], [])

  return (
    <>
      {Modals.map((Modal, keyModal) => (
        <Modal key={`modal${keyModal}`} />
      ))}
    </>
  )
}

export default ModalsContainer
