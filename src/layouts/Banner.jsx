import { IconButton } from '../components'
import { Carousel } from '@trendyol-js/react-carousel'
import styled from '@emotion/styled'
import { useMediaQuery } from '../hooks'
import { BannerSlide } from './BannerSlide'
import { ChevronLeftIcon, ChevronRightIcon } from '../icons'

const CarouselCustom = styled(Carousel)({
	position: 'relative',
	width: '100%',
	minHeight: '95vmin',
	'& > div': {
		cursor: 'default',
	},
})

export const Banner = () => {
	const isDesktop = useMediaQuery('screen and (min-width: 65rem)')
	return (
		<CarouselCustom
			responsive
			swiping
			swipeOn={0.25}
			show={1}
			slide={1}
			transition={0.5}
			autoSwipe={!isDesktop ? 10000 : false}
			rightArrow={
				<IconButton
					style={{
						position: 'absolute',
						top: 'calc(50% + 1rem)',
						zIndex: 1,
						right: 'max(1rem, (100% - 70rem) / 2)',
						display: !isDesktop && 'none',
					}}
				>
					<ChevronRightIcon />
				</IconButton>
			}
			leftArrow={
				<IconButton
					style={{
						position: 'absolute',
						top: 'calc(50% + 1rem)',
						zIndex: 1,
						left: 'max(1rem, (100% - 70rem) / 2)',
						display: !isDesktop && 'none',
					}}
				>
					<ChevronLeftIcon />
				</IconButton>
			}
		>
			<BannerSlide />
			<BannerSlide />
		</CarouselCustom>
	)
}
