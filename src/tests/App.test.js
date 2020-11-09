import { shallow } from 'enzyme';
import React from 'react';

import { App } from '../App';
import findByTestAttr from './test-utils';

const setup = (props = {}) => {
    let component = shallow(<App {...props} />);
    return component;
};

describe('App.js test with props', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        props = {
            dispatch: () => null,
            showsList: []
        };
        wrapper = setup(props);
    });

    it('should render the App main correctly', () => {
        const component = findByTestAttr(wrapper, 'app-container');
        expect(component.length).toEqual(1);
    });

    it('should render a appbar along with 2 tabs', () => {
        const component = findByTestAttr(wrapper, 'app-container');
        expect(component.props().children.length).toEqual(3);
    });

    it('should render 2 tabs correctly, with labels of "Shows" and "Favorites" respectively', () => {
        const component = findByTestAttr(wrapper, 'appbar-tabs');
        const tabOneLabel = component.props().children[0].props.label;
        const tabTwoLabel = component.props().children[1].props.label;
        expect(component.props().children.length).toEqual(2);
        expect(tabOneLabel).toEqual('Shows');
        expect(tabTwoLabel).toEqual('Favorites');
    });
});