import React from 'react'

type Props = {}

const BrowserPreview = (props: Props) => {
  return (
    <>
    <iframe src="http://localhost:3001" width="100%" height="100%" title="Preview Area"></iframe>
  </>
  )
}

export default BrowserPreview