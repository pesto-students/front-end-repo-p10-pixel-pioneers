import React from "react";
import Carousel from "react-material-ui-carousel";

function Slider(props) {
  const {
    sliderItems,
    sliderType,
    sliderAutoPlay,
    sliderStopOnHover,
    sliderNavStyle,
    sliderNavigatorsShow, //show hide nav button
    slideNavigatorsHide,
    sliderIndicators, //bottom indicator
    sliderIndicatorsStyle,
    sliderActiveIndicator,
  } = props;

  return (
    <div>
      <Carousel
        animation={sliderType ? sliderType : "slide"} //"fade" | "slide"
        autoPlay={sliderAutoPlay} // ? sliderAutoPlay : true} //{false}
        stopAutoPlayOnHover={sliderStopOnHover} //{sliderStopOnHover ? sliderStopOnHover : false}
        // timeout="300" //kind of blank time
        interval="3000" //duration after which changes slide
        reverseEdgeAnimationDirection={false}
        navButtonsAlwaysVisible={
          sliderNavigatorsShow ? sliderNavigatorsShow : false
        }
        navButtonsAlwaysInvisible={
          slideNavigatorsHide ? slideNavigatorsHide : false
        }
        // cycleNavigation={true}slideNavigatorsHide
        // fullHeightHover={true}
        navButtonsProps={{
          style: sliderNavStyle && sliderNavStyle,
        }}
        // NextIcon={<RandomIcon/>}
        // PrevIcon={<RandomIcon/>}
        indicators={sliderIndicators ? sliderIndicators : false}
        indicatorIconButtonProps={{
          style: sliderIndicatorsStyle
            ? sliderIndicatorsStyle
            : {
                marginTop: "0px",
              },
        }}
        activeIndicatorIconButtonProps={{
          style: sliderActiveIndicator && sliderActiveIndicator,
        }}
      >
        {sliderItems.map((item, i) => (
          <Item key={i} item={item} type="IMAGE" className={props.className} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  const { item, className } = props;
  switch (props.type) {
    case "IMAGE":
      return (
        <div className={className}>
          <img
            src={item.photo}
            alt={item?.label}
            style={{
              height: "100%",
              maxHeight: "100%",
              minHeight: "100%",
              width: "100%",
              maxWidth: "100%",
              minWidth: "100%",
            }}
            onClick={
              // () => {
              item.onClick // ? item.onClick() : null;
              // }
            }
          />
        </div>
      );
    case "IMAGE_WITH_CONTENT":
      return (
        <div>
          <img src="" alt=""></img>
          <span></span>
        </div>
      );
    case "CONTENT":
      return <span></span>;
    default:
      return <span></span>;
  }
}

export default Slider;
