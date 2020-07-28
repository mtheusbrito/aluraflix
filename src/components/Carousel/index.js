import React from 'react'
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink } from './styles'
import VideoCard from './components/VideoCard'

function VideoCardGroup ({
  ignoreVideoByUrl,
  category
}) {
  const categoryTitle = category.titulo
  const categoryColor = category.cor
  const categoryExtraLink = category.link_extra
  const videos = category.videos
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink &&
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          }
        </>
      )}
      <VideoCardList>
        {videos.map((video, index) => {
          if (ignoreVideoByUrl && ignoreVideoByUrl === video.url) {
            return null
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          )
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  )
}

export default VideoCardGroup
