import React, { useMemo } from 'react'
import ModalGenerateHls from '../Modals/ModalGenerateHls'
import ModalPickGDriveFolder from '../Modals/ModalPickGDriveFolder'

const ModalsContainer: React.FC = () => {
  const Modals = useMemo(() => [ModalPickGDriveFolder, ModalGenerateHls], [])

  return (
    <>
      {Modals.map((Modal, keyModal) => (
        <Modal key={`modal${keyModal}`} />
      ))}
    </>
  )
}

export default ModalsContainer
