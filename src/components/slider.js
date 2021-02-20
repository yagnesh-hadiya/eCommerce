import React from "react";
import { StyleSheet, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const Slider = (props) => {
  return (
    <View style={styles.container} >
      <SliderBox
        disableOnPress={false}
        autoplay={true}
        resizeMode={'contain'}
        images={props.imageData}
        sliderBoxHeight={170}
        paginationBoxVerticalPadding={0}
        parentWidth={0}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginHorizontal: 10,
  }
});

export default Slider;