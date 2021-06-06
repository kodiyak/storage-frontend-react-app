import {
  Avatar,
  Heading,
  Button,
  Circle,
  Progress,
  BoxProps,
  SimpleGrid
} from '@chakra-ui/react'
import React from 'react'
import { BeatLoader } from 'react-spinners'
import { Row, Col, TextMini, FileSize } from '../../../../packages/react-chakra-ui'
import GDriveAuthApi from '../../../../services/api/GDriveAuthApi'
import { usePercent } from '../../../../packages/react-chakra-ui/src/hooks/usePercent'
import { useLoaders } from '../../../../hooks/useLoaders'
import { Link } from 'react-router-dom'
import SlideLeftGroupHover from '../../../../packages/react-chakra-ui/src/components/GroupHover/SlideLeftGroupHover/index'
import { RightIcon } from '../../../../packages/react-chakra-ui/src/icons'

interface GDriveAuthCardProps extends BoxProps {
  gDriveAuth: App.GDriveAuth
  canReload?: boolean
}

const GDriveAuthCard: React.FC<GDriveAuthCardProps> = ({
  gDriveAuth,
  canReload,
  ...rest
}) => {
  const quotaPercent = usePercent(
    gDriveAuth?.about?.storageQuota?.usage,
    gDriveAuth?.about?.storageQuota?.limit
  )

  const { isLoading } = useLoaders(`GDriveAuth/${gDriveAuth.id}`)

  return (
    <Col bg="gray.900" rounded="md" shadow="lg" role="group" {...rest}>
      <Row p={4} alignItems="center">
        <Circle
          size={14}
          p={1}
          border="2px solid transparent"
          borderColor="green.500"
        >
          <Avatar
            w="100%"
            h="100%"
            src={gDriveAuth.about?.user?.photoLink || ''}
            name={gDriveAuth.about?.user?.displayName || ''}
          />
        </Circle>
        <Col flex={1} pl={4}>
          <Row mb={2}>
            <Row flex={1}>
              {gDriveAuth.about?.user?.displayName && (
                <Heading size="md">{gDriveAuth.about?.user?.displayName}</Heading>
              )}
            </Row>

            <Link to={`/users/google/${gDriveAuth.id}`}>
              <SlideLeftGroupHover transition="all .2s ease-in-out">
                <Row alignItems="center">
                  <TextMini mr={4}>Details</TextMini>
                  <RightIcon />
                </Row>
              </SlideLeftGroupHover>
            </Link>
          </Row>
          <Heading size="sm">{gDriveAuth.email}</Heading>
          <SimpleGrid gap={2} columns={2}>
            {gDriveAuth.files && (
              <TextMini>{gDriveAuth.files.length} files</TextMini>
            )}
            {gDriveAuth.folders && (
              <TextMini>{gDriveAuth.folders.length} folders</TextMini>
            )}
          </SimpleGrid>
          {canReload && (
            <Row mt={2}>
              <Button
                rounded="sm"
                size="sm"
                ml="auto"
                spinner={<BeatLoader size={6} color="white" />}
                isLoading={isLoading}
                onClick={async () => {
                  await GDriveAuthApi.loadAbout(gDriveAuth)
                  await GDriveAuthApi.loadFiles(gDriveAuth)
                  await GDriveAuthApi.loadFolders(gDriveAuth)
                }}
              >
                Load
              </Button>
            </Row>
          )}
        </Col>
      </Row>
      {gDriveAuth.about && (
        <Col p={2} pt={0}>
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
      )}
    </Col>
  )
}

export default GDriveAuthCard
