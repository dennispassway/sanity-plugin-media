import {Flex} from '@sanity/ui'
import {Asset} from '@types'
import React, {FC} from 'react'

import FileIcon from '../FileIcon'

type Props = {
  asset: Asset
}

const FileAssetPreview: FC<Props> = (props: Props) => {
  const {asset} = props

  if (asset.mimeType.search('audio') === 0) {
    return (
      <Flex align="center" justify="center" style={{height: '100%'}}>
        <audio controls src={asset.url} style={{width: '100%'}} />
      </Flex>
    )
  }

  if (asset.mimeType.search('video') === 0) {
    return (
      <video
        controls
        src={asset.url}
        style={{
          height: '100%',
          width: '100%'
        }}
      />
    )
  }

  return <FileIcon asset={asset} width="50%" />
}

export default FileAssetPreview
