import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';

const props = { note: { text: 'test note'} }

describe('Note', () => {
    let note = mount(<Note {...props} />)
    it('should mount succesfully', () => {
        expect(note.find('p').text()).toEqual(props.note.text)
    });
})
