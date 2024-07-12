import * as React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle } from 'notion-utils'
import { NotionRenderer } from 'react-notion-x'

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)

export const NotionPage = ({
  recordMap,
  rootPageId
}: {
  recordMap: ExtendedRecordMap
  rootPageId?: string
}) => {
  if (!recordMap) {
    return null
  }

  const title = getPageTitle(recordMap)
  console.log(title, recordMap)

  return (
      <>
        <Head>
          <meta name='description' content='ciazhar Developer Portfoliio' />

          <title>{title}</title>
        </Head>

        <NotionRenderer
          recordMap={recordMap}
          fullPage={true}
          darkMode={true}
          rootPageId={rootPageId}
          components={{
            Collection,
          }}
      />
    </>
  )
}
