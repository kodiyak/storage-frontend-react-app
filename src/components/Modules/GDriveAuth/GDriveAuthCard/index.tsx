import { Avatar, Heading, Button, Circle, Progress } from '@chakra-ui/react'
import React from 'react'
import { BeatLoader } from 'react-spinners'
import { Row, Col, TextMini, FileSize } from '../../../../packages/react-chakra-ui'
import GDriveAuthApi from '../../../../services/api/GDriveAuthApi'
import { usePercent } from '../../../../packages/react-chakra-ui/src/hooks/usePercent'

interface GDriveAuthCardProps {
  gDriveAuth: App.GDriveAuth
}

const GDriveAuthCard: React.FC<GDriveAuthCardProps> = ({ gDriveAuth }) => {
  const quotaPercent = usePercent(
    gDriveAuth?.about?.storageQuota?.usage,
    gDriveAuth?.about?.storageQuota?.limit
  )

  return (
    <Col bg="gray.900" rounded="md" shadow="lg">
      <Row p={4} alignItems="center">
        <Circle
          size={14}
          p={1}
          border="2px solid transparent"
          borderColor="green.500"
        >
          <Avatar w="100%" h="100%" src={gDriveAuth.about?.user?.photoLink || ''} />
        </Circle>
        <Col flex={1} pl={4}>
          <Heading size="sm">{gDriveAuth.email}</Heading>
          <Row mt={2}>
            <Button
              rounded="sm"
              size="sm"
              ml="auto"
              spinner={<BeatLoader size={6} color="white" />}
              onClick={() => {
                GDriveAuthApi.show(gDriveAuth.id)
              }}
            >
              Load
            </Button>
          </Row>
        </Col>
      </Row>
      <Col p={2}>
        <Row alignItems="center">
          <Progress
            flex={1}
            value={quotaPercent || 0}
            size="xs"
            rounded="lg"
            colorScheme="primary"
          />
          <TextMini ml={4}>
            <FileSize sizeFormat="GB">
              {gDriveAuth.about?.storageQuota?.usage}
            </FileSize>{' '}
            GB
            {gDriveAuth.about?.storageQuota?.limit && (
              <>
                {' '}
                /{' '}
                <FileSize sizeFormat="GB">
                  {gDriveAuth.about?.storageQuota?.limit}
                </FileSize>
                GB
              </>
            )}
          </TextMini>
        </Row>
      </Col>
    </Col>
  )
}

export default GDriveAuthCard
