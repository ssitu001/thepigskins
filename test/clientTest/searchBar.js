import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SearchBar from '../../client/src/components/SearchBar';


describe('<SearchBar />', function() {
  it('Should be able to take an input', function() {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have props for searched item', function () {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.props().searchedPlayer).to.be.defined;
  })

});