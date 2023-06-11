'use client'

import Pill from '../Pill'
import {
  ContentWrapper,
  DesignSectionContainer,
  HeaderWrapper,
  ItemWrapper,
  NameWrapper,
  ViewAll,
  YearWrapper,
} from './HomeStyles'
import {Divider} from 'src/components/UI/generalLayoutStyles'

const DesignSection = ({
  header,
  count,
  link,
  items,
}: {
  header: string
  count: number
  link: string
  items: any
}) => {
  return (
    <>
      <Divider />
      <DesignSectionContainer>
        <HeaderWrapper>
          <h2>{header}</h2>
          <ViewAll href={link}>
            <span>VIEW ALL</span>
            <Pill active="false" count={count} />
          </ViewAll>
        </HeaderWrapper>
        <ContentWrapper>
          {items?.map((item: any, index: number) => {
            const {mainImage, name, year, sys} = item
            const {url, description} = mainImage
            console.log(mainImage)
            return (
              <ItemWrapper key={index} href={`${link}/${sys.id}`}>
                <img src={url} alt={description} />
                <NameWrapper>{name}</NameWrapper>
                <YearWrapper>{year}</YearWrapper>
              </ItemWrapper>
            )
          })}
        </ContentWrapper>
      </DesignSectionContainer>
    </>
  )
}

export default DesignSection
