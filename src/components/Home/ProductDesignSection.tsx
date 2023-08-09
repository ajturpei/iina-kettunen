'use client'

import {useInView} from 'react-intersection-observer'
import Pill from '../Pill'
import {
  ContentWrapper,
  DesignSectionContainer,
  HeaderWrapper,
  ViewAll,
} from './HomeStyles'
import {Divider} from 'src/components/UI/generalLayoutStyles'
import {useEffect, useState} from 'react'
import ProjectWithMainImage from '../Galleries/ProjectWithMainImage'

const DesignSection = ({
  header,
  count,
  link,
  items,
  frontpage = false,
}: {
  header: string
  count: number
  link: string
  items: any
  frontpage?: boolean
}) => {
  const isSSR = typeof window === 'undefined'
  const [ssr, setSsr] = useState(isSSR)

  const {ref, inView, entry} = useInView({
    /* Optional options */
    threshold: 0.1,
    fallbackInView: true,
    initialInView: true,
  })

  const animate = inView || ssr
  console.log(frontpage)
  const filteredItems = frontpage
    ? items.filter((item: any) => item?.frontpageGallery)
    : items

  useEffect(() => {
    setSsr(isSSR)
  }, [isSSR])

  return (
    <DesignSectionContainer ref={ref} animate={animate.toString()}>
      <Divider />
      <HeaderWrapper>
        <h2>{header}</h2>
        <ViewAll href={link}>
          <span>VIEW ALL</span>
          <Pill active="false" count={count} />
        </ViewAll>
      </HeaderWrapper>
      <ContentWrapper>
        <ProjectWithMainImage items={filteredItems} link={link} />
      </ContentWrapper>
    </DesignSectionContainer>
  )
}

export default DesignSection
