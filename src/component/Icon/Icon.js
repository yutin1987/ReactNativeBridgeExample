import React, { Component, PropTypes } from 'react';
import { Platform, Text } from 'react-native';
import custom from './custom';
import concat from 'lodash/concat';

const IconNamePropType = PropTypes.oneOf(
  Object.keys(custom)
);

export default class Icon extends Component {
  static propTypes = {
    name: IconNamePropType.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    style: Text.propTypes.style,
  };

  static defaultProps = {
    size: 20,
  };

  render() {
    const {
      name,
      size: propSize,
      color,
      style,
      ...props,
    } = this.props;

    let glyph = '?';
    let fontFamily;
    let fontSize = propSize;

    // if (material[name]) {
    //   glyph = String.fromCharCode(material[name]);
    //   fontFamily = Platform.select({
    //     ios: 'Material Icons',
    //     android: 'MaterialIcons',
    //   });
    // }

    if (custom[name]) {
      glyph = String.fromCharCode(custom[name]);
      fontFamily = 'CustomIcons';
      fontSize = propSize * 1.3;
    }

    props.style = [{
      color,
      fontSize,
      fontFamily,
      fontWeight: 'normal',
      fontStyle: 'normal',
    }, style];

    return (<Text {...props}>{glyph}</Text>);
  }
}
