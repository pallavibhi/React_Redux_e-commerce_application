import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import React from 'react';
import {AddProductConnected as AddProduct} from './AddProduct';

configure({ adapter: new Adapter() });

describe('Addproduct ',() =>{
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddProduct />);
  });

  it('should contain a `Form` element', () => {
    expect(wrapper.find('.form-horizontal').is('form')).toBe(true);
  });

  it('should call AddProduct method on `Submit` ', () => {
    var pro = AddProduct.prototype;
    spyOn(pro, 'addProduct');
    var wrap = mount(<AddProduct />);
    wrap.find('.form-horizontal').simulate('submit');
    expect(pro.addProduct).toHaveBeenCalled();
  })
});
